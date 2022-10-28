<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3 mx-3">Set Vaccine</p>
        <div>
            <select class="select select-primary w-full max-w-xs my-3" v-model="vac">
                <option disabled selected>Select Vaccine</option>
                <option v-for="v in vaccine" :key="v.id" :value="v.codeName">{{ v.fullName }} ({{ v.codeName }})</option>
            </select>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Vaccine Date</span>
                </label>
                <input v-model="date" type="date" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>
            <button @click="addVaccine" class="btn btn-primary my-3">
                add vaccine
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

const vaccine = ref([]);
const vac = ref('');
const date = ref('');
const router = useRouter();

onMounted(async () => {
    const response = await AdminService.getVaccine();
    vaccine.value = response.data;
});

const addVaccine = async () => {
    if(vac.value == '' || date.value == ''){
        alert('Please fill all the field');
        return;
    }
    await AdminService.addVaccine(props.patient_id,vac.value, date.value);
    router.go(0)
}
</script>