<template>
  <div v-if="visible" class="weui-mask_transparent"></div>
  <transition :name="type === 'text' ? 'slide-bottom' : 'fade'">
    <div v-if="visible" :class="cls">
      <i
        v-if="type !== 'text' && type !== 'loading'"
        :class="[
          'weui-icon_toast',
          {
            'weui-icon-success-no-circle': type === 'success',
            'weui-icon-warn': type === 'fail'
          }
        ]"
      ></i>
      <span
        v-if="type === 'loading'"
        class="weui-primary-loading weui-icon_toast"
      >
        <span class="weui-primary-loading__dot"></span>
      </span>
      <p class="weui-toast__content">{{ message }}</p>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { toastProps } from './types'

export default defineComponent({
  props: toastProps,
  emits: ['update:visible'],
  setup(props, { emit }) {
    const cls = computed(() => [
      'weui-toast',
      {
        'weui-toast_text': props.type === 'text'
      }
    ])

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

    return {
      cls
    }
  }
})
</script>
