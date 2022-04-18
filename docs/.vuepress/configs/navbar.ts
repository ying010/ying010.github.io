import type {NavbarConfig} from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '首页',
    link: '/md/study/README.md',
  },
  {
    text: 'JAVA',
    children: [
      {
        text: 'jvm',
        children: [
          '/md/study/java/jvm/command.md',
          '/md/study/java/jvm/model.md',
          '/md/study/java/jvm/oom.md',
        ],
      },
      {
        text: '框架',
        children: [
          '/md/study/java/framework/mybatis/interceptor.md',
          '/md/study/java/framework/mybatis/page-helper.md',
          '/md/study/java/framework/Spring/spring-framework-source.md',
        ],
      },
      {
        text: '中间件',
        children: [
          '/md/study/java/middleware/message/Kafka.md',
        ],
      },
    ],
  },
  {
    text: '前端',
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
          '/md/study/front/js/proxy.md',
          '/md/study/front/js/function.md',
        ],
      },
      {
        text: 'vue',
        children: [
          '/md/study/front/vue/',
          '/md/study/front/vue/vue-basis',
          '/md/study/front/vue/vue-error-analysis',
          '/md/study/front/vue/vue-project',
        ],
      },
    ],
  },
  {
    text: '基础知识',
    children: [
      '/md/study/basic/algorithm.md',
      '/md/study/basic/design-pattern.md',
    ],
  },
  {
    text: '工具',
    children: [
      {
        text: '开发工具',
        children: [
          '/md/tools/IDE/IDEA/getting-started.md',
          '/md/tools/IDE/IDEA/keymap.md',
          '/md/tools/IDE/IDEA/plugins.md',
        ],
      },
      {
        text: 'Linux',
        children: [
          '/md/tools/Linux/command.md',
        ],
      },
      {
        text: 'npm',
        children: [
          '/md/tools/npm/npm.md',
        ],
      },
      {
        text: 'redis',
        children: [
          '/md/tools/redis/command.md',
          '/md/tools/redis/initialization.md',
        ],
      },
    ],
  },
  {
    text: '辅助项目搭建',
    children: [
      {
        text: 'VuePress',
        children: [
          '/md/using/vuepress/getting-started.md',
          '/md/using/vuepress/default-theme.md',
          '/md/using/vuepress/plugins.md',
        ],
      },
    ],
  },
  {
    text: '开发项目搭建',
    children: [
      {
        text: '项目框架',
        children: [
          '/md/using/project-build/project-framework.md',
        ],
      },
    ],
  },
  {
    text: '实操',
    children: [
      {
        text: '环境配置',
        children: [
          '/md/using/environment_configuration.md',
        ],
      },
      {
        text: '错误信息',
        children: [
          '/md/using/error/shell_error.md',
        ],
      },
    ],
  },
]