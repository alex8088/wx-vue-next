import type { PropType, ExtractPropTypes } from 'vue'

export const imageProps = {
  src: String,
  height: [String, Number] as PropType<string | number>,
  width: [String, Number] as PropType<string | number>,
  alt: String,
  lazy: Boolean
}

export type ImageProps = ExtractPropTypes<typeof imageProps>
