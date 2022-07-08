<template>
  <div>
    <transition name="a-fade">
      <div
        v-show="visible"
        class="weui-mask"
        @click="handleClick"
        @touchmove.prevent
      ></div>
    </transition>
    <transition name="a-slide-bottom">
      <div
        v-show="visible"
        :class="[
          'weui-half-screen-dialog',
          { 'weui-half-screen-dialog_large': large }
        ]"
      >
        <div class="weui-half-screen-dialog__hd" @touchmove.prevent>
          <div
            v-if="!hideCloseIcon && closeIconPosition === 'left'"
            class="weui-half-screen-dialog__hd__side"
          >
            <button class="weui-btn_icon" @click="handleClick">
              <i class="weui-icon-slide-down"></i>
            </button>
          </div>
          <div class="weui-half-screen-dialog__hd__main">
            <slot name="header">
              <strong class="weui-half-screen-dialog__title">
                {{ title }}
              </strong>
              <span class="weui-half-screen-dialog__subtitle">
                {{ subtitle }}
              </span>
            </slot>
          </div>
          <div
            v-if="!hideCloseIcon && closeIconPosition === 'right'"
            class="weui-half-screen-dialog__hd__side"
          >
            <button class="weui-btn_icon" @click="handleClick">
              <i class="weui-icon-slide-down"></i>
            </button>
          </div>
        </div>
        <div class="weui-half-screen-dialog__bd">
          <slot></slot>
        </div>
        <div
          v-if="$slots.footer"
          class="weui-half-screen-dialog__ft"
          @touchmove.prevent
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { halfScreenDialogProps } from './types'

export default defineComponent({
  name: 'WxHalfScreenDialog',
  props: halfScreenDialogProps,
  emits: ['update:visible', 'close'],
  setup(_, { emit }) {
    const handleClick = (): void => {
      emit('update:visible', false)
      emit('close')
    }

    return {
      handleClick
    }
  }
})
</script>
