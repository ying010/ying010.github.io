import type {SidebarConfig} from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/md/base/': [
    {
      text: '学习路线',
      collapsible: true,
      children: [
        '/md/base/study-line/README.md',
      ],
    },
    {
      text: '学习规划',
      collapsible: true,
      children: [
        '/md/base/annual-planning/2023.md',
      ],
    },
  ],
  '/md/java/': [
    {
      text: 'Spring',
      collapsible: true,
      children: [
        {
          text: 'spring-framework',
          children: [
            '/md/java/spring/spring-framework/spring-framework-source.md',
          ],
        },
        {
          text: '插件',
          children: [
            '/md/java/spring/plugin/i18n-start.md',
            '/md/java/spring/plugin/i18n-source.md',
          ],
        },
      ]
    },
    {
      text: '中间件',
      collapsible: true,
      children: [
        {
          text: 'redis',
          children: [
            '/md/java/middleware/redis/command.md',
            '/md/java/middleware/redis/initialization.md',
            '/md/java/middleware/redis/using.md',
          ],
        },
        {
          text: 'Mybatis',
          children: [
            '/md/java/middleware/mybatis/mybatis.md',
          ],
        },
        {
          text: 'Kafka',
          children: [
            '/md/java/middleware/kafka/kafka.md',
          ],
        },
      ],
    },
    {
      text: 'JVM',
      collapsible: true,
      children: [
        '/md/java/base/jvm/model.md',
        '/md/java/base/jvm/oom.md',
      ],
    },
    {
      text: '漏洞',
      collapsible: true,
      children: [
        '/md/java/base/vulnerability/dos.md',
      ],
    },
  ],
  '/md/study/basic/': [
    {
      text: '基础知识',
      children: [
        '/md/study/basic/algorithm.md',
      ],
    },
  ],
  '/md/tools/': [
    {
      text: '开发工具',
      collapsible: true,
      children: [
        '/md/tools/IDE/IDEA/getting-started.md',
        '/md/tools/IDE/IDEA/keymap.md',
        '/md/tools/IDE/IDEA/plugins.md',
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
  ],
  '/md/using/': [
      {
        text: 'VuePress',
        collapsible: true,
        children: [
          '/md/using/vuepress/getting-started.md',
          '/md/using/vuepress/default-theme.md',
          '/md/using/vuepress/plugins.md',
        ],
      },
    {
      text: '开发项目',
      collapsible: true,
      children: [
        '/md/using/project-build/project-framework.md',
      ],
    },
    {
      text: '环境配置',
      collapsible: true,
      children: [
        '/md/using/environment_configuration.md',
      ],
    },
    {
      text: '错误信息',
      collapsible: true,
      children: [
        '/md/using/error/shell_error.md',
      ],
    },
    {
      text: 'arthas',
      collapsible: true,
      children: [
        '/md/using/debug/arthas/简介.md',
        '/md/using/debug/arthas/入门.md',
        '/md/using/debug/arthas/最佳实践.md',
        '/md/using/debug/arthas/原理解析.md',
      ],
    },
  ],
}
