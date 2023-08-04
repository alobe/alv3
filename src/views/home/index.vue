<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue'
const test = ref(0)
</script>

<template>
  <div class="h-full w-full bg-orange-500 flex items-center justify-center">
    <div @click="test++" class="cursor-pointer">{{ test }}</div>
  </div>
</template>

<style scoped>

</style>
