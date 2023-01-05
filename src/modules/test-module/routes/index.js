import Main from '../Main.vue'
export default [
    {
        path: "test-module",
        name: "admin-test-module",
        meta: {
            login_required: true,
            accepted_roles: ['Administrador']
        },
        component: Main
    }

]