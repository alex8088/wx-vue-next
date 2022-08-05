<script setup lang="ts">
import Page from '../components/Page.vue'
import IconUser from '../components/icons/IconUser.vue'
</script>

<template>
  <Page title="Avatar" desc="头像" :gray="false">
    <wx-divider>基本用法</wx-divider>
    <div class="avatar-spacing">
      <wx-avatar>A</wx-avatar>
      <wx-avatar :style="{ backgroundColor: '#8fd16e' }">A</wx-avatar>
      <wx-avatar :style="{ backgroundColor: '#eb6408' }">weui</wx-avatar>
      <wx-avatar :style="{ backgroundColor: '#2d88cb' }">
        <IconUser height="20px" width="20px" style="fill: #fff" />
      </wx-avatar>
      <wx-avatar>
        <img src="https://i.pravatar.cc/40" alt="X" />
      </wx-avatar>
    </div>
    <wx-divider>大小与形状</wx-divider>
    <div class="avatar-spacing">
      <wx-avatar :size="64">A</wx-avatar>
      <wx-avatar size="large">A</wx-avatar>
      <wx-avatar>A</wx-avatar>
      <wx-avatar size="small">A</wx-avatar>
    </div>
    <br />
    <div class="avatar-spacing">
      <wx-avatar shape="square" :size="64">A</wx-avatar>
      <wx-avatar shape="square" size="large">A</wx-avatar>
      <wx-avatar shape="square">A</wx-avatar>
      <wx-avatar shape="square" size="small">A</wx-avatar>
    </div>
    <wx-divider>带徽标</wx-divider>
    <div class="avatar-spacing">
      <wx-badge :content="8"><wx-avatar shape="square">A</wx-avatar></wx-badge>
      <wx-badge dot><wx-avatar shape="square">A</wx-avatar></wx-badge>
    </div>
    <wx-divider>头像组</wx-divider>
    <div class="avatar-spacing">
      <wx-avatar-group>
        <wx-avatar :style="{ backgroundColor: '#8fd16e' }">A</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#eb6408' }">B</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#2d88cb' }">C</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#14c9c9' }">vue</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#9369c6' }">weui</wx-avatar>
      </wx-avatar-group>
    </div>
    <div class="avatar-divider">向上层叠</div>
    <div class="avatar-spacing">
      <wx-avatar-group size="small" :max-count="3">
        <wx-avatar :style="{ backgroundColor: '#8fd16e' }">A</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#eb6408' }">B</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#2d88cb' }">C</wx-avatar>
        <wx-avatar>D</wx-avatar>
      </wx-avatar-group>
    </div>
    <div class="avatar-divider">向下层叠</div>
    <div class="avatar-spacing">
      <wx-avatar-group size="small" :max-count="3" z-index-ascend>
        <wx-avatar :style="{ backgroundColor: '#8fd16e' }">V</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#eb6408' }">U</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#2d88cb' }">E</wx-avatar>
        <wx-avatar>D</wx-avatar>
        <wx-avatar>E</wx-avatar>
      </wx-avatar-group>
    </div>
    <div class="avatar-divider">自定义“+x“</div>
    <div class="avatar-spacing">
      <wx-avatar-group
        :max-count="3"
        :more-avatar-style="{ backgroundColor: '#c8bff2' }"
        @more-click="(remaining: number) => $toast(`还剩:${remaining}个`)"
      >
        <wx-avatar :style="{ backgroundColor: '#8fd16e' }">V</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#eb6408' }">U</wx-avatar>
        <wx-avatar :style="{ backgroundColor: '#2d88cb' }">E</wx-avatar>
        <wx-avatar>D</wx-avatar>
        <template #more>+</template>
      </wx-avatar-group>
    </div>
  </Page>
</template>

<style lang="less" scoped>
.avatar-spacing {
  margin: 0 auto;
  text-align: center;
}
.avatar-divider {
  font-size: 12px;
  color: #aaa;
  margin: 10px 0;
  text-align: center;
}
.weui-badge-wraper + .weui-badge-wraper {
  margin-left: 20px;
}
</style>
