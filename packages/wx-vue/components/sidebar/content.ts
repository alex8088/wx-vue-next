import type { Ref, CSSProperties, InjectionKey } from 'vue'

export type SidebarContent = {
  currentIndex: Ref<string | number | undefined>
  lazyLoad: boolean
  paneClass: Ref<string | string[] | undefined>
  paneStyle: Ref<string | CSSProperties | undefined>
}

export const sidebarContentKey: InjectionKey<SidebarContent> =
  Symbol('sidebarContentKey')
