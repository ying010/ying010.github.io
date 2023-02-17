<template>
  <ParentLayout>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import {onMounted, watch} from 'vue'
import {useRoute} from 'vue-router'

watch(
    () => useRoute(),
    () => {
      this.$nextTick(() => {
        const el = document.getElementsByClassName('theme-default-content')?.[0]
        if (el) {
          console.log('route存在文章')
          new Viewer(el)
        } else console.log('不存在文章，不初始化')
      })
    }
)


onMounted(() => {
  let promise = new Promise(async function(resolve, reject) {
    await function () {
      const s = document.createElement('script');
      s.src = 'https://cdn.bootcdn.net/ajax/libs/viewerjs/1.10.5/viewer.min.js';
      document.head.appendChild(s);
      console.info("加载viewer.js文件。。。")
    }

    setTimeout(() => resolve("done"), 1000);
  });

  promise.finally(() => {
    console.info("加载viewer.js文件完成")
    const el = document.getElementsByClassName('theme-default-content')?.[0]
    if (el) {
      console.log('mounted存在文章')
      new Viewer(el)
    } else console.log('不存在文章，不初始化')
  });


})
</script>

<style scoped>

</style>
