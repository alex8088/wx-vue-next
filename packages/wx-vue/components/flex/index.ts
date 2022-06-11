import { withInstall, type WithInstallType } from '../utils'

import Flex from './flex'
import FlexItem from './flex-item'

export const WxFlex: WithInstallType<typeof Flex> = withInstall(Flex)

export const WxFlexItem: WithInstallType<typeof FlexItem> =
  withInstall(FlexItem)

export type WxFlexInstance = InstanceType<typeof Flex>

export type WxFlexItemInstance = InstanceType<typeof FlexItem>

export type { FlexProps, FlexItemProps } from './types'
