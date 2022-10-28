<template>
    <div class="card w-96 glass">
        <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{user.username}}</h2>
            <p>{{user.firstname}} {{user.lastname}}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Patient</button>
                <button class="btn btn-secondary">Doctor</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    user: {
        type: Object,
    }
});
</script>