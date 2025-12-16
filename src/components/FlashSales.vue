<template lang="">
  <SalesSections>
    <template #moment>Today's</template>

    <template #title>Flash Sales</template>
    <template #countdown>
      <CountdownTimer
        :days="3"
        :hours="23"
        :minutes="19"
        :seconds="56"
        @countdown-ended="onCountdownEnd"
      />
    </template>
    <template #navigation>
      <CarouselNavigation :carousel-element="carouselElement" :scroll-distance="300" />
    </template>
    </SalesSections>
    <div 
      ref="carousel" 
      class="flex gap-6 py-6 pr-6 overflow-x-auto scroll-smooth no-scrollbar"
    >
    <ProductCard 
        v-for="product in products"
        :key="product.id"
        :product="product"
        
      />
     
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
    SalesSections,RedButton
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

