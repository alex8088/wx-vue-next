<template>
  <Picker
    v-model:visible="open"
    :title="title"
    :subtitle="subtitle"
    :hide-close-icon="hideCloseIcon"
    :close-icon-position="closeIconPosition"
    :options="options"
    :default-value="current"
    @select="handleSelect"
  >
    <template #header>
      <slot name="header" />
    </template>
  </Picker>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { timePickerProps } from './types'
import { getHours, getMins } from './time'
import Picker from '../picker/picker.vue'
import type { PickerOptions } from '../picker/types'

export default defineComponent({
  name: 'WxTimePicker',
  components: {
    Picker
  },
  props: timePickerProps,
  emits: ['update:visible', 'select'],
  setup(props, { emit, expose }) {
    const options = computed<PickerOptions[]>(() => {
      return [
        getHours(props.start, props.end, props.formatter),
        getMins(props.timeSpan, props.formatter)
      ]
    })

    const current = computed<number[]>(() => {
      let current: number[] = []

      if (props.defaultValue) {
        current = props.defaultValue
      } else {
        let dt = new Date()
        let curHour = dt.getHours()
        let curMins = 0
        if (curHour < props.start) {
          curHour = props.start
        } else if (curHour > props.end) {
          curHour = props.end
        } else {
          curMins =
            Math.floor(dt.getMinutes() / props.timeSpan) * props.timeSpan
        }

        current = [curHour, curMins]
      }

      return current
    })

    const open = computed<boolean>({
      get() {
        return props.visible
      },
      set(value) {
        emit('update:visible', value)
      }
    })

    const show = (): void => {
      open.value = true
    }

    const handleSelect = (values: number[]): void => {
      emit('select', values)
    }

    expose({ show })

    return {
      open,
      current,
      options,
      handleSelect
    }
  }
})
</script>
