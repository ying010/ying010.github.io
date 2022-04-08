import type {SidebarConfig} from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/md/study/': [
    {
      text: 'java',
      collapsible: true,
      children: [
        {
          text: 'jvm',
          children: [
            '/md/study/java/jvm/order.md',
            '/md/study/java/jvm/someone.md',
          ],
        },
        {
          text: '基础知识',
          children: [
            '/md/study/java/basic/serialize.md',
          ],
        },
      ],
    },
    {
      text: '前端',
      collapsible: true,
      children: [
        {
          text: 'css',
          children: [
            '/md/study/front/css/css.md',
          ],
        },
        {
          text: 'js',
          children: [
            '/md/study/front/ES6/proxy.md',
          ],
        },
        {
          text: 'VUE',
          children: [
            '/md/study/front/VUE/rect.md',
            '/md/study/front/VUE/vue1.md',
          ],
        },
      ],
    },
  ],
}
