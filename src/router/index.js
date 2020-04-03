import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Login from '../pages/Login.vue'
import DeviceDetail from '../pages/DeviceDetail.vue'
import Test from '../components/Test.vue'
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
            path: '/devicedetail',
            name: 'devicedetail',
            component: DeviceDetail,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    if (requiresAuth && !store.getters.loggedIn) {
       // const loginpath = window.location.pathname;
        next({name: 'login', query: {redirect: to.fullPath}})
    } else if (!requiresAuth && store.getters.loggedIn){
        next('home')
    } else next()



})

export default router