<template>
  <div>
    <transition name="fade">
      <div v-if="visible" class="weui-mask" @click="handleClick"></div>
    </transition>
    <div
      :class="['weui-actionsheet', { 'weui-actionsheet_toggle': visible }]"
      role="dialog"
      aria-modal="true"
      :aria-hidden="visible"
    >
      <div v-if="title || $slots.title" class="weui-actionsheet__title">
        <slot name="title">
          <p class="weui-actionsheet__title-text">{{ title }}</p>
        </slot>
      </div>
      <div class="weui-actionsheet__menu">
        <slot></slot>
      </div>
      <div v-if="!hideCancel" class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" role="button" @click="handleClick">
          {{ cancelText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { actionSheetProps, actionSheetContextKey } from './types'

export default defineComponent({
  name: 'WxActionSheet',
  props: actionSheetProps,
  emits: ['update:visible', 'close'],
  setup(_, { emit }) {
    const handleClick = (): void => {
      emit('update:visible', false)
      emit('close')
    }

    provide(actionSheetContextKey, {
      close: handleClick
    })

    return {
      handleClick
    }
  }
})
</script>
