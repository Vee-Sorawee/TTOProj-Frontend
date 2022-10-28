<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">All Patient</p>
        <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
            <PatientCard v-for="p in patient" :key="p.id" :patient="p" />
        </div>
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminService from '@/service/adminService.js';
import PatientCard from '@/components/patient.card.vue';
import { onMounted,ref } from 'vue';
const props = defineProps({
    id: {
        type: String,
    }
});

const patient = ref([]);
onMounted(async () => {
    const response = await AdminService.getPatients(1,6);
    patient.value = response.data;
});
</script>