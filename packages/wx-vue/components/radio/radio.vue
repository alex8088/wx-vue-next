<template>
  <label
    :class="[
      'weui-cell',
      'weui-cell_active',
      'weui-check__label',
      { 'weui-cell_disabled': disabled }
    ]"
    :for="radioId"
  >
    <div class="weui-cell__bd">
      <slot></slot>
    </div>
    <div class="weui-cell__ft">
      <input
        :id="radioId"
        v-model="radioGroup.value.value"
        type="radio"
        v-bind="$attrs"
        :value="value"
        :name="name || radioGroup.name.value"
        :disabled="disabled"
        class="weui-check"
      />
      <span class="weui-icon-checked"></span>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { radioProps, radioGroupContextKey } from './types'
import { useId } from '../hooks'

export default defineComponent({
  name: 'WxRadio',
  inheritAttrs: false,
  props: radioProps,
  setup() {
    const radioGroup = inject(radioGroupContextKey)

    const radioId = useId()

    return {
      radioGroup,
      radioId
    }
  }
})
</script>
