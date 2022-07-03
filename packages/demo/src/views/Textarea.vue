<script setup lang="ts">
import { reactive } from 'vue'
import Page from '../components/Page.vue'
import { WxTopTip, WxToast } from 'wx-vue'

interface FormData {
  remark1: string
  remark2: string
}

const form = reactive<FormData>({
  remark1: '',
  remark2: ''
})

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
      title="文本域"
      show-submit-button
      submit-text="确定"
      :model="form"
      @submit="handleSubmit"
    >
      <wx-form-group title="问题描述">
        <wx-textarea
          v-model="form.remark1"
          placeholder="请描述你所发生的问题"
        ></wx-textarea>
      </wx-form-group>
      <wx-form-group title="可见行数/字数限制/自动行高/数据校验">
        <wx-textarea
          v-model="form.remark2"
          placeholder="请描述你所发生的问题"
          :max-length="200"
          :rows="4"
          field="remark2"
          :rules="{ required: true, message: '问题描述不能为空' }"
          autosize
        ></wx-textarea>
      </wx-form-group>
    </wx-form>
  </Page>
</template>
