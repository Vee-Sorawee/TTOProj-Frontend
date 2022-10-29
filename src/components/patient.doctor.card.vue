<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img :src="props.patient.user.imageUrls" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
                <router-link :to="{name:'DoctorPatient', params:{id:props.patient.id}}">{{ props.patient.user.username }}</router-link>
                <div class="badge badge-secondary">{{ props.patient.vaccineHistories.length }} dose</div>
            </h2>
            <p> {{ props.patient.user.firstname }} {{ props.patient.user.lastname }}</p>
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