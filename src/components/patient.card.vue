<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ props.patient.user.username }}
                <div class="badge badge-secondary">{{ props.patient.vaccineHistories.length }} dose</div>
            </h2>
            <p> {{ props.patient.user.firstname }} {{ props.patient.user.lastname }}</p>
            <div class="card-actions justify-end">
                <div class="badge badge-outline">set vaccine</div>
                <div class="badge badge-outline">set doctor</div>
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