import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {mdEnhancePlugin} from 'vuepress-plugin-md-enhance'
import {containerPlugin} from '@vuepress/plugin-container'
import {copyCodePlugin} from 'vuepress-plugin-copy-code2'
import {activeHeaderLinksPlugin} from '@vuepress/plugin-active-header-links'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

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

    markdown: {headers: {level: [1,2,3,4,5,6]}},

    head: [
        ['link', {rel: 'ico', href: 'https://vuejs.org/images/logo.png'}],
    ],

    theme: defaultTheme({
        logo: 'https://vuejs.org/images/logo.png',

        locales: {
            "/": {
                selectLanguageName: "简体中文",
                selectLanguageText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: true,
                lastUpdatedText: "最后一次更新",
                contributorsText: "贡献者",
                backToHome: "回到首页",
                warning: "注意",
                tip: "提示",
                danger: "警告",
                // 404 page
                notFound: [
                    "这里什么都没有",
                    "我们怎么到这来了？",
                    "这是一个 404 页面",
                    "看起来我们进入了错误的链接",
                ],
                openInNewWindow: "在新窗口打开",
                toggleColorMode: "切换颜色模式",
                toggleSidebar: "切换侧边栏",
                navbar,
                sidebar,
                sidebarDepth: 5,
            },
        },
    }),

    plugins: [
        containerPlugin({
            // 自定义容器插件
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
            // 自定义容器插件
            type: 'extend',
            locales: {
                '/': {
                    defaultInfo: '拓展',
                },
            },
            before: (info: string): string => `<div class="custom-container tip">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
            after: (): string => '</div>\n',
        }),
        copyCodePlugin({
            // 代码可复制插件
            showInMobile: false,
            locales: {
                "/": {
                    hint: "复制代码",
                },
            },
        }),
        activeHeaderLinksPlugin({
            // 跳转链接加图标插件
            headerLinkSelector: "div.right-menu-item > a",
        }),
        mdEnhancePlugin({
            // 启用任务列表
            tasklist: true,
        }),
        mediumZoomPlugin({selector: 'a > img'}),
    ],
})
