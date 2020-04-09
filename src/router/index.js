import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Login from '../pages/Login.vue'
import Profile from '../pages/Profile.vue'
import Devices from '../pages/Devices.vue'
import DeviceRecords from '../pages/DeviceRecords.vue'
import store from '../store'



Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/devices',
            name: 'devices',
            component: Devices,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/devicerecords/:id',
            name: 'devicerecords',
            component: DeviceRecords,
            meta: {
                requiresAuth: true
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    if (requiresAuth && !store.getters.loggedIn) {
        next('login')
    } else {
        next()
    }



})

export default router