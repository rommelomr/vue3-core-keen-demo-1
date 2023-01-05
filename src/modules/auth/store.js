import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import LoginService from './services.js'
import useNotyf from '@/composables/useNotyf.js'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'vue-router'
import { parseToFormData } from '../../utils/Functions.js'

export default defineStore({
  id: 'auth-store',
  state: () => ({
    user: useStorage('auth', {
      token: '',
      is_logged: false,
      expiration: '',
      role: '',
      email: '',
      name: ''
    })
  }),

  actions: {
    async attemptLogin(form) {
      const response = await LoginService.attemptLoggin(form.email, form.password)
      let notyf = useNotyf()
      if (response.status != 200) {

        notyf.error(response.data.message)
        return
      }

      if (response.data.data == "Unauthorized") {
        notyf.error(response.data.message)
        return
      } else {
        notyf.success('Bienvenido')
        this.user.token = response.data.data.access_token;
        this.user.is_logged = true;
        this.user.expiration = jwt_decode(response.data.data.access_token).exp;
        this.user.role = response.data.data.usrole;
        this.user.email = response.data.data.usobject.email
        this.user.name = response.data.data.usobject.name

        window.location.assign('/')
        return
      }

    },
    async getProfileInfo() {
      let response = await LoginService.getProfileInfo()
      console.log(response)
    },
    async logOut() {
      LoginService.logOut()
      this.user.token = '';
      this.user.is_logged = '';
      this.user.expiration = '';
      this.user.role = '';
      this.user.email = '';
      this.user.name = '';
      window.location.assign('/')
    },
    async updateProfile(info) {

      let data = {
        company: info.company,
        country: info.country,
        lastname: info.last_name,
        name: info.name,
        phone: info.phone,
        photo: info.photo,
      }

      let parse = parseToFormData(data)

      let response = await LoginService.updateProfile(parse)
      let notyf = useNotyf()
      switch (response.status) {
        case 422: {
          notyf.error(response.data.message)
          return false
          break
        }
        case 200: {
          notyf.success(response.data.message)
          return true
          break
        }
      }


    },
    async updateEmail(form) {
      let notyf = useNotyf()
      let response = await LoginService.updateEmail(form)
      switch (response.status) {
        case 422: {
          notyf.error(response.data.message)
          return false
          break
        }
        case 200: {
          this.user.email = form.email
          notyf.success(response.data.message)
          return true
          break
        }
      }

    },
    async updatePassword(form) {
      let notyf = useNotyf()
      let data = {
        password: form.password,
        oldpassword: form.current
      }

      let response = await LoginService.updatePassword(data)
      switch (response.status) {
        case 422: {
          notyf.error(response.data.message)
          return false
          break
        }
        case 200: {
          notyf.success(response.data.message)
          return true
          break
        }
      }



    },
    async changeAuthorizationTwoFactor(bool) {

      let response = await LoginService.changeAuthorizationTwoFactor({ twofa: bool })
      let notyf = useNotyf()
      switch (response.status) {
        case 422: {
          notyf.error(response.data.message)
          return false
          break
        }
        case 200: {
          notyf.success(response.data.message)
          return true
          break
        }
      }

    },


  }
})
