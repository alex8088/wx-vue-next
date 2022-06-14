import type { ExtractPropTypes, InjectionKey } from 'vue'

export const gridProps = {
  cols: {
    type: Number,
    default: 3,
    validator: (val): boolean => {
      return val >= 2 && val <= 5
    }
  }
}

export type GridProps = ExtractPropTypes<typeof gridProps>

export const gridItemProps = {
  icon: String,
  label: String
}

export type GridItemProps = ExtractPropTypes<typeof gridItemProps>

export interface GridContext {
  cols: number
}

export const gridContextKey: InjectionKey<GridContext> =
  Symbol('gridContextKey')
