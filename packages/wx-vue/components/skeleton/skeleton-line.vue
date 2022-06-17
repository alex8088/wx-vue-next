<template>
  <div
    v-for="index in row"
    :key="index"
    class="weui-skeleton-line"
    :style="syl"
    v-bind="$attrs"
  ></div>
</template>

<script lang="ts">
import { defineComponent, computed, type CSSProperties } from 'vue'
import { skeletonLineProps } from './types'
import { isDef } from '../utils'

export default defineComponent({
  name: 'WxSkeletonLine',
  inheritAttrs: false,
  props: skeletonLineProps,
  setup(props) {
    const syl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}

      if (isDef(props.height)) {
        style.height = `${props.height}px`
      }

      return style
    })

    return {
      syl
    }
  }
})
</script>
