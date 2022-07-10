/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ActionSheet from '../views/ActionSheet.vue'
import Badge from '../views/Badge.vue'
import Button from '../views/Button.vue'
import Checkbox from '../views/Checkbox.vue'
import DatePicker from '../views/DatePicker.vue'
import Divider from '../views/Divider.vue'
import Flex from '../views/Flex.vue'
import Grid from '../views/Grid.vue'
import HalfScreenDialog from '../views/HalfScreenDialog.vue'
import Input from '../views/Input.vue'
import Link from '../views/Link.vue'
import List from '../views/List.vue'
import MessageBox from '../views/MessageBox.vue'
import Picker from '../views/Picker.vue'
import Progress from '../views/Progress.vue'
import Radio from '../views/Radio.vue'
import Rate from '../views/Rate.vue'
import Skeleton from '../views/Skeleton.vue'
import Slider from '../views/Slider.vue'
import Sticky from '../views/Sticky.vue'
import Switch from '../views/Switch.vue'
import Textarea from '../views/Textarea.vue'
import TimePicker from '../views/TimePicker.vue'
import Toast from '../views/Toast.vue'
import TopTip from '../views/TopTip.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: ActionSheet
    },
    {
      path: '/badge',
      name: 'badge',
      component: Badge
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox
    },
    {
      path: '/datapicker',
      name: 'datapicker',
      component: DatePicker
    },
    {
      path: '/divider',
      name: 'divider',
      component: Divider
    },
    {
      path: '/flex',
      name: 'flex',
      component: Flex
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/halfscreendialog',
      name: 'halfscreendialog',
      component: HalfScreenDialog
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/link',
      name: 'link',
      component: Link
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/messagebox',
      name: 'messagebox',
      component: MessageBox
    },
    {
      path: '/picker',
      name: 'picker',
      component: Picker
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/rate',
      name: 'rate',
      component: Rate
    },
    {
      path: '/skeleton',
      name: 'skeleton',
      component: Skeleton
    },
    {
      path: '/slider',
      name: 'slider',
      component: Slider
    },
    {
      path: '/sticky',
      name: 'sticky',
      component: Sticky
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: Textarea
    },
    {
      path: '/timepicker',
      name: 'timepicker',
      component: TimePicker
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/toptip',
      name: 'toptip',
      component: TopTip
    }
  ]
})

export default router
