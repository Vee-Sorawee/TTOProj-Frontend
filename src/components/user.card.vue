<template>
    <div class="card w-96 glass">
        <figure><img :src="user.imageUrls" alt="car!" /></figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{user.username}}</h2>
            <p>{{user.firstname}} {{user.lastname}}</p>
            <div class="card-actions justify-end">
                <button @click="setPatient" class="btn btn-primary">Patient</button>
                <button @click="setDoctor" class="btn btn-secondary">Doctor</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import adminService from '@/service/adminService';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    user: {
        type: Object,
    }
});

const setPatient = async () => {
    let con = await confirm('Are you sure to set this user as patient?');
    if(con){
        await adminService.verifyAsPatient(props.user.id);
        router.push({ name: 'AdminPatient' });
    }
}

const setDoctor = async () => {
    let con = await confirm('Are you sure to set this user as doctor?');
    if(con){
        const hospital = prompt('Enter hospital name'); 
        await adminService.verifyAsDoctor(props.user.id,hospital);
        router.push({ name: 'AdminDoctor' });
    }
}
</script>