<template>
  <WxDialog :visible="visible">
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
  </WxDialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WxDialog from '../dialog/dialog.vue'
import { messageBoxProps } from './types'

export default defineComponent({
  name: 'WxMessageBox',
  components: {
    WxDialog
  },
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
