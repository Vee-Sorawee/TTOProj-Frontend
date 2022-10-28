<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">User Profile</p>
        <ProfileCard :user="store.getters.getCurrentUser"/>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ProfileCard from '@/components/profile.card.vue';
import store from '@/state/index.js';
</script>