<template>
  <div :class="cls">
    <div class="weui-cell__bd">
      <textarea
        ref="textareaRef"
        v-model="textareaValue"
        class="weui-textarea"
        :style="textareaSyl"
        :rows="rows"
        :maxLength="maxLength"
        :readonly="readonly"
        :disabled="textareaDisabled"
        v-bind="$attrs"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
      <div v-if="validateMessage || maxLength" class="weui-flex">
        <div class="weui-flex__item weui-cell__tips weui-cell__tips_warn">
          {{ validateMessage }}
        </div>
        <div
          v-if="maxLength"
          role="option"
          aria-live="polite"
          class="weui-textarea-counter"
        >
          <span>{{ textareaValue.length }}</span>
          /{{ maxLength }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  computed,
  ref,
  onMounted,
  nextTick,
  type CSSProperties
} from 'vue'
import { textareaProps } from './types'
import { formContextKey, formGroupContextKey } from '../form/types'
import { calcTextareaHeight } from './utils'
import { useFormField } from '../hooks'

export default defineComponent({
  name: 'WxTextarea',
  inheritAttrs: false,
  props: textareaProps,
  emits: ['update:modelValue', 'input', 'focus', 'blur'],
  setup(props, { emit, expose }) {
    const { validateMessage, validate, clearValidate } = useFormField(
      props.field,
      props.rules
    )

    const textareaRef = ref<HTMLTextAreaElement>()

    const height = ref<number>()

    const form = inject(formContextKey)
    const formGroup = inject(formGroupContextKey)

    const textareaDisabled = computed<boolean>(() => {
      return props.disabled || formGroup?.disabled || form?.disabled || false
    })

    const cls = computed(() => [
      'weui-cell',
      'weui-cell_active',
      { 'weui-cell_disabled': textareaDisabled.value || props.readonly }
    ])

    let textareaValue = computed({
      get() {
        return props.modelValue
      },
      set(value: string | undefined) {
        nextTick(() => resize())
        emit('update:modelValue', value)
        emit('input', value)
      }
    })

    const textareaSyl = computed<CSSProperties>(() => {
      const styles: CSSProperties = {}

      if (height.value) {
        styles.height = `${height.value}px`
      }

      return styles
    })

    const resize = (): void => {
      if (textareaRef.value && props.autosize) {
        height.value = calcTextareaHeight(textareaRef.value, props.rows)
      }
    }

    const handleBlur = (e: Event): void => {
      validate('blur')
      emit('blur', e)
    }

    const handleFocus = (e: Event): void => {
      clearValidate()
      emit('focus', e)
    }

    const focus = (): void => {
      textareaRef.value?.focus()
    }

    const blur = (): void => {
      textareaRef.value?.blur()
    }

    onMounted(() => {
      if (
        !!props.maxLength &&
        props.modelValue &&
        props.maxLength < props.modelValue.length
      ) {
        textareaValue.value = props.modelValue.slice(0, props.maxLength)
      }
      resize()
    })

    expose({
      focus,
      blur
    })

    return {
      cls,
      textareaRef,
      textareaSyl,
      textareaValue,
      textareaDisabled,
      validateMessage,
      handleBlur,
      handleFocus
    }
  }
})
</script>
