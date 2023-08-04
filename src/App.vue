<script lang="ts" setup>
import Provider from './components/Provider.vue'
</script>

<template>
  <Provider>
    <div class="flex flex-col items-center w-screen h-screen relative">
      <router-view />
    </div>
  </Provider>
</template>
