import type { PropType, ExtractPropTypes } from 'vue'
import type { UploadFile, UploadOptions } from './upload'

import { noop } from '../utils'

export const uploaderProps = {
  fileList: Array as PropType<UploadFile[]>,
  action: {
    type: String,
    default: '#'
  },
  method: {
    type: String,
    default: 'post'
  },
  accept: {
    type: String,
    default: 'image/*'
  },
  multiple: Boolean,
  disabled: Boolean,
  capture: Boolean,
  maxUploadSize: {
    type: Number,
    default: 10 * 1024 * 1024
  },
  maxUploadCount: {
    type: Number,
    default: 10,
    validator(value): boolean {
      return value >= 1
    }
  },
  timeout: {
    type: Number,
    default: 30 * 1000
  },
  headers: {
    type: Object as PropType<Record<string, string>>,
    default: {}
  },
  withCredentials: Boolean,
  data: {
    type: Object as PropType<Record<string, string>>,
    default: {}
  },
  fileField: {
    type: String,
    default: 'file'
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  customRequest: Function as PropType<
    (file: UploadFile, options: UploadOptions) => void
  >,
  beforeUpload: {
    type: Function as PropType<
      (file: File) => boolean | File | PromiseLike<File> | null | undefined
    >,
    default: noop
  },
  beforeRemove: {
    type: Function as PropType<
      (file: UploadFile) => boolean | PromiseLike<boolean> | null | undefined
    >,
    default: noop
  }
}

export type UploaderProps = ExtractPropTypes<typeof uploaderProps>

export type UploaderExposeMethod = {
  uploadAll: () => void
  abort: (file?: UploadFile) => void
  remove: (file?: UploadFile) => void
}
