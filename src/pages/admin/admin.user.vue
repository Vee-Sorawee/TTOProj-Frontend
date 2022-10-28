<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">All Unverified User</p>
        <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
            <UserCard v-for="u in user" :key=u.id :user=u />
        </div>
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminService from '@/service/adminService.js';
import UserCard from '@/components/user.card.vue';
import { onMounted, ref } from 'vue';
const props = defineProps({
    id: {
        type: String,
    }
});

const user = ref([]);
onMounted(async () => {
    const response = await AdminService.getUsers(1, 3);
    user.value = await response.data;
});
</script>