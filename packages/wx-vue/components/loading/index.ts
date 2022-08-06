import { withInstall, type WithInstallType } from '../utils'

import Loading from './loading.vue'

export const WxLoading: WithInstallType<typeof Loading> = withInstall(Loading)

export default WxLoading

export type WxLoadingInstance = InstanceType<typeof Loading>

export type { LoadingProps } from './props'
