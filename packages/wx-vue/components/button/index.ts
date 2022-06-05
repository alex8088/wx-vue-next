import { withInstall, type WithInstallType } from '../utils'

import Button from './button.vue'

export const WxButton: WithInstallType<typeof Button> = withInstall(Button)

export default WxButton

export type WxButtonInstance = InstanceType<typeof Button>

export type { ButtonType, ButtonProps } from './types'
