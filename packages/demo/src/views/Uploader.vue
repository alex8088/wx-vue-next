<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { UploadFile, UploadOptions, WxUploaderInstance } from 'wx-vue'
import { WxToast, WxTopTip } from 'wx-vue'
import Page from '../components/Page.vue'

interface FormData {
  fileList: UploadFile[]
}

const form = reactive<FormData>({
  fileList: []
})

const uploaderRef = ref<WxUploaderInstance>()

const beforeUpload = (file: File): boolean => {
  if (file.type === 'image/png') {
    return true
  } else {
    WxToast('仅支持png格式图片')
    return false
  }
}

const uploadFiles = (): void => {
  uploaderRef.value?.uploadAll()
}

const customUpload = (file: UploadFile, options: UploadOptions): void => {
  // mock upload
  let percent = 0
  const upload = (): void => {
    setTimeout(() => {
      percent += 10
      options.events.onProgress(file, percent)
      percent < 100 ? upload() : options.events.onSuccess(file, {})
    }, 100)
  }
  upload()
}

const handleSubmit = (valid, _): void => {
  if (valid) {
    WxToast.success('提交成功')
  } else {
    WxTopTip('表单校验错误，请修正')
  }
}
</script>

<template>
  <Page :gray="false" :foot="false">
    <wx-form
      title="文件上传"
      show-submit-button
      submit-text="确定"
      :model="form"
      @submit="handleSubmit"
    >
      <wx-form-group title="图片上传">
        <wx-form-cell>
          <wx-uploader></wx-uploader>
        </wx-form-cell>
      </wx-form-group>
      <wx-form-group title="限制上传数量(2个)">
        <wx-form-cell>
          <wx-uploader :max-upload-count="2"></wx-uploader>
        </wx-form-cell>
      </wx-form-group>
      <wx-form-group title="限制图片大小(100kb)">
        <wx-form-cell>
          <wx-uploader
            :max-upload-size="1024 * 2"
            @oversize="$topTip('图片必须小于100kb')"
          ></wx-uploader>
        </wx-form-cell>
      </wx-form-group>
      <wx-form-group title="上传前处理，可用于压缩，限制上传类型等">
        <wx-form-cell>
          <wx-uploader :before-upload="beforeUpload"></wx-uploader>
        </wx-form-cell>
      </wx-form-group>
      <wx-form-group title="手动上传">
        <wx-form-cell>
          <wx-uploader ref="uploaderRef" :auto-upload="false"></wx-uploader>
        </wx-form-cell>
        <template #action>
          <wx-link @click="uploadFiles">上传文件</wx-link>
        </template>
      </wx-form-group>
      <wx-form-group title="自定义上传请求">
        <wx-form-cell>
          <wx-uploader :custom-request="customUpload"></wx-uploader>
        </wx-form-cell>
      </wx-form-group>
      <wx-form-group title="上传校验">
        <wx-form-cell
          field="fileList"
          :rules="[
            { type: 'array', required: true, message: '至少要上传一个文件' }
          ]"
        >
          <wx-uploader v-model:fileList="form.fileList"></wx-uploader>
        </wx-form-cell>
      </wx-form-group>
    </wx-form>
  </Page>
</template>
