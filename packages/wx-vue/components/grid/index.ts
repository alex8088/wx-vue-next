import { withInstall, type WithInstallType } from '../utils'

import Grid from './grid'
import GridItem from './grid-item'

export const WxGrid: WithInstallType<typeof Grid> = withInstall(Grid)

export const WxGridItem: WithInstallType<typeof GridItem> =
  withInstall(GridItem)

export type WxGridInstance = InstanceType<typeof Grid>

export type WxGridItemInstance = InstanceType<typeof GridItem>

export type { GridProps, GridItemProps } from './types'
