<script setup lang="ts">
import { reactive } from 'vue'
import Page from '../components/Page.vue'
import { WxTopTip, WxToast } from 'wx-vue'

interface FormData {
  framework: string[]
  city: number[]
}

const form = reactive<FormData>({
  framework: [],
  city: [0, 1]
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
      title="复选框"
      show-submit-button
      submit-text="确定"
      :model="form"
      @submit="handleSubmit"
    >
      <wx-form-group title="前端框架">
        <wx-checkbox-group
          v-model="form.framework"
          field="framework"
          :rules="[{ required: true, message: '至少选择1种前端框架' }]"
        >
          <wx-checkbox value="vue">Vue</wx-checkbox>
          <wx-checkbox value="react">React</wx-checkbox>
        </wx-checkbox-group>
      </wx-form-group>
      <wx-form-group title="默认选中/数据校验(最多可选)">
        <wx-checkbox-group
          v-model="form.city"
          field="city"
          :rules="[
            { type: 'array', min: 1, max: 2, message: '请选择1~2个城市' }
          ]"
        >
          <wx-checkbox :value="0">北京</wx-checkbox>
          <wx-checkbox :value="1">上海</wx-checkbox>
          <wx-checkbox :value="2">广州</wx-checkbox>
          <wx-checkbox :value="3" disabled>其他(不可选)</wx-checkbox>
        </wx-checkbox-group>
      </wx-form-group>
      <template #frontTips>
        <p class="weui-form__tips">可选1~2个,选中值:{{ form.city }}</p>
      </template>
    </wx-form>
  </Page>
</template>
