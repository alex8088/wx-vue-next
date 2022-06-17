<script setup lang="ts">
import { onActivated, ref } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import Page from '../components/Page.vue'
import IconLogo from '../components/icons/IconLogo.vue'
import IconLayout from '../components/icons/IconLayout.vue'
import IconBase from '../components/icons/IconBase.vue'
import IconForm from '../components/icons/IconForm.vue'
import IconNotice from '../components/icons/IconNotice.vue'
import IconNav from '../components/icons/IconNav.vue'
import IconOther from '../components/icons/IconOther.vue'

const scrollTop = ref<number>(0)

const componentGroups = [
  {
    name: '布局',
    icon: IconLayout,
    components: ['Flex', 'Grid', 'List']
  },
  {
    name: '基础',
    icon: IconBase,
    components: ['Badge', 'Button', 'Divider', 'Skeleton']
  },
  {
    name: '表单',
    icon: IconForm,
    components: []
  },
  {
    name: '交互',
    icon: IconNotice,
    components: ['Message Box', 'Toast', 'TopTip']
  },
  {
    name: '导航',
    icon: IconNav,
    components: []
  },
  {
    name: '其他',
    icon: IconOther,
    components: []
  }
]

const router = useRouter()

onBeforeRouteLeave(() => {
  scrollTop.value = document.querySelector('.home')?.scrollTop || 0
})

onActivated(() => {
  const $home = document.querySelector('.home')
  if ($home) {
    $home.scrollTop = scrollTop.value
  }
})

const handleClick = (to: string): void => {
  router.push({ name: to.toLowerCase().replace(/\s+/g, '') })
}
</script>

<template>
  <Page class="home">
    <template #header>
      <div class="hero__title">
        <IconLogo />
        <span>wx-vue</span>
      </div>
      <div class="hero__desc">基于 WeUI 设计，轻量、好看的移动端组件库</div>
    </template>
    <div class="hero__components">
      <WxCollapse accordion>
        <WxCollapseItem v-for="(g, i) in componentGroups" :key="i">
          <template #header>
            <WxFlex>
              <WxFlexItem>{{ g.name }}</WxFlexItem>
              <component :is="g.icon"></component>
            </WxFlex>
          </template>
          <WxList>
            <WxListItem
              v-for="c in g.components"
              :key="c"
              :title="c"
              access
              @click="handleClick(c)"
            />
          </WxList>
        </WxCollapseItem>
      </WxCollapse>
    </div>
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

.hero__components {
  padding: 0 16px;

  .weui-collapse__item {
    border-radius: 4px;
    overflow: hidden;
  }

  .weui-collapse__hd {
    padding: 20px;
  }

  .weui-collapse__content {
    padding: 0;
  }

  .weui-flex {
    align-items: center;
    line-height: 1;
  }

  .weui-cells {
    margin-top: 0;
  }

  .weui-cell {
    padding: 16px 20px;
  }
}
</style>
