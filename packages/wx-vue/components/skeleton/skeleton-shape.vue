<template>
  <div :class="cls"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { skeletonShapeProps } from './types'

export default defineComponent({
  name: 'WxSkeletonShape',
  props: skeletonShapeProps,
  setup(props) {
    const cls = computed(() => [
      'weui-skeleton-shape',
      `weui-skeleton-shape_${props.type}`,
      `weui-skeleton-shape_${props.size}`
    ])

    return {
      cls
    }
  }
})
</script>
