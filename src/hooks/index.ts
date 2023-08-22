import { getCurrentInstance } from 'vue'

export * from '@vueuse/core'
export * from '@vueuse/components'
export * from 'vue-router'

export const useCtx = () => getCurrentInstance()?.proxy
