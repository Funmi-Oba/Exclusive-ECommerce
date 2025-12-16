<template lang="">
  <div class="shadow-md rounded-xl hover:shadow-xl max-w-60 group">
    <div class="bg-[#F5F5F5] p-4">
      <div class="flex justify-between">
        <span class="flex items-center px-2 text-xs text-white bg-[#DB4444] rounded">-30%</span>
        <button class="p-2 bg-white rounded-full">
          <Heart
            @click="toggleWishlist"
            class="cursor-pointer"
            :class="isInWishlist ? 'text-black fill-red-500' : 'text-black'"
          />
        </button>
      </div>
      <div class="relative h-40 w-52">
        <img :src="product.image" alt="" class="object-contain w-full h-40 mt-3" />
        <button
          @click="toggleCart"
          class="absolute bottom-0 flex items-center justify-center w-full py-2 text-white opacity-0 bg-black/70 hover:opacity-100 rounded-b-md group-hover:opacity-100"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <h3 :title="product.title" class="mt-4 text-sm font-medium truncate">{{ product.title }}</h3>

    <p class="text-[#DB4444] font-semibold mt-2">
      ${{ product.price }} <span class="text-sm text-gray-400 line-through">$180</span>
    </p>
    <div class="flex items-center gap-2 mt-2">
      <StarRating :rating="product.rating.rate" />
      <span class="text-sm text-gray-400">({{ product.rating.count }})</span>
    </div>
  </div>
</template>
<script>
import Heart from '@/icons/heart.vue'
import StarRating from './StarRating.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Heart,
    StarRating,
  },
  props: ['product'],
  computed: {
    ...mapGetters('wishlist', ['getWishlistItem']),
    ...mapGetters('cart', ['getCart']),
    isInWishlist() {
      return !!this.getWishlistItem(this.product.id)
    },
  },
  methods: {
    ...mapActions('wishlist', ['updateWishlist']),
    toggleWishlist() {
      this.updateWishlist(this.product)
    },
    ...mapActions('cart', ['addToCart']),
    toggleCart() {
      this.addToCart(this.product)
    },
  },
}
</script>
<style lang=""></style>
