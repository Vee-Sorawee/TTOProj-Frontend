<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">User Profile</p>
        <p class="text-neutral text-5xl my-3">
            {{store.getters.getCurrentUser}}
        </p>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { computed } from 'vue';
import store from '@/state/index.js';
</script>