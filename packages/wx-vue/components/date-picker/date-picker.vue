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
import { datePickerProps } from './types'
import cron from './cron'
import Picker from '../picker/picker.vue'
import type { PickerOptions } from '../picker/types'

import { isNumber } from '../utils'

export default defineComponent({
  name: 'WxDatePicker',
  components: {
    Picker
  },
  props: datePickerProps,
  emits: ['update:visible', 'select'],
  setup(props, { emit, expose }) {
    const options = computed<PickerOptions>(() => {
      const options: PickerOptions = []

      const start: Date = isNumber(props.start)
        ? new Date(`${props.start}/01/01`)
        : props.start
      const end: Date = isNumber(props.end)
        ? new Date(`${props.end}/12/31`)
        : props.end

      const interval = cron.parse(props.cron, start, end)
      let obj: { value?: Date; done: boolean }

      do {
        obj = interval.next()

        if (obj.value) {
          const year = obj.value.getFullYear()
          const month = obj.value.getMonth() + 1
          const day = obj.value.getDate()

          let y = options.find((item) => item.value === year)
          if (!y) {
            y = {
              label: props.formatter('year', year),
              value: year,
              children: []
            }

            options.push(y)
          }

          let m = y.children!.find((item) => item.value === month)
          if (!m) {
            m = {
              label: props.formatter('month', month),
              value: month
            }
            if (!props.yearMonth) m.children = []
            y.children!.push(m)
          }

          if (!props.yearMonth) {
            m.children!.push({
              label: props.formatter('day', day),
              value: day
            })
          }
        }
      } while (!obj.done)

      return options
    })

    const year = props.defaultValue.getFullYear()
    const month = props.defaultValue.getMonth() + 1
    const day = props.defaultValue.getDate()

    const current: number[] = [year, month, day]

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
