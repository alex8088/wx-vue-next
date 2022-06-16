<template>
  <div v-if="$slots.default" class="weui-badge-wraper" v-bind="$attrs">
    <slot />
    <span
      v-if="!hidden"
      :class="['weui-badge', { 'weui-badge_dot': dot }]"
      :style="syl"
    >
      {{ content }}
    </span>
  </div>
  <template v-else>
    <span
      v-if="!hidden"
      :class="['weui-badge', { 'weui-badge_dot': dot }]"
      :style="{ backgroundColor: color }"
      v-bind="$attrs"
    >
      {{ content }}
    </span>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed, type CSSProperties } from 'vue'
import { badgeProps } from './types'
import { isNumber } from '../utils'

export default defineComponent({
  name: 'WxBadge',
  inheritAttrs: false,
  props: badgeProps,
  setup(props) {
    const content = computed<string>(() => {
      if (props.dot) return ''

      if (isNumber(props.content) && isNumber(props.max)) {
        return props.content > props.max ? `${props.max}+` : `${props.content}`
      }

      return `${props.content}`
    })

    const syl = computed<CSSProperties>(() => {
      let style: CSSProperties = {
        backgroundColor: props.color
      }
      if (props.offset) {
        const [x, y] = props.offset

        style.right = isNumber(x) ? `${x}px` : x
        style.top = isNumber(y) ? `${y}px` : y
      }

      return style
    })

    return {
      content,
      syl
    }
  }
})
</script>
