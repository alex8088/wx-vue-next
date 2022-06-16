<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="weui-toptips weui-toptips_warn"
      style="display: block"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { topTipProps } from './types'

export default defineComponent({
  props: topTipProps,
  emits: ['update:visible'],
  setup(props, { emit }) {
    let timeout

    const openTimer = (): void => {
      if (props.duration > 0) {
        if (timeout) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
          timeout = null
          emit('update:visible', false)
        }, props.duration)
      }
    }

    const closeTimer = (): void => {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
    }

    watch(
      () => props.visible,
      (val) => (val ? openTimer() : closeTimer())
    )
  }
})
</script>
