import { withInstall, type WithInstallType } from '../utils'

import Overlay from './overlay.vue'

export const WxOverlay: WithInstallType<typeof Overlay> = withInstall(Overlay)

export default WxOverlay

export type WxOverlayInstance = InstanceType<typeof Overlay> & {
  close: () => void
}

export type { OverlayProps } from './props'
