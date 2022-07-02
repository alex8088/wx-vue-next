<template>
  <label
    :class="[
      'weui-cell',
      'weui-cell_active',
      'weui-check__label',
      { 'weui-cell_disabled': disabled }
    ]"
    :for="checkId"
  >
    <div class="weui-cell__hd">
      <input
        :id="checkId"
        v-model="checkboxGroup.value.value"
        type="checkbox"
        v-bind="$attrs"
        :value="value"
        :name="name || checkboxGroup.name.value"
        :disabled="disabled"
        class="weui-check"
      />
      <span class="weui-icon-checked"></span>
    </div>
    <div class="weui-cell__bd">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { checkboxProps, checkboxGroupContextKey } from './types'
import { useId } from '../hooks'

export default defineComponent({
  name: 'WxCheckbox',
  inheritAttrs: false,
  props: checkboxProps,
  setup() {
    const checkboxGroup = inject(checkboxGroupContextKey)

    const checkId = useId()

    return {
      checkboxGroup,
      checkId
    }
  }
})
</script>
