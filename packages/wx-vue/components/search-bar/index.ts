import { withInstall, type WithInstallType } from '../utils'

import SearchBar from './search-bar.vue'

export const WxSearchBar: WithInstallType<typeof SearchBar> =
  withInstall(SearchBar)

export default WxSearchBar

export type WxSearchBarInstance = InstanceType<typeof SearchBar>

export type { SearchBarProps } from './types'
