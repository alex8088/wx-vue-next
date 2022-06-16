import {
  createApp,
  defineComponent,
  reactive,
  h,
  ref,
  nextTick,
  type VNode,
  type App,
  type Plugin
} from 'vue'
import TopTipComponent from './top-tip.vue'
import type {
  TopTipFn,
  TopTipOptions,
  TopTipReturn,
  TopTipProps
} from './types'

// eslint-disable-next-line
let vm: any

function parseOptions(message: TopTipOptions): Partial<TopTipProps> {
  if (typeof message === 'string') {
    return { message }
  }
  return message
}

const TopTipComponentWraper = defineComponent({
  setup(_, { expose }) {
    const visible = ref<boolean>(false)
    let props = reactive({})

    expose({
      open: (options = {}) => {
        props = options
        nextTick(() => (visible.value = true))
      },
      close: () => {
        visible.value = false
      }
    })

    return (): VNode =>
      h(TopTipComponent, {
        ...props,
        visible: visible.value,
        'onUpdate:visible': (val: boolean) => {
          visible.value = val
        }
      })
  }
})

function TopTip(options: TopTipOptions): TopTipReturn {
  if (!vm) {
    const root = document.createElement('div')
    document.body.append(root)
    const app = createApp(TopTipComponentWraper)
    vm = app.mount(root)
  }

  vm.open(parseOptions(options))

  const close = (): void => {
    vm.close()
  }

  return {
    close
  }
}

TopTip.install = (app: App): void => {
  app.config.globalProperties.$topTip = TopTip
}

export const WxTopTip = TopTip as TopTipFn & Plugin

export default WxTopTip

export type {
  TopTipProps,
  TopTipFn,
  TopTipOptions,
  TopTipReturn
} from './types'
