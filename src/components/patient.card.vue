<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img :src="props.patient.user.imageUrls" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
                <router-link :to="{name:'AdminPatientDetails', params:{id:props.patient.user.id}}">{{ props.patient.user.username }}</router-link>
                <div class="badge badge-secondary">{{ props.patient.vaccineHistories.length }} dose</div>
            </h2>
            <p> {{ props.patient.user.firstname }} {{ props.patient.user.lastname }}</p>
            <div class="card-actions justify-end">
                <div class="badge badge-outline">
                    <router-link :to="{name:'AdminPatientSetVaccine', params:{id:props.patient.user.id}}">
                        set vaccine
                    </router-link>
                </div>
                <div class="badge badge-outline">
                    <router-link :to="{name:'AdminPatientSetDoctor',params:{id:props.patient.user.id}}">
                        set doctor
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    patient: {
        type: Object,
    }
});
</script>