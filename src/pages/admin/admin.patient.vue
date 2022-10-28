<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">All Patient</p>
        <div>
            <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
                <PatientCard class="my-2" v-for="p in patient" :key="p.id" :patient="p" />
            </div>
            <div class="btn-group">
                <button @click="loadPatient(i)" v-for="i in page" class="btn btn-secondary my-4">{{i}}</button>
            </div>
        </div>
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminService from '@/service/adminService.js';
import PatientCard from '@/components/patient.card.vue';
import { onMounted, ref } from 'vue';
const props = defineProps({
    id: {
        type: String,
    }
});

const patient = ref([]);
const totalElem = ref(0);
const page = ref([]);
onMounted(async () => {
    const response = await AdminService.getPatients(1, 3);
    totalElem.value = response.headers['x-total-count']
    patient.value = response.data;
    page.value = Array.from({length: Math.ceil(totalElem.value/3) }, (_, i) => i + 1);
});

const loadPatient = async (page) => {
    const response = await AdminService.getPatients(page, 3);
    patient.value = response.data;
}
</script>