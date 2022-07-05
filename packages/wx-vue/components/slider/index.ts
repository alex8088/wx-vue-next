import { withInstall, type WithInstallType } from '../utils'

import Slider from './slider.vue'

export const WxSlider: WithInstallType<typeof Slider> = withInstall(Slider)

export type WxSliderInstance = InstanceType<typeof Slider>

export type { SliderProps } from './types'
