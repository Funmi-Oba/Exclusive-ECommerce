<template lang="">
  <SalesSections>
    <template #moment>Our Products</template>

    <template #title>Explore Our Products</template>
    <template #navigation>
      <CarouselNavigation :carousel-element="carouselElement" :scroll-distance="300" />
    </template>
  </SalesSections>
  <div
    ref="carousel"
    class="grid grid-flow-col gap-6 overflow-x-auto auto-rows-auto scroll-smooth no-scrollbar"
    style="
      grid-template-rows: repeat(2, auto);
      grid-auto-columns: 270px;
      /* padding: 1.5rem 1.5rem 1.5rem 5rem; */
    "
  >
    <ProductCard v-for="product in reversedProducts" :key="product.id" :product="product" />
  </div>

  <RedButton>
    <template #button>View All Products</template>
  </RedButton>
</template>

<script>
import ProductCard from './ProductCard.vue'
import CountdownTimer from './CountdownTimer.vue'
import CarouselNavigation from './CarouselNavigation.vue'
import { mapGetters } from 'vuex'
import SalesSections from './SalesSections.vue'
import RedButton from './RedButton.vue'

export default {
  components: {
    ProductCard,
    CountdownTimer,
    CarouselNavigation,
    SalesSections,
    RedButton,
  },

  data() {
    return {
      carouselElement: null, // Will hold the carousel element
    }
  },

  computed: {
    ...mapGetters('products', {
      products: 'getProducts',
      loading: 'getLoading',
      error: 'getError',
    }),
   reversedProducts() {
      return [...this.products].reverse();
    },
  },

  created() {
    this.$store.dispatch('products/fetchProducts')
  },

  mounted() {
    // After component is on screen, get the carousel element
    this.carouselElement = this.$refs.carousel
  },

  methods: {
    onCountdownEnd() {
      console.log('Flash sale ended!')
    },
  },
}
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
