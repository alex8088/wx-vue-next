<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const t = ref<number>(100)

const photoUrl = 'https://picsum.photos'
const url_1 = `${photoUrl}/id/641/500/120`
const url_2 = `${photoUrl}/id/63/200/120`
const url_3 = `${photoUrl}/id/827/200/120`
const url_4 = `${photoUrl}/500/120`
</script>

<template>
  <Page title="Image" desc="图片" :gray="false" spacing>
    <wx-divider>基本用法</wx-divider>
    <wx-image width="100%" :height="120" :src="url_1" />
    <wx-divider>填充与样式</wx-divider>
    <wx-flex>
      <wx-flex-item>
        <wx-image
          width="100%"
          :height="120"
          style="object-fit: contain"
          :src="url_2"
        >
        </wx-image>
      </wx-flex-item>
      <wx-flex-item>
        <wx-image
          width="100%"
          :height="120"
          style="border-radius: 16px"
          :src="url_2"
        >
        </wx-image>
      </wx-flex-item>
    </wx-flex>
    <wx-divider>加载中</wx-divider>
    <wx-flex>
      <wx-flex-item class="title">默认</wx-flex-item>
      <wx-flex-item class="title">自定义</wx-flex-item>
    </wx-flex>
    <wx-flex>
      <wx-flex-item>
        <wx-image width="100%" :height="120" :src="`${url_3}?${t}`" />
      </wx-flex-item>
      <wx-flex-item>
        <wx-image width="100%" :height="120" :src="`${url_3}?${t}`">
          <template #loading><wx-loading :size="24" /></template>
        </wx-image>
      </wx-flex-item>
    </wx-flex>
    <br />
    <wx-button type="light" @click="t = Date.now()">reload</wx-button>
    <wx-divider>加载错误</wx-divider>
    <wx-flex>
      <wx-flex-item class="title">默认</wx-flex-item>
      <wx-flex-item class="title">自定义</wx-flex-item>
    </wx-flex>
    <wx-flex>
      <wx-flex-item>
        <wx-image width="100%" :height="120" src="x.jpg" />
      </wx-flex-item>
      <wx-flex-item>
        <wx-image width="100%" :height="120" src="x.jpg">
          <template #error> 加载失败 </template>
        </wx-image>
      </wx-flex-item>
    </wx-flex>
    <wx-divider>延迟加载</wx-divider>
    <wx-image lazy width="100%" :height="120" :src="url_4" />
  </Page>
</template>

<style lang="less" scoped>
.weui-flex__item + .weui-flex__item {
  margin-left: 10px;
}

.title {
  font-size: 14px;
  color: #999;
  text-align: center;
  line-height: 38px;
}
</style>
