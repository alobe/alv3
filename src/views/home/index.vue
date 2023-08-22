<script setup lang="ts">
import { ref } from 'vue'

const test = ref(0)
</script>

<template>
  <div class="h-full w-full flex items-center justify-center flex-col">
    <span class="mb-6">易焦煤模板</span>
    <a-button type="primary" text-color="black" @click="test++">{{ test }}</a-button>
  </div>
</template>

<style lang="less" scoped>

</style>
