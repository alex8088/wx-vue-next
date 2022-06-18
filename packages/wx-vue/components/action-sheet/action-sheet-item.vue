<template>
  <div
    :class="[
      'weui-actionsheet__cell',
      { 'weui-actionsheet__cell_warn': negative },
      { 'weui-actionsheet__cell_disabled': disabled }
    ]"
    role="button"
    :aria-disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { actionSheetItemProps, actionSheetContextKey } from './types'

export default defineComponent({
  name: 'WxActionSheetItem',
  props: actionSheetItemProps,
  emits: ['click'],
  setup(props, { emit }) {
    const actionSheet = inject(actionSheetContextKey)

    const handleClick = (): void => {
      if (props.disabled) return
      actionSheet?.close()
      emit('click')
    }

    return {
      handleClick
    }
  }
})
</script>
