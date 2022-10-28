<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">All Unverified User</p>
        <div v-if="user.length !== 0">
            <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
                <UserCard v-for="u in user" :key=u.id :user=u />
            </div>
            <div class="btn-group">
                <button @click="loadUser(i)" v-for="i in page" class="btn btn-secondary my-4">{{ i }}</button>
            </div>
        </div>
        <p v-else class="text-neutral text-3xl my-3">No Unverified User yet.</p>
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
const totalElem = ref(0);
const page = ref([]);
onMounted(async () => {
    const response = await AdminService.getUsers(1, 3);
    totalElem.value = response.headers['x-total-count']
    user.value = await response.data;
    page.value = Array.from({ length: Math.ceil(totalElem.value / 3) }, (_, i) => i + 1);
});

const loadUser = async (page) => {
    const response = await AdminService.getUsers(page, 3);
    user.value = response.data;
}
</script>