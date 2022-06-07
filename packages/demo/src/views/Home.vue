<script setup lang="ts">
import Page from '../components/Page.vue'
import IconLogo from '../components/icons/IconLogo.vue'
</script>

<template>
  <Page>
    <template #header>
      <div class="hero__title">
        <IconLogo />
        <span>wx-vue</span>
      </div>
      <div class="hero__desc">基于 WeUI 设计，轻量、好看的移动端组件库</div>
    </template>
  </Page>
</template>

<style lang="less">
.hero__title {
  display: flex;
  align-items: center;
  line-height: 1;
  margin-bottom: 8px;

  span {
    font-size: 28px;
    margin-left: 16px;
    padding-bottom: 2px;
  }
}

.hero__desc {
  font-size: 14px;
  line-height: 24px;
  color: var(--weui-FG-1);
}
</style>
