import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '随笔',
    link: '/md/随笔/歌曲.md',
  },
  {
    text: '学习',
    children: [
      {
        text: '前端',
        children: [
          '/md/study/front/css/css.md',
          '/md/study/front/ES6/proxy.md',
        ],
      },
      {
        text: 'JAVA',
        children: [
          '/md/study/java/basic/serialize.md',
          '/md/study/java/jvm/order.md',
        ],
      },
    ],
  },
]