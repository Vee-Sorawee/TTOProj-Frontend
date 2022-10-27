<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">Admin Page</p>
        <p class="text-neutral text-5xl my-3">All Patient</p>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="p in patient" :key="p.id" class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {{p.user.username}}
                        <div class="badge badge-secondary">{{p.vaccineHistories.length}} dose</div>
                    </h2>
                    <p> {{p.user.firstname}} {{p.user.lastname}}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">set vaccine</div>
                        <div class="badge badge-outline">set doctor</div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminService from '@/service/adminService.js';
import { ref, onMounted } from 'vue';
const admin = ref({})
const patient = ref([])
const props = defineProps({
    id: {
        type: Number,
    }
});

onMounted(async () => {
    const res = await AdminService.getAdmin();
    const patientRes = await AdminService.getPatients(1,6);
    patient.value = patientRes.data;
    admin.value = res.data;
});
</script>