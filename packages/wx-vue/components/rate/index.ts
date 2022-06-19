import { withInstall, type WithInstallType } from '../utils'

import Rate from './rate.vue'

export const WxRate: WithInstallType<typeof Rate> = withInstall(Rate)

export default WxRate

export type WxRateInstance = InstanceType<typeof Rate>

export type { RateProps } from './types'
