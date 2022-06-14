import { defineComponent, provide, h, type VNode } from 'vue'
import { gridProps, gridContextKey } from './types'

export default defineComponent({
  name: 'WxGrid',
  props: gridProps,
  setup(props, { slots }) {
    provide(gridContextKey, {
      cols: props.cols
    })

    return (): VNode => h('div', { class: ['weui-grids'] }, slots.default?.())
  }
})
