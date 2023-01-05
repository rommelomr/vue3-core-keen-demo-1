import { AppServices } from '@/utils/AppServices.js'
import useAuthStore from '@/modules/auth/store.js'
import { Http } from '../../../utils/AppServices'
export default {
    create: async (data) => {
        let auth = useAuthStore()
        return await Http.post({
            route: '/categories',
            data,
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    },
    createMany: async () => {

    },
    update: async (data, id) => {
        let auth = useAuthStore()
        return await Http.post({
            route: '/categories/update/' + id,
            data,
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    },
    delete: async (id) => {
        let auth = useAuthStore()
        return await Http.delete({
            route: '/categories/' + id,
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })

    },
    find: async () => {

    },
    list: async () => {

    },
    paginate: async (items_per_page, current_page, search) => {
        let auth = useAuthStore()
        return await Http.get({
            route: '/categories',
            query: {
                per_page: items_per_page,
                page: current_page
            },
            headers: {
                Authorization: 'Bearer ' + auth.user.token
            }
        })
    }

}