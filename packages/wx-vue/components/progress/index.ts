import { withInstall, type WithInstallType } from '../utils'

import Progress from './progress.vue'

export const WxProgress: WithInstallType<typeof Progress> =
  withInstall(Progress)

export default WxProgress

export type WxProgressInstance = InstanceType<typeof Progress>

export type { ProgressProps } from './types'
