<template lang="">
  <div class="w-full">
    <h2 class="mt-20 mb-10 text-3xl font-semibold tracking-wider">Billing Details</h2>
    <div class="flex items-center">
      <div class="w-1/2">
        <form class="flex flex-col justify-center w-3/4 space-y-2">
          <label for="" class="text-lg">First Name<span class="text-red-600">*</span></label>
          <input type="text" name="" class="p-2 mb-8 bg-gray-200" />
          <label for="" class="text-lg">Company Name</label>
          <input type="text" name="" class="p-2 mb-8 bg-gray-200" />
          <label for="" class="text-lg">Street Address<span class="text-red-600">*</span></label>
          <input type="text" name="" class="p-2 mb-8 bg-gray-200" />
          <label for="" class="text-lg">Apartment, floor, etc. (optional)</label>
          <input type="text" name="" class="p-2 mb-8 bg-gray-200" />
          <label for="" class="text-lg">Town/City<span class="text-red-600">*</span></label>
          <input type="text" name="" class="p-2 mb-8 bg-gray-200" />
          <label for="" class="text-lg">Phone Number<span class="text-red-600">*</span></label>
          <input type="phone" name="" class="p-2 mb-8 bg-gray-200" />
          <label for="" class="text-lg">Email Address<span class="text-red-600">*</span></label>
          <input type="email" name="" class="p-2 mb-8 bg-gray-200" />
        </form>
      </div>
      <div class="w-1/2 p-6 space-y-8">
        <div v-for="item in cart" :key="item.id" class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img :src="item.image" class="object-contain w-16 h-16" />
            <span>{{ item.title }} ({{ item.quantity }}) </span>
          </div>
          <span>${{ formatMoney(item.price * item.quantity) }}</span>
        </div>
        <div class="flex justify-between border-b-2 border-[#00000080] pb-3">
          <span>Subtotal:</span>
          <span>${{ formatMoney(grandTotal) }}</span>
        </div>

        <div class="flex justify-between border-b-2 border-[#00000080] pb-3">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div class="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${{ formatMoney(grandTotal) }}</span>
        </div>
        <div class="space-y-8">
          <div class="flex justify-between">
            <label class="flex items-center gap-2">
              <input type="radio" name="payment" class="size-6" />
              Bank
            </label>
            <img src="/icons/Frame 834.png" alt="" />
          </div>

          <label class="flex items-center gap-2">
            <input type="radio" name="payment" checked class="size-6" />
            Cash on delivery
          </label>
        </div>
        <div class="flex gap-2">
          <input type="text" placeholder="Coupon Code" class="flex-1 p-2 border rounded" />
           <button class="px-4 py-2 text-white bg-[#DB4444] rounded">
            Apply Coupon
          </button>
        </div>
        <button class=" rounded px-4 py-2 text-white bg-[#DB4444]">
         Place Order
          </button>
      </div>
    </div>
  </div>
</template>
<script>
import RedButton from '@/components/RedButton.vue';
import { mapGetters } from 'vuex'
export default {
    components:{
     RedButton   
    },
  computed: {
    ...mapGetters('cart', {
      cart: 'getCart',
      grandTotal: 'getCartSubTotal',
    }),
  },
  methods: {
    formatMoney(value) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value)
    },
  },
}
</script>
<style lang=""></style>
