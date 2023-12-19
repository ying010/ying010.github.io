import type {NavbarConfig} from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
    {
        text: 'JAVA',
        children: [
            {
                text: 'JAVA',
                children: [
                    '/md/java/base/拷贝.md',
                ],
            },
            {
                text: 'JVM',
                children: [
                    '/md/java/base/jvm/model.md',
                    '/md/java/base/jvm/oom.md',
                ],
            },
            {
                text: '漏洞',
                children: [
                    '/md/java/base/vulnerability/dos.md',
                ],
            },
        ],
    },
    {
        text: 'Spring',
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
                ],
            },
        ],
    },
    {
        text: '中间件',
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
        text: '工具',
        children: [
            {
                text: '开发部署工具',
                children: [
                    '/md/tools/development/maven.md',
                ],
            },
            {
                text: '开发工具IDE',
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
        ],
    },
    {
        text: '开发实践',
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
            {
                text: 'arthas',
                children: [
                    '/md/using/debug/arthas/简介.md',
                    '/md/using/debug/arthas/入门.md',
                    '/md/using/debug/arthas/最佳实践.md',
                    '/md/using/debug/arthas/原理解析.md',
                ],
            },
            {
                text: 'VuePress搭建',
                children: [
                    '/md/using/vuepress/getting-started.md',
                    '/md/using/vuepress/default-theme.md',
                    '/md/using/vuepress/plugins.md',
                ],
            },
        ],
    },
    {
        text: '基础知识',
        children:[
            {
                text: '算法',
                children: [
                    '/md/basic/algorithm/algorithm.md',
                ],
            },
            {
                text: '设计模式',
                children: [
                    '/md/basic/design-pattern/design-pattern.md',
                ],
            },
        ]
    },
]
