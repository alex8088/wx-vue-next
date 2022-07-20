<script setup lang="ts">
import { reactive, ref } from 'vue'
import { WxTopTip, WxToast, type FormRules, type PickerOptions } from 'wx-vue'
import Page from '../components/Page.vue'

interface FormData {
  phoneNumber: string
  email: string
  amount: string
}

const form = reactive<FormData>({
  phoneNumber: '',
  email: '',
  amount: ''
})

const rules = reactive<FormRules>({
  phoneNumber: [
    {
      required: true,
      message: '必须填写手机号'
    },
    {
      pattern: /^\d{11}$/,
      message: '填写正确的手机号'
    }
  ],
  email: [
    {
      type: 'email',
      message: '电子邮箱格式错误'
    }
  ],
  amount: [
    {
      type: 'number',
      message: '金额必须数值类型'
    },
    {
      type: 'number',
      min: 0,
      max: 100,
      message: '金额必须在0~100'
    }
  ]
})

const handleSubmit = (valid, _): void => {
  if (valid) {
    WxToast.success('提交成功')
  } else {
    WxTopTip('表单校验错误，请修正')
  }
}

const v1 = ref<boolean>(false)
const v2 = ref<boolean>(false)
const v3 = ref<boolean>(false)

const data: PickerOptions = [
  { label: '身份证' },
  { label: '学生证' },
  { label: '军官证' },
  { label: '护照(不可选)', disabled: true },
  { label: '其他' }
]

const val = ref<string>('')
const date = ref<string>('')
const time = ref<string>('')
const open = ref<boolean>(true)
const num = ref<number>(40)
const rate = ref<number>(3)
const framework = ref<string[]>(['vue'])
const gender = ref<string>('0')
</script>

<template>
  <Page :gray="false" :foot="false" class="form">
    <wx-form
      title="表单布局"
      desc="表单页面由头部区域/控件区域/提示区域/操作区域和底部信息区域组成"
      show-submit-button
      submit-text="确定"
      :model="{}"
    >
      <wx-form-group title="组标题" :label-width="64">
        <wx-input label="帐号" placeholder="请输入帐号" />
        <wx-input label="密码" placeholder="请输入密码" type="password" />
      </wx-form-group>
      <template #frontTips>
        <wx-agree>阅读并同意<wx-link>《用户协议》</wx-link></wx-agree>
      </template>
    </wx-form>
    <wx-form
      title="表单校验"
      show-submit-button
      submit-text="确定"
      :model="form"
      :rules="rules"
      @submit="handleSubmit"
    >
      <wx-form-group>
        <wx-input
          v-model="form.phoneNumber"
          field="phoneNumber"
          label="手机号"
          placeholder="请输入手机号"
        />
        <wx-input
          v-model="form.email"
          field="email"
          label="电子邮箱"
          placeholder="请输入电子邮箱"
        />
        <wx-input
          v-model.number="form.amount"
          field="amount"
          label="金额"
          placeholder="请输入金额"
          help-text="金额必须在0~100"
        />
      </wx-form-group>
    </wx-form>
    <wx-form title="表单组件" show-submit-button submit-text="确定" :model="{}">
      <wx-form-group>
        <wx-form-cell
          label="数据选择"
          :display-text="val"
          placeholder="请选择数据"
          show-arrow
          @click="v1 = true"
        />
        <wx-form-cell
          label="日期选择"
          :display-text="date"
          placeholder="请选择日期"
          show-arrow
          @click="v2 = true"
        />
        <wx-form-cell
          label="时间选择"
          :display-text="time"
          placeholder="请选择时间"
          show-arrow
          @click="v3 = true"
        />
        <wx-switch v-model="open" label="开关" />
        <wx-form-cell label="滑块">
          <wx-slider v-model="num"></wx-slider>
        </wx-form-cell>
        <wx-form-cell label="评分">
          <wx-rate v-model="rate"></wx-rate>
        </wx-form-cell>
      </wx-form-group>
      <wx-form-group title="复选框">
        <wx-checkbox-group v-model="framework">
          <wx-checkbox value="vue">Vue</wx-checkbox>
          <wx-checkbox value="react">React</wx-checkbox>
        </wx-checkbox-group>
      </wx-form-group>
      <wx-form-group title="单选框">
        <wx-radio-group v-model="gender">
          <wx-radio value="0">男</wx-radio>
          <wx-radio value="1">女</wx-radio>
        </wx-radio-group>
      </wx-form-group>
      <wx-form-group title="文本域">
        <wx-textarea
          placeholder="请填写备注信息"
          :max-length="200"
        ></wx-textarea>
      </wx-form-group>
      <wx-form-group title="图片上传">
        <wx-form-cell><wx-uploader></wx-uploader></wx-form-cell>
      </wx-form-group>
    </wx-form>
    <wx-picker
      v-model:visible="v1"
      title="选择器"
      :options="data"
      @select="(values: string[]) => val = values[0]"
    ></wx-picker>
    <wx-date-picker
      v-model:visible="v2"
      title="日期选择"
      @select="(values: number[]) => date = `${values[0]}-${values[1]}-${values[2]}`"
    ></wx-date-picker>
    <wx-time-picker
      v-model:visible="v3"
      title="时间选择"
      @select="(values: number[]) => time = `${values[0]}:${values[1]}`"
    ></wx-time-picker>
  </Page>
</template>

<style lang="less">
.form {
  .weui-form {
    min-height: auto;
  }

  .weui-form + .weui-form {
    padding-top: 0;
  }
}
</style>
