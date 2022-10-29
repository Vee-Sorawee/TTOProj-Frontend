import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.page.vue'
import About from '@/pages/about.page.vue'
import Register from '@/pages/authentication/register.page.vue'
import Login from '@/pages/authentication/login.page.vue'
import Profile from '@/pages/user/user.profile.page.vue'
import Admin from '@/pages/admin/admin.home.page.vue'
import AdminPatient from '@/pages/admin/admin.patient.vue'
import AdminDoctor from '@/pages/admin/admin.doctor.vue'
import AdminUser from '@/pages/admin/admin.user.vue'
import AdminPatientDetails from '@/pages/admin/patient/admin.patient.detail.vue'
import AdminPatientSetVaccine from '@/pages/admin/patient/admin.set.vaccine.vue'
import AdminPatientSetDoctor from '@/pages/admin/patient/admin.set.doctor.vue'
import GetCredential from '@/service/authService'
import Doctor from '@/pages/doctor/doctor.home.page.vue'
import DoctorPatient from '@/pages/doctor/doctor.patient.detail.vue'

const checkRole = async (to) => {
    let role = ""
    let id = 0;
    let doctor_id = 0;
    let patient_id = 0;
    if (localStorage.getItem('token') != null) {
        const credential = await GetCredential.getUser();
        role = await credential.data.authorities[0];
        id = await credential.data.id;
        doctor_id = await credential.data.doctorID;
        patient_id = await credential.data.patientID;
    }
    if(role === "ROLE_ADMIN"){
        return "/admin/"+id;
    }
    if(role === "ROLE_DOCTOR"){
        return "/doctor/" + doctor_id;
    }
    if(role === "ROLE_PATIENT"){
        return "/patient/" + patient_id;
    }
    return "/"
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
        props:true,
        children: [
            {
                path:"",
                name:"AdminHome",
                component: Profile
            },
            {
                path: 'user',
                name: 'AdminUser',
                component: AdminUser
            },
            {
                path: 'patient',
                name: 'AdminPatient',
                component: AdminPatient
            },
            {
                path: 'doctor',
                name: 'AdminDoctor',
                component: AdminDoctor
            }
        ],
    },
    {
        path: '/admin/patient/:id',
        name: 'AdminPatientDetails',
        component: AdminPatientDetails,
        props:true,
        children: [
            {
                path:"set-vaccine",
                name:"AdminPatientSetVaccine",
                component: AdminPatientSetVaccine
            },
            {
                path:"set-doctor",
                name:"AdminPatientSetDoctor",
                component: AdminPatientSetDoctor
            }
        ]
    },
    {
        path: '/doctor/:id',
        name: 'Doctor',
        component: Doctor,
        props: true
    },
    {
        path: '/doctor/patient/:id',
        name: 'DoctorPatient',
        component: DoctorPatient,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router