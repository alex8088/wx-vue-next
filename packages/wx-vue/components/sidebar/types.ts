import type { Slots } from 'vue'

export interface SidebarPane {
  index?: string | number
  title?: string
  disabled: boolean
  slots: Slots
}
