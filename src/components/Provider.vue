<script lang="ts" setup>
// https://github.com/vueComponent/ant-design-vue/issues/6407#issuecomment-1636129871
import { useStyleProvider } from 'ant-design-vue/es/_util/cssinjs'

const theme = {
  token: {
    colorPrimary: '#FA8C16',
  },
}
useStyleProvider({
  hashPriority: 'high',
})
</script>

<template>
  <a-config-provider :theme="theme">
    <slot />
  </a-config-provider>
</template>
