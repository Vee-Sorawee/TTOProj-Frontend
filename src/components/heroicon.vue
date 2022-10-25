<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{header}}</h1>
        <p class="py-6 text-md">
          This template using a Vue3 + VueUse + Vite + TailwindCSS + DaisyUI
        </p>
        <p class="py-6 text-md">
          {{ now }}
        </p>
        <button class="btn btn-ghost">
          <a class="link link-primary" href="https://daisyui.com/">
            learn more on daisy ui
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNow } from "@vueuse/core";

const now = useNow()

const props = defineProps({
  header: String
})
</script>