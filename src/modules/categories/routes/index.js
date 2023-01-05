import Main from '../Main.vue'
export default [
    {
        path: "categories",
        name: "admin-categories",
        meta: {
            login_required: true,
            accepted_roles: ['Administrador']
        },
        component: Main
    }

]