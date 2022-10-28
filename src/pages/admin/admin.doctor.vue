<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">All Doctor</p>
        <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
            <DoctorCard v-for="d in doctor" :key="d.id" :doctor="d" />
        </div>
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminService from '@/service/adminService.js';
import DoctorCard from '@/components/doctor.card.vue';
import { onMounted, ref } from 'vue';
const props = defineProps({
    id: {
        type: String,
    }
});

const doctor = ref([]);
onMounted(async () => {
    const response = await AdminService.getDoctors(1, 3);
    doctor.value = await response.data;
});
</script>