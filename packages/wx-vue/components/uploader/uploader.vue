<template>
  <div class="weui-uploader">
    <div class="weui-uploader__bd">
      <ul class="weui-uploader__files">
        <li
          v-for="file in fileList"
          :key="file.uid"
          :class="[
            'weui-uploader__file',
            {
              'weui-uploader__file_status':
                file.status === 'progress' || file.status === 'fail'
            }
          ]"
          :style="{ backgroundImage: `url(${file.url})` }"
        >
          <div
            v-if="file.status === 'progress' || file.status === 'fail'"
            role="alert"
            class="weui-uploader__file-content"
          >
            <i v-if="file.status === 'fail'" class="weui-icon-warn" />
            <template v-else>{{ file.percentage }}%</template>
          </div>
          <div
            v-if="file.status !== 'progress'"
            class="weui-uploader__file-opr"
            @click="handleClick(file)"
          >
            <i class="weui-icon-close" />
          </div>
        </li>
      </ul>
      <div
        v-if="fileList.length < maxUploadCount"
        class="weui-uploader__input-box"
      >
        <input
          class="weui-uploader__input"
          type="file"
          :accept="accept"
          :multiple="multiple"
          :disabled="disabled"
          :capture="capture ? 'camera' as unknown as boolean : false"
          @change="handleChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeUnmount } from 'vue'
import { uploaderProps } from './types'
import type { UploadFile } from './upload'
import upload from './upload'

export default defineComponent({
  name: 'WxUploader',
  props: uploaderProps,
  emits: [
    'update:fileList',
    'oversize',
    'remove',
    'progress',
    'success',
    'error'
  ],
  setup(props, { emit, expose }) {
    let fileId = 0
    const fileList: UploadFile[] = reactive([])

    const onProgress = (file: UploadFile, percent: number): void => {
      file.status = 'progress'
      file.percentage = percent
      emit('progress', percent, file)
    }

    const onSuccess = (file: UploadFile, result: unknown): void => {
      file.status = 'success'
      file.response = result
      emit('success', result, file)
      emit('update:fileList', [...(props.fileList || []), file])
    }

    const onError = (file: UploadFile, error: Error): void => {
      file.status = 'fail'
      emit('error', error, file)
    }

    const revokeObjectUrl = (file: UploadFile): void => {
      if (file.url.startsWith('blob:')) {
        window.URL.revokeObjectURL(file.url)
      }
    }

    const beforeUpload = async (file: File): Promise<File | null> => {
      let ret: boolean | File | null | undefined
      try {
        ret = await props.beforeUpload(file)
        if (ret === false) {
          return null
        } else {
          return ret instanceof File ? ret : file
        }
      } catch {
        return null
      }
    }

    const beforeRemove = async (file: UploadFile): Promise<boolean> => {
      let ret: boolean | null | undefined
      try {
        ret = await props.beforeRemove(file)
        return !(ret === false)
      } catch {
        return false
      }
    }

    const doUpload = async (file: UploadFile): Promise<void> => {
      const uploadOptions = {
        action: props.action,
        method: props.method,
        data: props.data,
        fileField: props.fileField,
        xhrOptions: {
          headers: props.headers,
          timeout: props.timeout,
          withCredentials: props.withCredentials
        },
        events: {
          onProgress,
          onSuccess,
          onError
        }
      }

      onProgress(file, 0)
      if (props.customRequest) {
        props.customRequest(file, uploadOptions)
      } else {
        upload(file, uploadOptions)
      }
    }

    const doRemove = async (file: UploadFile): Promise<void> => {
      const ret = await beforeRemove(file)

      if (ret) {
        abort(file)
        fileList.splice(fileList.indexOf(file), 1)
        revokeObjectUrl(file)
        if (file.status === 'success') {
          const files = props.fileList?.filter((f) => f.uid !== file.uid)
          emit('update:fileList', files)
        }
        emit('remove', file)
      }
    }

    const handleChange = (e: Event): void => {
      if (props.disabled) {
        return
      }

      const $el = e.target as HTMLInputElement

      let files = Array.from($el.files || [])

      let _files: File[] = []
      const oversizeFiles: File[] = []

      files.forEach((file) => {
        if (file.size > props.maxUploadSize) {
          oversizeFiles.push(file)
        } else {
          _files.push(file)
        }
      })

      if (oversizeFiles.length > 0) {
        emit('oversize', oversizeFiles)
      }

      _files.forEach(async (file) => {
        if (props.maxUploadCount - fileList.length > 0) {
          let rawFile = await beforeUpload(file)

          if (rawFile) {
            let _file: UploadFile = {
              uid: Date.now() + ++fileId,
              name: file.name,
              size: file.size,
              type: file.type,
              status: 'ready',
              url: window.URL.createObjectURL(file),
              raw: rawFile
            }

            fileList.push(_file)

            if (props.autoUpload) {
              //get a ref file
              const fileRef = fileList.find((file) => file.uid === _file.uid)

              if (fileRef) doUpload(fileRef)
            }
          }
        }
      })

      $el.value = ''
    }

    const handleClick = (file: UploadFile): void => {
      remove(file)
    }

    const uploadAll = (): void => {
      const files = fileList.filter((file) => file.status === 'ready')
      files.forEach((file) => {
        doUpload(file)
      })
    }

    const abort = (file?: UploadFile): void => {
      const files = file
        ? file.status === 'progress'
          ? [file]
          : []
        : fileList.filter((file) => file.status === 'progress')

      files.forEach((file) => {
        if (file.request && file.request instanceof XMLHttpRequest) {
          file.request.abort()
        }
      })
    }

    const remove = (file?: UploadFile): void => {
      if (file) doRemove(file)
    }

    onBeforeUnmount(() => fileList.forEach((file) => revokeObjectUrl(file)))

    expose({
      uploadAll,
      abort,
      remove
    })

    return {
      fileList,
      handleChange,
      handleClick
    }
  }
})
</script>
