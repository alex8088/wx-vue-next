/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Button from '../views/Button.vue'
import Divider from '../views/Divider.vue'
import Flex from '../views/Flex.vue'
import Grid from '../views/Grid.vue'
import List from '../views/List.vue'
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
      path: '/toast',
      name: 'toast',
      component: Toast
    }
  ]
})

export default router
