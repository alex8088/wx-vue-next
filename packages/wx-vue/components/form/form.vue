<template>
  <div class="weui-form">
    <div v-if="title || $slots.header" class="weui-form__text-area">
      <slot name="header">
        <h2 class="weui-form__title">{{ title }}</h2>
        <div v-if="desc" class="weui-form__desc">
          {{ desc }}
        </div>
      </slot>
    </div>
    <div class="weui-form__control-area">
      <slot />
    </div>
    <div v-if="$slots.frontTips" class="weui-form__tips-area">
      <slot name="frontTips" />
    </div>
    <div v-if="showSubmitButton" class="weui-form__opr-area">
      <button
        role="button"
        class="weui-btn weui-btn_primary"
        @click="handleClick"
      >
        {{ submitText }}
      </button>
    </div>
    <div v-if="$slots.behindTips" class="weui-form__tips-area">
      <slot name="behindTips" />
    </div>
    <div v-if="$slots.footer" class="weui-form__extra-area">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { formProps, formContextKey } from './types'
import { useIdProvider, useFormValidator } from '../hooks'

export default defineComponent({
  name: 'WxForm',
  props: formProps,
  emits: ['submit'],
  setup(props, { emit, expose }) {
    const { validate, clearValidate, validateFields } = useFormValidator(
      props.model,
      props.rules
    )

    const handleClick = (): void => {
      validate((vaild, errors) => emit('submit', vaild, errors))
    }

    expose({
      validate,
      validateFields,
      clearValidate
    })

    useIdProvider()

    provide(formContextKey, {
      disabled: props.disabled,
      hideAsterisk: props.hideAsterisk
    })

    return {
      handleClick
    }
  }
})
</script>
