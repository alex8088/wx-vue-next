<template>
  <div class="weui-cells_checkbox">
    <slot />
    <div v-if="validateMessage" role="alert" class="weui-cell weui-cell__error">
      {{ validateMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, computed, nextTick } from 'vue'
import { checkboxGroupProps, checkboxGroupContextKey } from './types'
import { useId, useFormField } from '../hooks'

export default defineComponent({
  name: 'WxCheckboxGroup',
  props: checkboxGroupProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const { validateMessage, validate } = useFormField(props.field, props.rules)

    const checkboxName = computed<string>(() => {
      return props.name || useId().value
    })

    let checkboxValue = computed({
      get() {
        return props.modelValue
      },
      set(value: (string | number)[] | undefined) {
        nextTick(() => validate('change'))
        emit('update:modelValue', value)
        emit('change', value)
      }
    })

    provide(checkboxGroupContextKey, {
      name: checkboxName,
      value: checkboxValue
    })

    return {
      validateMessage
    }
  }
})
</script>
