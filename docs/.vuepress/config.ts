import { defineUserConfig } from 'vuepress'
import { DefaultThemeOptions } from 'vuepress'
import {sidebar} from './configs/sidebar'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/vp2Note/',
    lang: 'zh-CN',
    title: 'VuePress2',
    description: 'Just playing around',
    head: [['link', {rel: 'ico', href: 'https://vuejs.org/images/logo.png'}]],

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        // navbar: navbar.zh,
        sidebar,
    },
})