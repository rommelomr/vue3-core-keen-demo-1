import Main from '../Main.vue'
export default [
    {
        path: "__name__(kebabCase)",
        name: "admin-__name__(kebabCase)",
        meta: {
            login_required: true,
            accepted_roles: ['Administrador']
        },
        component: Main
    }

]