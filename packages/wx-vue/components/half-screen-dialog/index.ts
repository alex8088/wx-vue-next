import { withInstall, type WithInstallType } from '../utils'

import HalfScreenDialog from './half-screen-dialog.vue'

export const WxHalfScreenDialog: WithInstallType<typeof HalfScreenDialog> =
  withInstall(HalfScreenDialog)

export default WxHalfScreenDialog

export type WxHalfScreenDialogInstance = InstanceType<typeof HalfScreenDialog>

export type { HalfScreenDialogProps } from './types'
