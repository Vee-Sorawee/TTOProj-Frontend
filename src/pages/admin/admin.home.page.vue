<template>
    <DefaultLayout>
        <div class="tabs">
            <p class="text-neutral text-5xl my-3 mx-3">Admin Page</p>
            <router-link :to="{name:'AdminHome'}" class="tab tab-lg tab-bordered hover:tab-active text-3xl" tabindex=1 >
                Profile
            </router-link>
            <router-link :to="{name:'AdminPatient'}" class="tab tab-lg tab-bordered hover:tab-active text-3xl" tabindex=2 >
                Patient
            </router-link>
            <router-link :to="{name:'AdminDoctor'}" class="tab tab-lg tab-bordered hover:tab-active text-3xl" tabindex=3 >
                Doctor
            </router-link>
            <router-link :to="{name:'AdminUser'}" class="tab tab-lg tab-bordered hover:tab-active text-3xl" tabindex=4 >
                User
            </router-link>
        </div>
    </DefaultLayout>
    <RouterView />
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
const props = defineProps({
    id: {
        type: String,
    }
});
</script>