import SignIn from './SignIn.vue'

import ForgotPassword from './ForgotPassword.vue'
//import SignUp from './SignUp.vue'
export default [
    {
        path: "/",
        name: "sign-in",
        meta: {
            only_guests: true
        },
        component: SignIn
    },

    {
        path: "/forgot-password",
        name: "forgot-password",
        component: ForgotPassword
    }
]