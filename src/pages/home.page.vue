<template>
    <DefaultLayout>
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                <p class="uppercase tracking-loose w-full">The Vaccinated Checker</p>
                <h1 class="my-4 text-5xl font-bold leading-tight">Manage and check your vaccinated data today</h1>
                <p class="leading-normal text-2xl mb-8">
                    You can use this application to manage your patient, check your data, or do your thing.
                </p>

                <router-link to="/register">
                    <button class="btn btn-primary text-base-100">
                        Sign up, now
                    </button>
                </router-link>
            </div>
            <!--Right Col-->
            <div class="w-full md:w-3/5 py-6 text-center">
                <img class="w-full md:w-4/5 z-50" src="../assets/covid-19-vaccine-vector.jpg" />
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>