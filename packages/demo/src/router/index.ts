/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Badge from '../views/Badge.vue'
import Button from '../views/Button.vue'
import Divider from '../views/Divider.vue'
import Flex from '../views/Flex.vue'
import Grid from '../views/Grid.vue'
import List from '../views/List.vue'
import MessageBox from '../views/MessageBox.vue'
import Toast from '../views/Toast.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/toast',
      name: 'toast',
      component: Toast
    }
  ]
})

export default router
