<template>
    <div class="alert alert-info shadow-lg my-8">
        <div>
            <p class="text-bold text-secondary text-3xl bg-seconary">
                {{props.vaccine.vaccine.codeName}}
            </p>
            <span class="text-scondary">{{props.vaccine.vaccine.fullName}}</span>
        </div>
        <span class="text-scondary">{{ props.vaccine.vaccineDate }}</span>
    </div>
</template>
<script setup>
const props = defineProps({
    vaccine: {
        type: Object,
    }
});
</script>