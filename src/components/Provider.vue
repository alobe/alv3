<script lang="ts" setup>
import { StyleProvider } from 'ant-design-vue/es/_util/cssinjs'

const theme = {
  token: {
    colorPrimary: '#FA8C16',
  },
}
</script>

<template>
  <a-config-provider :theme="theme">
    <style-provider hash-priority="high">
      <slot />
    </style-provider>
  </a-config-provider>
</template>
