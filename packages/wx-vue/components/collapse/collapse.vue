<template>
  <div class="weui-collapse">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, provide } from 'vue'
import {
  collapseProps,
  collapseContextKey,
  type CollapseActiveName,
  type CollapseModelValue
} from './types'

export default defineComponent({
  name: 'WxCollapse',
  props: collapseProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const castArray = (value: CollapseModelValue): CollapseActiveName[] => {
      return Array.isArray(value) ? value : [value]
    }
    const activeNames = ref(castArray(props.modelValue))

    const handleItemClick = (name: CollapseActiveName): void => {
      const index = activeNames.value.indexOf(name)
      if (props.accordion) {
        activeNames.value = [index > -1 ? '' : name]
      } else {
        if (index > -1) {
          activeNames.value.splice(index, 1)
        } else {
          activeNames.value.push(name)
        }
      }
      const value = props.accordion ? activeNames.value[0] : activeNames.value
      emit('update:modelValue', value)
      emit('change', value)
    }

    watch(
      () => props.modelValue,
      () => (activeNames.value = castArray(props.modelValue)),
      { deep: true }
    )

    provide(collapseContextKey, {
      activeNames,
      handleItemClick
    })
  }
})
</script>
