import { isNumber } from './is'

export const toUnit = (
  value?: number | string,
  defaultUnit = 'px'
): string | undefined => {
  if (!value) return undefined
  return isNumber(value) ? `${value}${defaultUnit}` : String(value)
}

export const classNameToArray = (cls = ''): string[] =>
  cls.split(' ').filter((item) => !!item.trim())

export const addClass = (el: Element, cls: string): void => {
  if (!el || !cls.trim()) return
  el.classList.add(...classNameToArray(cls))
}

export const removeClass = (el: Element, cls: string): void => {
  if (!el || !cls.trim()) return
  el.classList.remove(...classNameToArray(cls))
}

export const getStyle = (el: Element, styleProp: string): string => {
  if (!el || !styleProp) return ''

  const defaultView = (el.ownerDocument || document).defaultView

  return defaultView
    ? defaultView.getComputedStyle(el, null).getPropertyValue(styleProp)
    : ''
}
