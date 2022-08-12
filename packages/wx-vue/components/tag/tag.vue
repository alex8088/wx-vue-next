<template>
  <span :class="cls" :style="syl">
    <span class="weui-tag__content"><slot /></span>
    <i
      v-if="closeable"
      class="weui-icon-close-thin"
      @click.stop="$emit('close', $event)"
    ></i>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, type CSSProperties } from 'vue'
import { tagProps } from './props'

const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indego',
  'purple',
  'cyan',
  'magenta',
  'gray'
]

export default defineComponent({
  name: 'WxTag',
  props: tagProps,
  emits: ['close'],
  setup(props) {
    const isBuiltInColor = computed(
      () => props.color && COLORS.includes(props.color)
    )

    const cls = computed(() => [
      'weui-tag',
      `weui-tag_${props.size}`,
      { [`weui-tag_${props.color}`]: isBuiltInColor.value },
      { 'weui-tag_bordered': props.bordered },
      { 'weui-tag_round': props.round },
      { 'weui-tag_closeable': props.closeable }
    ])

    const syl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}
      if (props.color && !isBuiltInColor.value) {
        style['--tag-bg-color'] = props.color
        style['--tag-border-color'] = props.color
        style['--tag-text-color'] = '#fff'
      }
      return style
    })

    return { cls, syl }
  }
})
</script>
