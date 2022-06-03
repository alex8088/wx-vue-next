import { withInstall } from '../utils'

import Button from './button.vue'

export const WxButton = withInstall(Button)
export default WxButton

export type WxButtonInstance = InstanceType<typeof Button>

export type { ButtonType, ButtonProps } from './types'
