import type { PropType, ExtractPropTypes, Ref, InjectionKey } from 'vue'
import { uid, type Arrayable } from '../utils'

export type CollapseActiveName = string | number

export type CollapseModelValue = Arrayable<CollapseActiveName>

export const collapseProps = {
  modelValue: {
    type: [Array, String, Number] as PropType<CollapseModelValue>,
    default: (): CollapseModelValue => []
  },
  accordion: Boolean
}

export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseItemProps = {
  title: String,
  name: {
    type: [String, Number] as PropType<CollapseActiveName>,
    default: (): CollapseActiveName => uid()
  },
  disabled: Boolean
}

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>
  handleItemClick: (name: CollapseActiveName) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey')
