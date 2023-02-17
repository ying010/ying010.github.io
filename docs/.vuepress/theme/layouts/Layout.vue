<template>
  <ParentLayout>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import {onMounted, watch} from 'vue'
import {useRoute} from 'vue-router'
import viewer from 'viewer'

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
  const el = document.getElementsByClassName('theme-default-content')?.[0]
  if (el) {
    console.log('mounted存在文章')
    new Viewer(el)
  } else console.log('不存在文章，不初始化')
})
</script>

<style scoped>

</style>
