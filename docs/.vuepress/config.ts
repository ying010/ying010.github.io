import {defineUserConfig} from 'vuepress'
import {DefaultThemeOptions} from 'vuepress'
import {sidebar, navbar} from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/vp2Note/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress2',
      description: 'Just playing around',
    },
  },
  head: [['link', {rel: 'ico', href: 'https://vuejs.org/images/logo.png'}]],

  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    // navbar: navbar.zh,
    sidebar,
    navbar,

    tip: '提示',
    warning: '注意',
    danger: '警告',
  },

  plugins: [
    [
      '@vuepress/container',
      {
        type: 'demo',
        locales: {
          '/': {
            defaultInfo: '示例',
          },
        },
        before: (info: string): string => `<div class="custom-container tip">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
        after: (): string => '</div>\n',
      },
    ],
    [
      '@vuepress/container',
      {
        type: 'extend',
        locales: {
          '/': {
            defaultInfo: '拓展',
          },
        },
        before: (info: string): string => `<div class="custom-container tip">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
        after: (): string => '</div>\n',
      },
    ],
  ],
})