import {defineUserConfig} from 'vuepress'
import {defaultTheme} from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { containerPlugin } from '@vuepress/plugin-container'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

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
        sidebarDepth: 0,
      },
    },
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
    copyCodePlugin({
      showInMobile: false,
      locales: {
        "/": {
          hint: "复制代码",
        },
      },
    }),
    activeHeaderLinksPlugin({
      headerLinkSelector: "div.right-menu-item > a",
    }),
    docsearchPlugin({
      apiKey: "30c521836bfc8e97915576e11ac2cebc",
      indexName: "arthas",
      appId: "UX8WBNVHHR",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
    mdEnhancePlugin({
      // 启用任务列表
      tasklist: true,
    }),
  ],
})
