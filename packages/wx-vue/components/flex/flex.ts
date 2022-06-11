import { defineComponent, h, type VNode } from 'vue'
import { flexProps } from './types'

export default defineComponent({
  name: 'WxFlex',
  props: flexProps,
  setup(props, { slots }) {
    return (): VNode =>
      h(props.tag, { class: ['weui-flex'] }, slots.default?.())
  }
})
