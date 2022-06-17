<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { skeletonProps } from './types'

export default defineComponent({
  name: 'WxSkeleton',
  props: skeletonProps,
  setup(props) {
    const cls = computed(() => [
      'weui-skeleton',
      { 'weui-skeleton_animation': props.animation }
    ])

    return {
      cls
    }
  }
})
</script>
