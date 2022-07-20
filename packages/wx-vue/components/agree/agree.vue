<template>
  <label :for="agreeId" :class="cls">
    <input
      :id="agreeId"
      v-model="checked"
      :true-value="true"
      :false-value="false"
      type="checkbox"
      class="weui-agree__checkbox"
    />
    <span class="weui-agree__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { agreeProps } from './types'
import { useId } from '../hooks'

export default defineComponent({
  name: 'WxAgree',
  props: agreeProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, expose }) {
    const agreeId = useId()

    let checked = computed({
      get() {
        return props.modelValue
      },
      set(value: boolean | undefined) {
        emit('update:modelValue', value)
        emit('change', value)
      }
    })

    const animate = ref(false)

    const cls = computed(() => {
      return ['weui-agree', { 'weui-agree_animate': animate.value }]
    })

    const shake = (): void => {
      animate.value = true
      setTimeout(() => {
        animate.value = false
      }, 250)
    }

    expose({
      shake
    })

    return {
      agreeId,
      cls,
      checked
    }
  }
})
</script>
