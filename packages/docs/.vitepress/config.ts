import { defineConfig, DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Guide',
      items: [{ text: 'Getting Started', link: '/guide/' }]
    },
    {
      text: 'Basic',
      items: [{ text: 'Button', link: '/basic/button' }]
    }
  ]
}

const nav: DefaultTheme.NavItem[] = [
  { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
  { text: 'Components', link: '/basic/button', activeMatch: '^/basic/' }
]

export default defineConfig({
  lang: 'en-US',
  title: 'wx-vue',
  description:
    'A Vue.js 3 Mobile UI component library based on the WeUI Design.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],
  srcDir: 'docs',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/alex8088/wx-vue-next'
      }
    ],
    logo: '/favicon.svg',
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2020-present Alex Wei and Powered by VitePress'
    },
    nav,
    sidebar
  }
})
