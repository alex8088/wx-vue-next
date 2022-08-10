import { withInstall, type WithInstallType } from '../utils'

import Image from './image.vue'

export const WxImage: WithInstallType<typeof Image> = withInstall(Image)

export default WxImage

export type WxImageInstance = InstanceType<typeof Image>

export type { ImageProps } from './props'
