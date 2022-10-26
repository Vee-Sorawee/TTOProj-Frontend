<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from '@/components/navbar.vue';
import AuthService from '@/service/authService.js';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const user = ref({});
const role = ref('');

onMounted(async () => {
  if(store.getters.getCurrentUser == null){
    if(localStorage.getItem('token') != null){
      store.dispatch('setStatus', true)
      const credential = await AuthService.getUser();
      user.value = await credential.data;
      role.value = await credential.data.authorities[0];
      await store.dispatch('setCurrentUser', user.value);
      await store.dispatch('setRole', role.value);
    }
  }
});
</script>