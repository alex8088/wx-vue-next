import { withInstall, type WithInstallType } from '../utils'

import Uploader from './uploader.vue'
import type { UploaderExposeMethod } from './types'

export const WxUploader: WithInstallType<typeof Uploader> =
  withInstall(Uploader)

export default WxUploader

export type WxUploaderInstance = InstanceType<typeof Uploader> &
  UploaderExposeMethod

export type { UploaderProps } from './types'
export type {
  UploadFile,
  UploadOptions,
  UploadEvent,
  XHRRequestOptions
} from './upload'
