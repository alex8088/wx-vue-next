<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="weui-overlay weui-mask"
      role="dialog"
      :aria-hidden="!visible"
      aria-modal="true"
      @click.self="handleClick"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { overlayProps } from './props'

export default defineComponent({
  name: 'WxOverlay',
  inheritAttrs: false,
  props: overlayProps,
  emits: ['update:visible', 'close'],
  setup(props, { emit, expose }) {
    const handleClick = (): void => {
      if (props.hideOnBlur) {
        close()
      }
    }

    const close = (): void => {
      emit('update:visible', false)
      emit('close')
    }

    expose({
      close
    })

    return {
      handleClick
    }
  }
})
</script>
