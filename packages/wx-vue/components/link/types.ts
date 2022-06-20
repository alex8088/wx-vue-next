import type { ExtractPropTypes } from 'vue'

export const linkProps = {
  href: String
}

export type LinkProps = ExtractPropTypes<typeof linkProps>
