<template lang="">
  <div>
    <div class="flex items-center justify-between mt-10 mb-10">
      <h2>Wishlist ({{ wishlist.length }})</h2>
      <button
        @click="moveAll"
        type=""
        v-if="wishlist.length > 0"
        class="px-4 py-2 border rounded border-[#00000080]"
      >
        Move All To Cart
      </button>
    </div>

    <div v-if="wishlist.length === 0">No items in wishlist</div>
    <div class="grid grid-cols-4 gap-6">
      <div v-for="item in wishlist" :key="item.id">
        <div class="w-52 bg-[#F5F5F5] p-4">
          <div class="flex justify-between">
            <button class="p-2 bg-white rounded-full">
              <Delete @click="deleteItem(item.id)" class="cursor-pointer" />
            </button>
          </div>
          <img :src="item.image" alt="" class="object-contain w-full py-4 h-44" />
          <button
            @click="addItemToCart(item)"
            type=""
            class="flex items-center justify-center w-full py-2 text-white bg-black rounded-b-md"
          >
            <span class="inline-block mr-1"> <Cart /></span>
            Add to Cart
          </button>
        </div>
        <div class="w-52">
          <h3 :title="item.title" class="mt-4 text-sm font-medium truncate">{{ item.title }}</h3>

          <p class="text-[#DB4444] font-semibold mt-2">
            ${{ item.price }} <span class="text-sm text-gray-400 line-through">$180</span>
          </p>
        </div>

        <!-- <div class="flex items-center gap-2 mt-2">
          <StarRating :rating="item.rating.rate" />
          <span class="text-sm text-gray-400">({{ item.rating.count }})</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Cart from '@/icons/cart.vue'
import Delete from '@/icons/delete.vue'
import StarRating from '@/components/StarRating.vue'
export default {
  components: { StarRating, Cart, Delete },
  computed: {
    ...mapGetters('wishlist', {
      wishlist: 'getWishlist',
    }),
  },
  methods: {
    ...mapActions('wishlist', ['deleteProduct']),
    deleteItem(id) {
      this.deleteProduct(id)
    },
    ...mapActions('cart', ['addToCart']),
    addItemToCart(item) {
      this.addToCart(item)
      this.deleteProduct(item.id)
    },
    ...mapActions('wishlist', ['moveItemsToCart']),
    moveAll() {
      this.moveItemsToCart()
    },
  },
}
</script>
<style lang=""></style>
