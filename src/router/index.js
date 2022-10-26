import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.page.vue'
import About from '@/pages/about.page.vue'
import Register from '@/pages/authentication/register.page.vue'
import Login from '@/pages/authentication/login.page.vue'
import Profile from '@/pages/user/user.profile.page.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path : '/register',
        name : 'Register',
        component : Register
    },
    {
        path : '/login',
        name : 'Login',
        component : Login
    },
    {
        path : '/profile',
        name : 'Profile',
        component : Profile,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router