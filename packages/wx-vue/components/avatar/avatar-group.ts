import { defineComponent, provide, h, toRefs, type VNode } from 'vue'
import { avatarGroupProps } from './props'
import { avatarGroupContentKey } from './content'
import Avatar from './avatar.vue'
import { flattenChildren } from '../utils'

export default defineComponent({
  name: 'WxAvatarGroup',
  props: avatarGroupProps,
  emits: ['moreClick'],
  setup(props, { slots, emit }) {
    const { shape, size, zIndexAscend } = toRefs(props)

    provide(avatarGroupContentKey, {
      shape,
      size,
      zIndexAscend
    })

    const getChildren = (): { children: VNode[]; remaining: number } => {
      let children = flattenChildren(slots.default?.(), 'WxAvatar')
      const len = children.length
      if (props.maxCount > 0) {
        children = children.slice(0, props.maxCount)
      }
      if (props.zIndexAscend) {
        let count = props.maxCount
        children.forEach((c) => {
          c.props!['index'] = count--
        })
      }
      return {
        children,
        remaining: len - props.maxCount
      }
    }

    return (): VNode => {
      const { children, remaining } = getChildren()
      return h('div', { class: ['weui-avatar-group'] }, [
        children,
        props.maxCount > 0 && remaining > 0
          ? h(
              Avatar,
              {
                shape: props.shape,
                size: props.size,
                style: props.moreAvatarStyle,
                onClick: () => {
                  emit('moreClick', remaining)
                }
              },
              () => (slots.more ? slots.more() : `+${remaining}`)
            )
          : null
      ])
    }
  }
})
