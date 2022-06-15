import { withInstall, type WithInstallType } from '../utils'

import Dialog from './dialog.vue'

export const WxDialog: WithInstallType<typeof Dialog> = withInstall(Dialog)

export default WxDialog

export type WxDialogInstance = InstanceType<typeof Dialog>

export type { DialogProps } from './types'
