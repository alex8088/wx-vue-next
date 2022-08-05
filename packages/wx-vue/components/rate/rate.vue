<template>
  <div :class="['weui-rate', { 'weui-rate_disabled': disabled }]">
    <div
      v-for="i in count"
      :key="i"
      :class="[
        'weui-rate__item',
        { 'weui-rate__item_active': (modelValue || 0) >= i }
      ]"
      :style="[
        starSyl,
        { backgroundColor: (modelValue || 0) >= i ? color : '' }
      ]"
      role="radio"
      :aria-checked="(modelValue || 0) >= i"
      :aria-setsize="count"
      :aria-posinset="i"
      @click="handleClick(i)"
    ></div>
    <slot name="text">
      <div v-if="texts.length > 0" class="weui-rate__desc">
        {{ texts[(modelValue || 0) - 1] }}
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type CSSProperties } from 'vue'
import { rateProps } from './types'

export default defineComponent({
  name: 'WxRate',
  props: rateProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const starSyl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}

      if (props.size) {
        style.height = `${props.size}px`
        style.width = `${props.size}px`
      }

      if (props.spacing) {
        style.marginRight = `${props.spacing}px`
      }

      return style
    })

    const handleClick = (i: number): void => {
      if (props.disabled) return
      const value = props.modelValue === i ? i - 1 : i
      emit('update:modelValue', value)
      emit('change', value)
    }

    return {
      starSyl,
      handleClick
    }
  }
})
</script>
