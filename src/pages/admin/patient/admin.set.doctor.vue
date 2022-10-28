<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3 mx-3">Set Doctor</p>
        <div>
            <select class="select select-primary w-full max-w-xs my-3" v-model="doc">
                <option disabled selected>Select Doctor</option>
                <option v-for="d in doctor" :key="d.id" :value="d.id">{{ d.fullName }}</option>
            </select>
            <button @click="addDoctor" class="btn btn-primary my-3">
                set Doctor
            </button>
        </div>
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminService from '@/service/adminService.js';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    patient_id: {
        type: String,
    }
});

const router = useRouter();
const doc = ref(0);
const doctor = ref([]);
onMounted(async () => {
    const response = await AdminService.getDoctors(1, 5);
    doctor.value = await response.data;
});
const addDoctor = async () => {
    await AdminService.setDoctor(props.patient_id,doc.value);
    router.go(0)
}
</script>