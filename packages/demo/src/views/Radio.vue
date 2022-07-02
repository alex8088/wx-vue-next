<script setup lang="ts">
import { reactive } from 'vue'
import Page from '../components/Page.vue'
import { WxTopTip, WxToast } from 'wx-vue'

interface FormData {
  gender: string
  degree: string
}

const form = reactive<FormData>({
  gender: '0',
  degree: ''
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
      title="单选框"
      show-submit-button
      submit-text="确定"
      :model="form"
      @submit="handleSubmit"
    >
      <wx-form-group title="默认选中">
        <wx-radio-group v-model="form.gender">
          <wx-radio value="0">男</wx-radio>
          <wx-radio value="1">女</wx-radio>
        </wx-radio-group>
      </wx-form-group>
      <wx-form-group title="数据校验">
        <wx-radio-group
          v-model="form.degree"
          field="degree"
          :rules="[{ required: true, message: '请选择学历' }]"
        >
          <wx-radio value="0">本科</wx-radio>
          <wx-radio value="1">硕士</wx-radio>
          <wx-radio value="2">博士</wx-radio>
          <wx-radio value="3" disabled>其他(不可选)</wx-radio>
        </wx-radio-group>
      </wx-form-group>
    </wx-form>
  </Page>
</template>
