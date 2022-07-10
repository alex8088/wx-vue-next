import type {
  PropType,
  ExtractPropTypes,
  WritableComputedRef,
  Ref,
  InjectionKey
} from 'vue'

export type TabbarActiveName = string | number

export const tabbarProps = {
  modelValue: [String, Number] as PropType<TabbarActiveName>,
  activeColor: String
}

export type TabbarProps = ExtractPropTypes<typeof tabbarProps>

export const tabbarItemProps = {
  name: String,
  label: String
}

export type TabbarItemProps = ExtractPropTypes<typeof tabbarItemProps>

export interface TabbarContext {
  activeName: WritableComputedRef<TabbarActiveName>
  activeColor: string
  index: Ref<number>
}

export const tabbarContextKey: InjectionKey<TabbarContext> =
  Symbol('tabbarContextKey')
