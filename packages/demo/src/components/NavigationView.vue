<template>
  <router-view v-slot="{ Component, route }" class="nav-view">
    <transition :name="transitionName">
      <keep-alive :include="keepAlive">
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import { useRouter } from 'vue-router'

type MatchPattern = string | RegExp | (string | RegExp)[]

export default defineComponent({
  name: 'NavigationView',
  props: {
    keepAlive: {
      type: [String, RegExp] as PropType<MatchPattern>,
      default: ''
    }
  },
  setup() {
    const historyMap = ref<Record<string, boolean>>({})
    const transitionName = ref<'forward' | 'back'>('forward')
    const router = useRouter()

    router.beforeEach((to, from) => {
      const _to = to.path
      const _from = from.path
      const has = historyMap.value[_to]
      if (has) {
        historyMap.value[_to] = false
        transitionName.value = 'back'
      } else {
        historyMap.value[_from || '/'] = _to !== '/'
        transitionName.value = 'forward'
      }
    })

    return {
      transitionName
    }
  }
})
</script>

<style lang="less">
.nav-view {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
}

@animation-duration: 0.3s;

.forward-enter-active {
  animation: forwardSlideIn @animation-duration forwards;
}

.forward-leave-active {
  animation: forwardSlideOut @animation-duration forwards;
}

.back-enter-active {
  animation: backSlideIn @animation-duration forwards;
}

.back-leave-active {
  animation: backSlideOut @animation-duration forwards;
}

@keyframes forwardSlideIn {
  from {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes forwardSlideOut {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
}

@keyframes backSlideIn {
  from {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes backSlideOut {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
}
</style>
