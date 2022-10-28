<template>
    <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
        <img class="object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar">
        <div class="py-5 text-center">
            <a class="block text-2xl font-bold text-gray-800">
                {{props.doctor.fullName}}
            </a>
            <span class="text-sm text-gray-700">{{props.doctor.hospital}}</span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    doctor: {
        type: Object,
    }
});
</script>