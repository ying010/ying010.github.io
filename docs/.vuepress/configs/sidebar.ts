import type {SidebarConfig} from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/md/study/': [
    {
      text: '概述',
      children: [
        '/md/study/README.md'
      ]
    }
  ],
  '/md/study/java': [
    {
      text: 'jvm',
      collapsible: true,
      children: [
        '/md/study/java/jvm/command.md',
        '/md/study/java/jvm/model.md',
        '/md/study/java/jvm/oom.md',
      ],
    },
    {
      text: '框架',
      collapsible: true,
      children: [
        {
          text: 'Mybatis',
          children: [
            '/md/study/java/framework/mybatis/interceptor.md',
            '/md/study/java/framework/mybatis/page-helper.md',
          ],
        },
        {
          text: 'Spring',
          children: [
            '/md/study/java/framework/Spring/spring-framework-source.md',
          ],
        },
      ],
    },
    {
      text: '中间件',
      collapsible: true,
      children: [
        {
          text: '消息中间件',
          children: [
            '/md/study/java/middleware/message/Kafka.md',
          ],
        },
      ],
    },
  ],
  '/md/study/front': [
    {
      text: 'css',
      collapsible: true,
      children: [
        '/md/study/front/css/css.md',
      ],
    },
    {
      text: 'js',
      collapsible: true,
      children: [
        '/md/study/front/js/proxy.md',
        '/md/study/front/js/function.md',
      ],
    },
    {
      text: 'vue',
      collapsible: true,
      children: [
        '/md/study/front/vue/',
        '/md/study/front/vue/vue-basis',
        '/md/study/front/vue/vue-error-analysis',
        '/md/study/front/vue/vue-project',
      ],
    },
  ],
  '/md/study/basic': [
    {
      text: '基础知识',
      collapsible: true,
      children: [
        '/md/study/basic/algorithm.md',
        '/md/study/basic/design-pattern.md',
      ],
    },
  ],
  '/md/tools/': [
    {
      text: '开发工具',
      collapsible: true,
      children: [
        {
          text: 'idea',
          children: [
            '/md/tools/IDE/IDEA/getting-started.md',
            '/md/tools/IDE/IDEA/keymap.md',
            '/md/tools/IDE/IDEA/plugins.md',
          ],
        },
      ],
    },
    {
      text: 'Linux',
      collapsible: true,
      children: [
        '/md/tools/Linux/command.md',
      ],
    },
    {
      text: 'npm',
      collapsible: true,
      children: [
        '/md/tools/npm/npm.md',
      ],
    },
    {
      text: 'redis',
      collapsible: true,
      children: [
        '/md/tools/redis/command.md',
        '/md/tools/redis/initialization.md',
      ],
    },
  ],
}
