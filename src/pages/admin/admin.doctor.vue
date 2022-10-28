<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">All Doctor</p>
        <div>
            <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
                <DoctorCard v-for="d in doctor" :key="d.id" :doctor="d" />
            </div>
            <div class="btn-group">
                <button @click="loadDoctor(i)" v-for="i in page" class="btn btn-secondary my-4">{{i}}</button>
            </div>
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
const totalElem = ref(0);
const page = ref([]);
onMounted(async () => {
    const response = await AdminService.getDoctors(1, 3);
    totalElem.value = response.headers['x-total-count']
    doctor.value = await response.data;
    page.value = Array.from({length: Math.ceil(totalElem.value/3) }, (_, i) => i + 1);
});

const loadDoctor = async (page) => {
    const response = await AdminService.getDoctors(page, 3);
    doctor.value = response.data;
}
</script>