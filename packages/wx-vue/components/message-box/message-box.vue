<template>
  <div role="dialog" aria-hidden="false" aria-modal="true">
    <transition name="fade">
      <div v-if="visible" class="weui-mask"></div>
    </transition>
    <transition name="fade">
      <div v-if="visible" class="weui-dialog">
        <div class="weui-dialog__hd">
          <strong class="weui-dialog__title">{{ title }}</strong>
        </div>
        <div class="weui-dialog__bd">
          {{ message }}
        </div>
        <div class="weui-dialog__ft">
          <a
            v-if="type === 'confirm'"
            href="javascript:"
            class="weui-dialog__btn weui-dialog__btn_default"
            @click="handleClick(0)"
            >{{ cancelButtonText }}</a
          >
          <a
            href="javascript:;"
            class="weui-dialog__btn weui-dialog__btn_primary"
            @click="handleClick(1)"
            >{{ okButtonText }}</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { messageBoxProps } from './types'

export default defineComponent({
  name: 'WxMessageBox',
  props: messageBoxProps,
  emits: ['update:visible', 'close'],
  setup(_, { emit }) {
    const handleClick = (action): void => {
      emit('update:visible', false)
      emit('close', action)
    }
    return {
      handleClick
    }
  }
})
</script>
