import { defineClientConfig } from '@vuepress/client'
import Layout from './theme/layouts/Layout.vue'

export default defineClientConfig({
    layouts: {
        Layout,
    },
    setup: () => {
        console.info("setup this page");
    },
})
