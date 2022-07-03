import { withInstall, type WithInstallType } from '../utils'

import Textarea from './textarea.vue'

export const WxTextarea: WithInstallType<typeof Textarea> =
  withInstall(Textarea)

export default WxTextarea

export type WxTextareaInstance = InstanceType<typeof Textarea>

export type { TextareaProps } from './types'
