/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ActionSheet from '../views/ActionSheet.vue'
import Badge from '../views/Badge.vue'
import Button from '../views/Button.vue'
import Divider from '../views/Divider.vue'
import Flex from '../views/Flex.vue'
import Grid from '../views/Grid.vue'
import HalfScreenDialog from '../views/HalfScreenDialog.vue'
import List from '../views/List.vue'
import MessageBox from '../views/MessageBox.vue'
import Progress from '../views/Progress.vue'
import Skeleton from '../views/Skeleton.vue'
import Sticky from '../views/Sticky.vue'
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
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/skeleton',
      name: 'skeleton',
      component: Skeleton
    },
    {
      path: '/sticky',
      name: 'sticky',
      component: Sticky
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
