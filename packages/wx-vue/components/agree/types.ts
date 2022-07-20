import type { ExtractPropTypes } from 'vue'

export const agreeProps = {
  modelValue: Boolean,
  label: String
}

export type AgreeProps = ExtractPropTypes<typeof agreeProps>
