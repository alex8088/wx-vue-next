import type { Ref, CSSProperties, InjectionKey } from 'vue'

export type TabsContent = {
  currentIndex: Ref<string | number | undefined>
  lazyLoad: boolean
  paneClass: Ref<string | string[] | undefined>
  paneStyle: Ref<string | CSSProperties | undefined>
}

export const tabsContentKey: InjectionKey<TabsContent> =
  Symbol('tabsContentKey')
