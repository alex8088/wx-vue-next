<template>
  <div :class="cls" @click="handleClick">
    <div v-if="label || $slots.label" class="weui-cell__hd">
      <slot name="label">
        <span class="weui-label" :style="labelSyl">{{ label }}</span>
      </slot>
    </div>
    <div class="weui-cell__bd">
      <div class="weui-flex">
        <slot>
          <input
            type="text"
            class="weui-input"
            :placeholder="placeholder"
            :value="displayText"
            readonly
          />
        </slot>
      </div>
      <div
        v-if="validateMessage || helpText"
        role="alert"
        :class="[
          'weui-cell__tips',
          { 'weui-cell__tips_warn': validateMessage }
        ]"
      >
        {{ validateMessage || helpText }}
      </div>
    </div>
    <div v-if="showArrow" class="weui-cell__ft"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  provide,
  inject,
  type CSSProperties
} from 'vue'
import {
  formCellProps,
  formContextKey,
  formGroupContextKey,
  formCellContextKey
} from './types'
import { useFormField } from '../hooks'
import { toUnit } from '../utils'

export default defineComponent({
  name: 'WxFormCell',
  props: formCellProps,
  emits: ['click'],
  setup(props, { emit }) {
    const form = inject(formContextKey)
    const formGroup = inject(formGroupContextKey)

    const { validateMessage, rules, validate, clearValidate } = useFormField(
      props.field,
      props.rules
    )

    const cellDisabled = computed<boolean>(() => {
      return props.disabled || formGroup?.disabled || form?.disabled || false
    })

    const cellRequired = computed<boolean>(() => {
      return props.required || rules.value?.some((r) => r.required === true)
    })

    const cls = computed(() => [
      'weui-cell',
      { 'weui-cell_access': props.showArrow },
      { 'weui-cell_disabled': cellDisabled.value },
      { 'weui-cell_asterisk': !form?.hideAsterisk && cellRequired.value },
      { 'weui-cell_flex-wrap': validateMessage.value || props.helpText }
    ])

    const labelSyl = computed<CSSProperties>(() => {
      const style: CSSProperties = {
        width: toUnit(props.labelWidth) || toUnit(formGroup?.labelWidth)
      }

      return style
    })

    const handleClick = (e: Event): void => {
      if (!props.disabled) {
        emit('click', e)
      }
    }

    provide(formCellContextKey, {
      disabled: cellDisabled,
      validate,
      clearValidate
    })

    return {
      cls,
      labelSyl,
      validateMessage,
      handleClick
    }
  }
})
</script>
