<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
//引入pinia中的分类仓库
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
//创建分类仓库实例
const categoryStore = useCategoryStore()
//调用pinia的action，更新pinia中categoryList的值，获取分类数据
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加独一无二的key,破坏复用 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>
