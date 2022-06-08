<template>
  <button
    role="button"
    :class="cls"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="weui-primary-loading"
      ><i class="weui-primary-loading__dot"></i
    ></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { buttonProps } from './types'

export default defineComponent({
  name: 'WxButton',
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit }) {
    const cls = computed(() => [
      'weui-btn',
      {
        'weui-btn_primary': props.type === 'default',
        'weui-btn_default': props.type === 'light',
        'weui-btn_warn': props.type === 'warn',
        'weui-btn_loading': props.loading,
        'weui-btn_disabled': props.disabled,
        'weui-btn_mini': props.mini
      }
    ])

    const handleClick = (event: Event): void => {
      if (props.disabled || props.loading) {
        return
      }
      emit('click', event)
    }

    return {
      cls,
      handleClick
    }
  }
})
</script>
