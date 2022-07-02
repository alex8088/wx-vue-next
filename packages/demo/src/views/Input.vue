<script setup lang="ts">
import { reactive, ref } from 'vue'
import Page from '../components/Page.vue'
import IconUser from '../components/icons/IconUser.vue'
import { WxTopTip, WxToast } from 'wx-vue'
import { type FormRules } from 'wx-vue'

interface FormData {
  password: string
  nickname: string
  phoneNumber: string
  email: string
  amount: string
}

const showDialog = ref<boolean>(false)

const form = reactive<FormData>({
  password: '123456',
  nickname: '',
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
</script>

<template>
  <Page :gray="false" :foot="false">
    <wx-form
      title="输入框"
      show-submit-button
      submit-text="确定"
      :model="form"
      :rules="rules"
      @submit="handleSubmit"
    >
      <wx-form-group title="基本类型" :label-width="64">
        <wx-input label="文本" placeholder="请输入文本" />
        <wx-input
          v-model="form.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
        <wx-input type="number" label="数字" placeholder="请输入数字" />
      </wx-form-group>
      <wx-form-group title="只读/不可用">
        <wx-input label="所在地区" placeholder="请输入所在地区" readonly />
        <wx-input label="详细地址" placeholder="请输入详细地址" disabled />
      </wx-form-group>
      <wx-form-group title="描述信息">
        <wx-input
          label="收货地址"
          placeholder="请输入收货地址"
          desc="描述信息"
        />
      </wx-form-group>
      <wx-form-group title="显示清除" :label-width="64">
        <wx-input
          v-model="form.nickname"
          label="昵称"
          placeholder="请输入昵称"
          clearable
        />
      </wx-form-group>
      <wx-form-group title="自定义-图标">
        <wx-input placeholder="请输入帐号或手机号">
          <template #prefix>
            <IconUser />
          </template>
        </wx-input>
      </wx-form-group>
      <wx-form-group title="自定义-验证码" :label-width="56">
        <wx-input
          type="number"
          label="手机号"
          placeholder="请输入手机号"
          :max-length="11"
        >
          <template #suffix>
            <i class="weui-icon-info-circle" @click="showDialog = true"></i>
          </template>
        </wx-input>
        <wx-input
          label="验证码"
          placeholder="请输入验证码"
          :cell-style="{ paddingTop: '12px', paddingBottom: '12px' }"
        >
          <template #suffix>
            <wx-button type="light" mini @click="$toast('验证码发送成功')"
              >获取验证码</wx-button
            >
          </template>
        </wx-input>
      </wx-form-group>
      <wx-form-group title="规则校验">
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
        />
      </wx-form-group>
    </wx-form>
    <wx-half-screen-dialog
      v-model:visible="showDialog"
      title="标题"
    ></wx-half-screen-dialog>
  </Page>
</template>
