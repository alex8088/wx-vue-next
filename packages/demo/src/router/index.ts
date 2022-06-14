/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Button from '../views/Button.vue'
import Grid from '../views/Grid.vue'

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
      path: '/grid',
      name: 'grid',
      component: Grid
    }
  ]
})

export default router
