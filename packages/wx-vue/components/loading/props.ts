import type { PropType, CSSProperties, ExtractPropTypes } from 'vue'

export const loadingProps = {
  type: {
    type: String as PropType<'circular' | 'spinner'>,
    default: 'circular'
  },
  layout: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  size: [Number, String],
  color: String,
  textStyle: [String, Object] as PropType<string | CSSProperties>
}

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
