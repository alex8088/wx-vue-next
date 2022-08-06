<template>
  <div
    :class="[
      'weui-loading-wrapper',
      { 'weui-loading-vertical': layout === 'vertical' }
    ]"
  >
    <i
      v-if="type === 'spinner'"
      role="img"
      aria-label="loading"
      class="weui-loading"
      :style="syl"
    ></i>
    <span
      v-else
      role="img"
      aria-label="loading"
      class="weui-primary-loading"
      :style="syl"
    >
      <span class="weui-primary-loading__dot"></span>
    </span>
    <span v-if="$slots.default" class="weui-loading__tips" :style="textStyle">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type CSSProperties } from 'vue'
import { loadingProps } from './props'
import { toUnit } from '../utils'

export default defineComponent({
  name: 'WxLoading',
  props: loadingProps,
  setup(props) {
    const syl = computed<CSSProperties>(() => {
      const size = toUnit(props.size)
      return {
        color: props.color,
        fontSize: size
      }
    })

    return {
      syl
    }
  }
})
</script>
