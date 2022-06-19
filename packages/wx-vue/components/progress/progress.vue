<template>
  <div class="weui-progress">
    <div class="weui-progress__bar" :style="barSyl">
      <div class="weui-progress__inner-bar" :style="innerBarSyl"></div>
    </div>
    <div v-if="showText" class="weui-progress__opr">
      <i
        v-if="status"
        :class="[
          { 'weui-icon-success-circle': status === 'success' },
          { 'weui-icon-cancel': status === 'fail' }
        ]"
      ></i>
      <span v-else class="weui-progress__opr-text">{{ `${percentage}%` }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type CSSProperties } from 'vue'
import { progressProps } from './types'

export default defineComponent({
  name: 'WxProgress',
  props: progressProps,
  setup(props) {
    const barSyl = computed<CSSProperties>(() => {
      return {
        height: `${props.strokeWidth}px`,
        borderRadius: `${props.strokeWidth}px`
      }
    })

    const innerBarSyl = computed<CSSProperties>(() => {
      return {
        width: `${props.percentage}%`,
        backgroundColor: props.color,
        borderRadius: `${props.strokeWidth}px`
      }
    })

    return {
      barSyl,
      innerBarSyl
    }
  }
})
</script>
