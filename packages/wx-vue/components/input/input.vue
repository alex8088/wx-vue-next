<template>
  <label :for="inputId" :class="cls" :style="cellStyle">
    <div v-if="label || $slots.prefix" class="weui-cell__hd">
      <slot name="prefix">
        <span class="weui-label" :style="labelSyl">{{ label }}</span>
      </slot>
    </div>
    <div class="weui-cell__bd">
      <div class="weui-flex">
        <input
          :id="inputId"
          ref="inputRef"
          v-model="inputValue"
          v-bind="$attrs"
          class="weui-input"
          :type="type"
          :required="inputRequired"
          :readonly="readonly"
          :disabled="inputDisabled"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <button
          v-if="clearable"
          class="weui-btn_reset weui-btn_icon weui-btn_input-clear"
          @mousedown.prevent
          @click="handleClear"
        >
          <i class="weui-icon-clear"></i>
        </button>
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
    <div class="weui-cell__ft">
      <slot name="suffix"></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, inject, computed, ref, type CSSProperties } from 'vue'
import { inputProps } from './types'
import { formContextKey, formGroupContextKey } from '../form/types'
import { useId, useFormField } from '../hooks'
import { toUnit } from '../utils'

export default defineComponent({
  name: 'WxInput',
  inheritAttrs: false,
  props: inputProps,
  emits: ['update:modelValue', 'input', 'focus', 'blur'],
  setup(props, { emit, slots, expose }) {
    const { validateMessage, rules, validate, clearValidate } = useFormField(
      props.field,
      props.rules
    )

    const inputRef = ref<HTMLInputElement>()

    const inputId = useId()

    const form = inject(formContextKey)
    const formGroup = inject(formGroupContextKey)

    const inputDisabled = computed<boolean>(() => {
      return props.disabled || formGroup?.disabled || form?.disabled || false
    })

    const inputRequired = computed<boolean>(() => {
      return props.required || rules.value?.some((r) => r.required === true)
    })

    const cls = computed(() => [
      'weui-cell',
      { 'weui-cell_active': !(slots.prefix || slots.suffix) },
      { 'weui-cell_flex-wrap': validateMessage.value || props.helpText },
      { 'weui-cell_disabled': inputDisabled.value || props.readonly },
      { 'weui-cell_asterisk': !form?.hideAsterisk && inputRequired.value }
    ])

    const labelSyl = computed<CSSProperties>(() => {
      const style: CSSProperties = {
        width: toUnit(props.labelWidth) || toUnit(formGroup?.labelWidth)
      }

      return style
    })

    let inputValue = computed({
      get() {
        return props.modelValue
      },
      set(value: string | number | undefined) {
        emit('update:modelValue', value)
        emit('input', value)
      }
    })

    const handleBlur = (e: Event): void => {
      validate('blur')
      emit('blur', e)
    }

    const handleFocus = (e: Event): void => {
      clearValidate()
      emit('focus', e)
    }

    const handleClear = (): void => {
      inputValue.value = ''
    }

    const focus = (): void => {
      inputRef.value?.focus()
    }

    const blur = (): void => {
      inputRef.value?.blur()
    }

    expose({
      focus,
      blur
    })

    return {
      cls,
      labelSyl,
      inputId,
      inputRef,
      inputValue,
      inputDisabled,
      inputRequired,
      validateMessage,
      handleBlur,
      handleFocus,
      handleClear
    }
  }
})
</script>
