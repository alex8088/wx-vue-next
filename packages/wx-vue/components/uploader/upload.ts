/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface XHRRequestOptions {
  headers?: {
    [key: string]: string
  }
  timeout?: number
  withCredentials?: boolean
}

export interface UploadEvent {
  onProgress: (file: UploadFile, percent: number) => void
  onSuccess: (file: UploadFile, result: any) => void
  onError: (file: UploadFile, error: Error) => void
}

export interface UploadOptions {
  action: string
  method: string
  data: Record<string, string>
  fileField: string
  xhrOptions: XHRRequestOptions
  events: UploadEvent
}

export type UploadFile = {
  uid: number
  url: string
  name: string
  size: number
  type: string
  status: 'ready' | 'progress' | 'success' | 'fail'
  percentage?: number
  raw: File
  request?: XMLHttpRequest | any
  response?: unknown
}

const upload = (file: UploadFile, options: UploadOptions): void => {
  const { action, method, fileField, data, xhrOptions, events } = options
  const xhr = new XMLHttpRequest()
  const formData = new FormData()

  file.request = xhr

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key])
  })

  formData.append(fileField, file.raw, file.name)

  xhr.onreadystatechange = (): void => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        try {
          const ret = JSON.parse(xhr.responseText)
          events.onSuccess(file, ret)
        } catch (err) {
          events.onError(file, err as Error)
        }
      } else {
        events.onError(
          file,
          new Error(`Upload failed with status code ${xhr.status}`)
        )
      }
    }
  }

  xhr.upload.addEventListener(
    'progress',
    (evt) => {
      if (evt.total == 0) return

      const percent = Math.ceil(evt.loaded / evt.total) * 100

      events.onProgress(file, percent)
    },
    false
  )

  xhr.open(method, action)

  const { timeout, withCredentials, headers = {} } = xhrOptions

  if (timeout) {
    xhr.timeout = timeout
  }

  if (withCredentials) {
    xhr.withCredentials = withCredentials
  }

  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key])
  })

  xhr.send(formData)
}

export default upload
