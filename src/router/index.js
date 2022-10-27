import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.page.vue'
import About from '@/pages/about.page.vue'
import Register from '@/pages/authentication/register.page.vue'
import Login from '@/pages/authentication/login.page.vue'
import Profile from '@/pages/user/user.profile.page.vue'
import Admin from '@/pages/admin/admin.home.page.vue'
import GetCredential from '@/service/authService'

const checkRole = async (to) => {
    let role = ""
    let id = 0;
    if (localStorage.getItem('token') != null) {
        const credential = await GetCredential.getUser();
        role = await credential.data.authorities[0];
        id = await credential.data.id;
    }
    if(role === "ROLE_ADMIN"){
        return "/admin/"+id;
    }
}

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
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        beforeEnter: [checkRole]
    },
    {
        path: '/admin/:id',
        name: 'Admin',
        component: Admin,
        props:true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router