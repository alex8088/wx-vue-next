import { defineComponent, inject, h, type VNode } from 'vue'
import { gridItemProps, gridContextKey } from './types'

export default defineComponent({
  name: 'WxGridItem',
  props: gridItemProps,
  emits: ['click'],
  setup(props, { slots, emit }) {
    const grid = inject(gridContextKey)

    const handleClick = (event: Event): void => {
      emit('click', event)
    }

    return (): VNode =>
      h(
        'div',
        {
          role: 'button',
          class: ['weui-grid'],
          style: {
            width: `${100 / (grid?.cols || 3)}%`
          },
          onClick: handleClick
        },
        [
          h('div', { class: ['weui-grid__icon'] }, [
            slots.icon
              ? slots.icon()
              : props.icon
              ? h('img', { src: props.icon, alt: '' })
              : null
          ]),
          h('p', { class: ['weui-grid__label'] }, props.label)
        ]
      )
  }
})
