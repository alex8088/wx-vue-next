/**
 * @see https://github.com/andreypopp/react-textarea-autosize/
 */

const HIDDEN_STYLE = `
 min-height:0 !important;
 max-height:none !important;
 height:0 !important;
 visibility:hidden !important;
 overflow:hidden !important;
 position:absolute !important;
 z-index:-1000 !important;
 top:0 !important;
 right:0 !important
`

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing',
  'word-break'
]

type NodeStyle = {
  boxSizing: string
  paddingSize: number
  borderSize: number
  contextStyle: string
}

const calculateNodeStyling = (node: HTMLElement): NodeStyle => {
  const style = window.getComputedStyle(node)

  const boxSizing =
    style.getPropertyValue('box-sizing') ||
    style.getPropertyValue('-webkit-box-sizing')

  const paddingSize =
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))

  const borderSize =
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))

  const contextStyle = CONTEXT_STYLE.map(
    (name) => `${name}:${style.getPropertyValue(name)}`
  ).join(';')

  return { boxSizing, paddingSize, borderSize, contextStyle }
}

let hiddenTextarea: HTMLTextAreaElement | undefined

export const calcTextareaHeight = (
  target: HTMLTextAreaElement,
  rows: number
): number => {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea')
    document.body.appendChild(hiddenTextarea)
  }

  const { paddingSize, borderSize, boxSizing, contextStyle } =
    calculateNodeStyling(target)

  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
  hiddenTextarea.value = target.value || target.placeholder || ''

  let height = hiddenTextarea.scrollHeight

  if (boxSizing === 'border-box') {
    height = height + borderSize
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize
  }

  hiddenTextarea.value = ''
  const rowHeight = hiddenTextarea.scrollHeight - paddingSize

  if (rows !== null) {
    let minHeight = rowHeight * rows
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize
    }
    height = Math.max(minHeight, height)
  }

  hiddenTextarea.parentNode &&
    hiddenTextarea.parentNode.removeChild(hiddenTextarea)
  hiddenTextarea = undefined

  return height
}
