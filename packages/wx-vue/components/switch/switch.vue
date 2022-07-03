<template>
  <label
    :for="switchId"
    :class="[
      'weui-cell',
      'weui-cell_switch',
      { 'weui-cell_disabled': switchDisabled }
    ]"
  >
    <div :id="`${switchId}-label`" class="weui-cell__bd" aria-hidden="true">
      <slot>{{ label }}</slot>
    </div>
    <div class="weui-cell__ft">
      <input
        :id="switchId"
        v-model="switchValue"
        type="checkbox"
        class="weui-switch"
        role="switch"
        :name="`${switchId}-switch`"
        :checked="switchChecked"
        :aria-checked="switchChecked"
        :aria-labelledby="`${switchId}-label`"
        :aria-disabled="switchDisabled"
        :true-value="activeValue"
        :false-value="inactiveValue"
        :disabled="switchDisabled"
      />
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue'
import { switchProps } from './types'
import { formContextKey, formGroupContextKey } from '../form/types'
import { useId } from '../hooks'

export default defineComponent({
  name: 'WxSwitch',
  inheritAttrs: false,
  props: switchProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const switchId = useId()

    const form = inject(formContextKey)
    const formGroup = inject(formGroupContextKey)

    const switchDisabled = computed<boolean>(() => {
      return props.disabled || formGroup?.disabled || form?.disabled || false
    })

    let switchValue = computed({
      get() {
        return props.modelValue
      },
      set(value: string | number | boolean | undefined) {
        emit('update:modelValue', value)
        emit('change', value)
      }
    })

    let switchChecked = computed<boolean>(
      () => props.modelValue === props.activeValue
    )

    return {
      switchId,
      switchValue,
      switchChecked,
      switchDisabled
    }
  }
})
</script>
