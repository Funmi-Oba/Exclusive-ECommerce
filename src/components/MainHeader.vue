<template lang="">
  <header
    class="flex flex-col bg-white justify-center w-full h-20 pt-5 border-b border-[#000000]/30"
  >
    <div class="flex items-center justify-between">
      <router-link :to="{ name: 'home' }"
        ><h2 class="text-2xl font-bold cursor-pointer">Exclusive</h2></router-link
      >

      <nav>
        <ul class="flex space-x-8">
          <router-link :to="{ name: 'home' }"><li>Home</li></router-link>
          <router-link :to="{ name: 'contact' }"><li>Contact</li></router-link>
          <router-link :to="{ name: 'about' }"><li>About</li></router-link>

          <router-link :to="{ name: 'signup' }"><li>Sign Up</li></router-link>
        </ul>
      </nav>
      <div class="relative flex w-70">
        <input
          type="text"
          placeholder="What are you looking for?"
          class="w-full p-2 pr-10 bg-gray-200 rounded-md focus:outline-none"
        />
        <img src="/icons/search.svg" alt="" class="absolute -translate-y-1/2 right-2 top-1/2" />
      </div>

      <div class="flex space-x-6">
        <div class="relative inline-block">
          <router-link :to="{ name: 'wishlist' }"> <Heart class="w-8 h-8" /></router-link>

          <span
            v-if="wishlist.length > 0"
            type="button"
            class="absolute z-10 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full shadow -top-1 -right-1"
          >
            {{ wishlist.length }}
          </span>
        </div>
        <div class="relative inline-block">
          <router-link :to="{ name: 'cart' }"> <Cart class="w-8 h-8" /></router-link>
          <span
            v-if="cart.length > 0"
            type="button"
            class="absolute z-10 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full shadow -top-1 -right-1"
          >
            {{ cart.length }}
          </span>
        </div>
        <div class="relative inline-block">
          <div class="inline-block group">
            <User class="hover:bg-[#DB4444] hover:text-white rounded-full hover:p-1" />
            <div
              class="absolute text-white opacity-0 group-hover:opacity-100 backdrop-blur-3xl bg-[#0000000A] right-0 flex flex-col justify-center w-56 p-2 space-y-4 rounded-lg shadow-lg top-10 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
            >
              <div class="flex items-center gap-3 text-sm font-light">
                <User /> <span>Manage My Account</span>
              </div>
              <div class="flex items-center gap-3 text-sm font-light">
                <Mallbag /> <span>My Order</span>
              </div>
              <div class="flex items-center gap-3 text-sm font-light">
                <Cancel /> <span>My Cancellations</span>
              </div>
              <div class="flex items-center gap-3 text-sm font-light">
                <Star /> <span>My Reviews</span>
              </div>
              <div class="flex items-center gap-3 text-sm font-light">
                <Logout /> <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Cancel from '@/icons/cancel.vue'
import Cart from '@/icons/cart.vue'
import Heart from '@/icons/heart.vue'
import Logout from '@/icons/logout.vue'
import Mallbag from '@/icons/mallbag.vue'
import Star from '@/icons/star.vue'
import User from '@/icons/user.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Heart,
    Cart,
    User,
    Mallbag,
    Cancel,
    Star,
    Logout,
  },
  computed: {
    ...mapGetters('wishlist', {
      wishlist: 'getWishlist',
    }),
    ...mapGetters('cart', {
      cart: 'getCart',
    }),
  },
}
</script>
<style lang=""></style>
