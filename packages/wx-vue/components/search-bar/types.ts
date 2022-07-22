import type { PropType, ExtractPropTypes } from 'vue'

export const searchBarProps = {
  modelValue: [String, Number] as PropType<string | number>,
  placeholder: {
    type: String,
    default: 'search'
  },
  showCancel: Boolean,
  cancelText: {
    type: String,
    default: 'Cancel'
  }
}

export type SearchBarProps = ExtractPropTypes<typeof searchBarProps>
