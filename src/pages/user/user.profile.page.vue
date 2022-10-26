<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">User Profile</p>
        <p class="text-neutral text-5xl my-3">
            {{user}}
        </p>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();
const user = computed(() => store.getters.getCurrentUser);
</script>