import {defineUserConfig} from 'vuepress'
import {defaultTheme} from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { containerPlugin } from '@vuepress/plugin-container'

import {sidebar, navbar} from './configs'

export default defineUserConfig({
  base: '/vp2Note/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress2',
      description: 'Just playing around',
    },
  },

  head: [['link', {rel: 'ico', href: 'https://vuejs.org/images/logo.png'}]],

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    // navbar: navbar.zh,
    sidebar,
    navbar,

    tip: '提示',
    warning: '注意',
    danger: '警告',
  }),

  plugins: [
    containerPlugin({
      type: 'demo',
      locales: {
        '/': {
          defaultInfo: '示例',
        },
      },
      before: (info: string): string => `<details class="custom-container details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: (): string => '</details>\n',
    }),
    containerPlugin({
      type: 'extend',
      locales: {
        '/': {
          defaultInfo: '拓展',
        },
      },
      before: (info: string): string => `<div class="custom-container tip">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
      after: (): string => '</div>\n',
    }),
    mdEnhancePlugin({
      // 启用任务列表
      tasklist: true,
    }),
  ],
})
