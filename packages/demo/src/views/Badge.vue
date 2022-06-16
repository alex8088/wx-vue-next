<script setup lang="ts">
import Page from '../components/Page.vue'
import IconPicture from '../components/icons/IconPicture.vue'
</script>

<template>
  <Page title="Badge" desc="徽章" :gray="false">
    <wx-divider>基本用法</wx-divider>
    <div class="badge-spacing badge-base">
      <wx-badge :content="8"><IconPicture class="avatar" /></wx-badge>
      <wx-badge :content="100"><IconPicture class="avatar" /></wx-badge>
      <wx-badge content="new"><IconPicture class="avatar" /></wx-badge>
      <wx-badge dot><IconPicture class="avatar" /></wx-badge>
    </div>
    <wx-divider>独立使用</wx-divider>
    <div class="badge-spacing badge-alone">
      <wx-badge :content="8" />
      <wx-badge :content="100" />
      <wx-badge content="hot" />
      <wx-badge dot />
    </div>
    <wx-divider>最大值</wx-divider>
    <div class="badge-spacing badge-base">
      <wx-badge :content="10" :max="9"><IconPicture class="avatar" /></wx-badge>
      <wx-badge :content="100"><IconPicture class="avatar" /></wx-badge>
      <wx-badge :content="1000" :max="999">
        <IconPicture class="avatar" />
      </wx-badge>
    </div>
    <wx-divider>自定义颜色</wx-divider>
    <div class="badge-spacing badge-base">
      <wx-badge :content="10" color="#409eff">
        <IconPicture class="avatar" />
      </wx-badge>
      <wx-badge :content="100" color="#409eff">
        <IconPicture class="avatar" />
      </wx-badge>
    </div>
  </Page>
</template>

<style lang="less">
.badge-spacing {
  margin: 0 auto;
  text-align: center;

  .avatar {
    height: 40px;
    width: 40px;
  }
}

.badge-base {
  .weui-badge-wraper {
    margin: 0 15px;
  }
}

.badge-alone {
  .weui-badge {
    margin: 0 15px;
  }
}
</style>
