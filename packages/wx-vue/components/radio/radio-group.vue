<template>
  <div class="weui-cells_radio">
    <slot />
    <div v-if="validateMessage" role="alert" class="weui-cell weui-cell__error">
      {{ validateMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, computed, nextTick } from 'vue'
import { radioGroupProps, radioGroupContextKey } from './types'
import { useId, useFormField } from '../hooks'

export default defineComponent({
  name: 'WxRadioGroup',
  props: radioGroupProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const { validateMessage, validate } = useFormField(props.field, props.rules)

    const radioName = computed<string>(() => {
      return props.name || useId().value
    })

    let radioValue = computed({
      get() {
        return props.modelValue
      },
      set(value: string | number | boolean | undefined) {
        nextTick(() => validate('change'))
        emit('update:modelValue', value)
        emit('change', value)
      }
    })

    provide(radioGroupContextKey, {
      name: radioName,
      value: radioValue
    })

    return {
      validateMessage
    }
  }
})
</script>
