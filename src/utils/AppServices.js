import axios from 'axios'
import { objectToQuery } from './Functions'
import useAuthStore from '../modules/auth/store.js'
const URL = import.meta.env.DEV ? import.meta.env.VITE_LOCALHOST : import.meta.env.VITE_API_URL;


const authVerification = (response) => {

    console.log(response)
    if (response.status == 401) {
        let auth = useAuthStore();
        auth.logOut()

    }




}
export const AppServices = {

    create: async (params) => {


        let response = await Http.post({
            route: params.route,
            data: params.data,
            headers: params.headers
        })
        return response

    },
    update: async (params, id) => {


        try {
            let response = await Http.post({
                route: `${params.route}/update/${id}`,
                data: params.data,
                headers: params.headers
            })
            return response
        } catch (e) {


            return e
        }
    },
    delete: async (params, id) => {


        try {
            let response = await Http.delete({
                route: `${params.route}/${id}`,
                headers: params.headers
            })
            return response
        } catch (e) {


            return e
        }
    },
    find: async (params) => {


        try {
            let response = await Http.get({
                route: params.route,
                headers: params.headers
            })
            return response
        } catch (e) {


            return e
        }
    },
    list: async (params) => {

        try {
            let response = await Http.get({
                route: params.route,
                headers: params.headers
            })
            return response
        } catch (e) {


            return e
        }
    },
    paginate: async (params) => {


        let response = await Http.post({
            route: params.route,
            data: params.data,
            headers: params.headers
        })
        return response

    }
}


//HTTP METHODS
export const Http = {

    post: async (params) => {
        try {
            let response = await axios.post(
                URL + params.route,
                params.data ?? {},
                { headers: params.headers }
            );
            return response
        } catch (e) {
            console.log(e)
            authVerification(e.response)
            return e.response
        }
    },
    get: async (params) => {

        let _query = '';
        if (params.query) _query = objectToQuery(params.query)

        try {
            let response = await axios.get(
                URL + params.route + _query,
                { headers: params.headers }
            )
            console.log(response)
            return response
        } catch (e) {
            console.log(e)
            authVerification(e.response)
            return e.response
        }
    },
    put: async (params) => {

        try {
            let response = await axios.put(
                URL + params.route,
                params.data,
                { headers: params.headers }
            )
            return response
        } catch (e) {
            console.log(e)
            authVerification(e.response)
            return e.response
        }
    },
    delete: async (params) => {

        try {
            let response = await axios.delete(
                URL + params.route,
                { headers: params.headers }
            )
            return response
        } catch (e) {
            console.log(e)
            authVerification(e.response)
            return e.response
        }
    }
}