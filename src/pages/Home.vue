<template lang="">
  <div class="flex">
    <ProductList />
    <ProductImages />
  </div>
  <FlashSales />
  <Category />
  <BestSellingProducts />
  <EnhanceExperience />
  <ExploreProducts />
  <NewArrival />
</template>
<script>
import BestSellingProducts from '@/components/BestSellingProducts.vue'
import Category from '@/components/Category.vue'
import EnhanceExperience from '@/components/EnhanceExperience.vue'
import ExploreProducts from '@/components/ExploreProducts.vue'
import FlashSales from '@/components/FlashSales.vue'
import NewArrival from '@/components/NewArrival.vue'
import ProductImages from '@/components/ProductImages.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    ProductList,
    ProductImages,
    FlashSales,
    Category,
    BestSellingProducts,
    ExploreProducts,
    EnhanceExperience,
    NewArrival,
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {},
}
</script>
<style lang=""></style>
