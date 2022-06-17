import type { PropType, ExtractPropTypes } from 'vue'

export const skeletonProps = {
  animation: Boolean
}

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>

export const skeletonLineProps = {
  row: {
    type: Number,
    default: 1
  },
  height: Number
}

export type SkeletonLineProps = ExtractPropTypes<typeof skeletonLineProps>

export const skeletonShapeProps = {
  type: {
    type: String as PropType<'square' | 'circle'>,
    default: 'square'
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  }
}

export type SkeletonShapeProps = ExtractPropTypes<typeof skeletonShapeProps>
