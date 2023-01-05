import { Http } from "../../utils/AppServices";
import useAuthStore from "./store.js"
export default {

    attemptLoggin: async (email, password) => {

        return Http.post({
            route: '/auth/login',
            data: {
                email: email,
                password: password
            }
        })
    },
    getProfileInfo() {
        let auth = useAuthStore()
        return Http.get({
            route: '/auth/me',
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    },
    updateProfile(data) {
        let auth = useAuthStore()
        return Http.post({
            route: '/profile',
            data,
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    },
    updateEmail(data) {
        let auth = useAuthStore()
        return Http.post({
            route: '/profile/emailchange',
            data,
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    },
    updatePassword(data) {
        let auth = useAuthStore()
        return Http.post({
            route: '/profile/passwdchange',
            data,
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    },
    changeAuthorizationTwoFactor(data) {
        let auth = useAuthStore()
        return Http.post({
            route: '/profile/twofachange',
            data,
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    },
    logOut: async () => {
        let auth = useAuthStore()
        return Http.get({
            route: '/auth/logout',
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    }

}