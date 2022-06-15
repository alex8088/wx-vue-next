<template>
  <div role="dialog" aria-hidden="false" aria-modal="true">
    <transition name="fade">
      <div v-if="visible" class="weui-mask" @click="handleClick"></div>
    </transition>
    <transition name="fade">
      <div v-if="visible" class="weui-dialog" v-bind="$attrs">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { dialogProps } from './types'

export default defineComponent({
  name: 'WxDialog',
  inheritAttrs: false,
  props: dialogProps,
  emits: ['update:visible', 'close'],
  setup(props, { emit }) {
    const handleClick = (): void => {
      if (props.hideOnBlur) {
        emit('update:visible', false)
        emit('close')
      }
    }

    return {
      handleClick
    }
  }
})
</script>
