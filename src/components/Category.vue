<template lang="">
  <SalesSections>
    <template #moment>Categories</template>

    <template #title>Browse By Category</template>

    <template #navigation>
      <CarouselNavigation :carousel-element="carouselElement" :scroll-distance="300" />
    </template>
  </SalesSections>
  <div ref="carousel" >
    <CategoryIcons />
  </div>
</template>
<script>
import CarouselNavigation from './CarouselNavigation.vue';
import CategoryIcons from './CategoryIcons.vue'
import SalesSections from './SalesSections.vue'

export default {
  components: {
    SalesSections,
    CategoryIcons, CarouselNavigation
  },
   data() {
    return {
      carouselElement: null, // Will hold the carousel element
    }
  },
  mounted() {
    // After component is on screen, get the carousel element
    this.carouselElement = this.$refs.carousel
  },
}
</script>
<style lang=""></style>
