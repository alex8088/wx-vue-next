<template>
  <div :class="cls">
    <form role="combobox" class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          :id="inputId"
          ref="inputRef"
          v-model="inputValue"
          type="search"
          class="weui-search-bar__input"
          :placeholder="placeholder"
          autocomplete="off"
          required
          @blur="handleBlur"
        />
        <a role="button" class="weui-icon-clear" @click="handleClear"></a>
      </div>
      <label :for="inputId" class="weui-search-bar__label" @click="handleFocus">
        <i class="weui-icon-search"></i>
        <span aria-hidden="true">{{ placeholder }}</span>
      </label>
    </form>
    <a
      v-if="showCancel"
      role="button"
      class="weui-search-bar__cancel-btn"
      @click="handleCancel"
    >
      {{ cancelText }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { searchBarProps } from './types'
import { useId } from '../hooks'

export default defineComponent({
  name: 'WxSearchBar',
  props: searchBarProps,
  emits: ['update:modelValue', 'input', 'focus', 'clear', 'cancel'],
  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement>()

    const inputId = useId()

    let inputValue = computed({
      get() {
        return props.modelValue
      },
      set(value: string | number | undefined) {
        emit('update:modelValue', value)
        emit('input', value)
      }
    })

    let focusing = ref<boolean>(false)

    const cls = computed(() => [
      'weui-search-bar',
      { 'weui-search-bar_focusing': focusing.value }
    ])

    const handleFocus = (): void => {
      focusing.value = true
      inputRef.value?.focus()
      emit('focus')
    }

    const handleBlur = (): void => {
      if (!inputValue.value) {
        focusing.value = false
      }
    }

    const handleClear = (): void => {
      inputValue.value = ''
      inputRef.value?.focus()
      emit('clear')
    }

    const handleCancel = (): void => {
      inputValue.value = ''
      focusing.value = false
      emit('cancel')
    }

    return {
      cls,
      inputId,
      inputRef,
      inputValue,
      handleFocus,
      handleBlur,
      handleClear,
      handleCancel
    }
  }
})
</script>
