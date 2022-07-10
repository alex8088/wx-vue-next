<template>
  <div class="weui-tabbar">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, computed, ref } from 'vue'
import { tabbarProps, tabbarContextKey, type TabbarActiveName } from './types'

export default defineComponent({
  name: 'WxTabbar',
  props: tabbarProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    let activeName = computed<TabbarActiveName | undefined>({
      get() {
        return props.modelValue
      },
      set(value: TabbarActiveName | undefined) {
        emit('update:modelValue', value)
        emit('change', value)
      }
    })

    let index = ref<number>(-1)

    provide(tabbarContextKey, {
      activeName,
      activeColor: props.activeColor,
      index
    })
  }
})
</script>
