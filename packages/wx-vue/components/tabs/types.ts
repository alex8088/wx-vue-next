import type { Slots } from 'vue'

export interface TabPane {
  index?: string | number
  title?: string
  disabled: boolean
  slots: Slots
}
