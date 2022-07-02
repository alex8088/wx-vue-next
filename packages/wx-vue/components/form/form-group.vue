<template>
  <div class="weui-cells__group weui-cells__group_form">
    <div v-if="title" class="weui-cells__title">{{ title }}</div>
    <div class="weui-cells">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { formGroupProps, formGroupContextKey } from './types'

export default defineComponent({
  name: 'WxFormGroup',
  props: formGroupProps,
  setup(props) {
    provide(formGroupContextKey, {
      labelWidth: props.labelWidth,
      disabled: props.disabled
    })
  }
})
</script>
