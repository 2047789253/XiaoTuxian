<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePannel from './components/HomePannel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <HomePannel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <div>我是新鲜好物的插槽内容</div>
  </HomePannel>
  <HomePannel title="人气推荐" subTitle="人气推荐 好多商品"></HomePannel>
</template>
