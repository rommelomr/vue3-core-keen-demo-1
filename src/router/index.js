import { createRouter, createWebHistory } from 'vue-router'
import VerticalMenu from '../layouts/vertical-menu/VerticalMenu.vue'
import useAuthStore from '@/modules/auth/store.js'

import { DEFAULT_HOMES } from '@/utils/Consts.js'
import AuthRouter from '../modules/auth/router.js'

// import CategoriesRouter from '../modules/categories/routes/index.js'
import TestModuleRouter from '../modules/test-module/routes/index.js'
import Calendar from '../modules/calendar/Main.vue'
import Profile from '../modules/auth/Profile.vue'

const routes = [
    ...AuthRouter,
    {
        path: '/admin',
        component: VerticalMenu,
        children: [
            ...TestModuleRouter,
            // ...CategoriesRouter,

            {
                path: "calendar",
                name: "admin-calendar",
                meta: {
                    login_required: true,
                    accepted_roles: ['Administrador']
                },
                component: Calendar
            },
        ],

    },
    {

        path: '/',
        component: VerticalMenu,
        children: [
            {
                path: "profile",
                name: "profile",
                meta: {
                    login_required: true,
                    accepted_roles: []
                },
                component: Profile
            },

        ]
    },


    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()

    let route_requires_user_is_logged = to.meta.login_required;
    let default_home_user = DEFAULT_HOMES[auth.user.role]
    if (route_requires_user_is_logged) {

        if (!auth.user.is_logged) next({ name: 'sign-in' })
        let _accepted_roles = to.meta.accepted_roles ?? []
        let _can_access_any_user = _accepted_roles.length == 0
        let _current_type_user_is_accepted = _accepted_roles.includes(auth.user.role)
        return _can_access_any_user || _current_type_user_is_accepted ? next() : next({ name: default_home_user })

    } else {
        let router_is_only_for_guests = to.meta.only_guests ?? false
        if (router_is_only_for_guests) {

            return auth.user.is_logged ? next({ name: default_home_user }) : next()
        } else {
            return next()
        }
    }
    // if (to.meta.login_required && !auth.user.is_logged) {
    //     return next()

    // }

    // if (to.path == '/') {

    //     if (auth.user.is_logged) {

    //         return next({ path: DEFAULT_HOMES[auth.user.role] })
    //     }
    // }

})

export default router
