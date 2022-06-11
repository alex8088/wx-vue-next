import { defineComponent, h, type VNode } from 'vue'
import { flexItemProps } from './types'

export default defineComponent({
  name: 'WxFlexItem',
  props: flexItemProps,
  setup(props, { slots }) {
    return (): VNode =>
      h(props.tag, { class: ['weui-flex__item'] }, slots.default?.())
  }
})
