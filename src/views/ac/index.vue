<script setup lang="ts">
import { ref } from 'vue'

const test = ref(0)
</script>

<template>
  <div @click="test++">
    {{ test }}accccc
  </div>
</template>

<style scoped>

</style>
