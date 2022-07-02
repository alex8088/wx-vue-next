import { computed, provide, inject, type Ref, type InjectionKey } from 'vue'

export type IdContext = {
  prefix: number
  current: number
}

const defaultId = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0
}

export const idContextKey: InjectionKey<IdContext> = Symbol('idContextKey')

export const useIdProvider = (): void => {
  provide(idContextKey, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0
  })
}

export const useId = (prefix = 'wx'): Ref<string> => {
  const id = inject(idContextKey, defaultId)

  const computedId = computed(() => `${prefix}-${id.prefix}-${id.current++}`)

  return computedId
}
