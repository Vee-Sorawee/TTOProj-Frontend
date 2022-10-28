<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3 mx-3">Admin Page / Patient Details</p>
        <div class="tabs py-4">
            <router-link :to="{name:'AdminPatientSetVaccine'}" class="tab tab-lg tab-bordered hover:tab-active text-3xl" tabindex=1 >
                Set Vaccine
            </router-link>
            <router-link :to="{name:'AdminPatientSetDoctor'}" class="tab tab-lg tab-bordered hover:tab-active text-3xl" tabindex=4 >
                Set Doctor
            </router-link>
        </div>
        <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
            <ProfileCard class="my-6" :user="patient.user" />
            <div class="grid grid-cols-1">
                <VaccineCard v-for="v in vaccine" :key="v.id" :vaccine="v"/>
            </div>
            <div>
                <p class="text-neutral text-2xl my-3 mx-3">Doctor in care</p>
                <DoctorCard class="my-6" :doctor="patient.doctor" />
            </div>
        </div>
    </DefaultLayout>
    <RouterView :patient_id="patient.id" />
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminService from '@/service/adminService.js';
import { onMounted, ref } from 'vue';
import ProfileCard from '@/components/profile.card.vue';
import DoctorCard from '@/components/doctor.card.vue';
import VaccineCard from '@/components/vaccine.card.vue';

const props = defineProps({
    id: {
        type: String,
    }
});

const patient = ref({});
const vaccine = ref([]); 
onMounted(async () => {
    const response = await AdminService.getUser(props.id);
    patient.value = response.data;
    vaccine.value = response.data.vaccineHistories;
});
</script>