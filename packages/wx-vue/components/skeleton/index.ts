import { withInstall, type WithInstallType } from '../utils'

import Skeleton from './skeleton.vue'
import SkeletonLine from './skeleton-line.vue'
import SkeletonShape from './skeleton-shape.vue'

export const WxSkeleton: WithInstallType<typeof Skeleton> =
  withInstall(Skeleton)

export const WxSkeletonLine: WithInstallType<typeof SkeletonLine> =
  withInstall(SkeletonLine)

export const WxSkeletonShape: WithInstallType<typeof SkeletonShape> =
  withInstall(SkeletonShape)

export type WxSkeletonInstance = InstanceType<typeof Skeleton>

export type WxSkeletonLineInstance = InstanceType<typeof SkeletonLine>

export type WxSkeletonShapeInstance = InstanceType<typeof SkeletonShape>

export type {
  SkeletonProps,
  SkeletonLineProps,
  SkeletonShapeProps
} from './types'
