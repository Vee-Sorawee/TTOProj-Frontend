<template>
    <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
        <img class="object-cover w-full h-56"
            :src="props.doctor.imageUrls"
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
        default:{
            fullName: '',
            hospital: '',
            imageUrls: ''
        }
    }
});
</script>