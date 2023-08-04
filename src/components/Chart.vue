<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
import chart, { ECBasicOption } from '@/utils/chart';

const { options } = defineProps<{ options: ECBasicOption }>()

onMounted(() => {
  const app = getCurrentInstance()
  const ref = app!.proxy!.$refs.chart as HTMLElement
  const e = chart.init(ref)
  e.setOption(options, true, true)
  window.addEventListener('resize', () => e.resize())
})
</script>

<template>
  <div ref="chart" class="e-chart" />
</template>

<style scoped>

</style>
