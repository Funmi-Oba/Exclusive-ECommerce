<template lang="">
  <div>
    <div class="flex items-center justify-between mt-10 mb-10">
        
      <h2>Cart ({{ cart.length }})</h2>
      
    </div>

    <div v-if="cart.length === 0">No items in Cart</div>
    <div v-else class="overflow-x-auto">
      <table class="w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th class="px-4 py-3 text-sm font-medium text-left">Product</th>
            <th class="px-4 py-3 text-sm font-medium text-left">Price</th>
            <th class="px-4 py-3 text-sm font-medium text-left">Quantity</th>
            <th class="px-4 py-3 text-sm font-medium text-left">Sub-total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cart"
            :key="item.id"
            class="transition-colors bg-white rounded-lg shadow-md group"
          >
            <td class="px-4 py-3 text-sm">
              <div class="flex items-center gap-2">
                <div class="relative inline-block">
                  <img :src="item.image" class="object-contain w-16 h-16" />

                  <span
                    @click="deleteItem(item.id)"
                    type="button"
                    class="absolute z-10 flex items-center justify-center w-4 h-4 text-xs font-bold text-white transition-opacity bg-red-600 rounded-full shadow opacity-0 cursor-pointer group-hover:opacity-100 -top-1 -left-1"
                  >
                    x
                  </span>
                </div>

                <span>{{ item.title }}</span>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">${{ item.price }}</td>
            <td class="px-4 py-3 text-sm">
              <input
                type="number"
                min="1"
                class="w-20 px-2 py-1 border rounded focus:outline-none border-[#00000066]"
                v-model.number="item.quantity"
              />
            </td>
            <td class="px-4 py-3 text-sm">${{ formatMoney(item.price * item.quantity) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex items-center justify-between mt-2">
        <router-link :to="{name: 'home'}"  class="px-4 py-2 border rounded border-[#00000080]"> Return To Shop</router-link>
        <button type="" class="px-4 py-2 border rounded border-[#00000080]">Update Cart</button>
      </div>
      <div class="flex justify-between mt-10">
        <div class="flex items-center gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            class="border py-3 px-2 rounded border-[#00000080]"
          />
          <RedButton>
            <template #button>Apply Coupon</template>
          </RedButton>
        </div>

        <div class="flex flex-col px-4 py-6 space-y-4 border-2 border-black w-96">
          <h2 class="text-lg font-semibold">Cart Total</h2>
          <div class="flex justify-between border-b border-[#00000080] pb-3">
            <p>Subtotal:</p>
            <p>${{ formatMoney(grandTotal) }}</p>
          </div>
          <div class="flex justify-between border-b border-[#00000080] pb-3">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div class="flex justify-between font-semibold border-b border-[#00000080] pb-3">
            <p>Total:</p>
            <p>${{ formatMoney(grandTotal) }}</p>
          </div>
          <RedButton>
            <template #button>
              <router-link :to="{name: 'checkout'}" >Proceed To Checkout</router-link>
              </template>
          </RedButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RedButton from '@/components/RedButton.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    RedButton,
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
    ...mapActions('cart', ['deleteFromCart']),
    deleteItem(id) {
      this.deleteFromCart(id)
    },
  },
}
</script>
<style>
input[type='number'] {
  -webkit-appearance: auto;
  appearance: auto;
}

/* Chrome, Edge, Safari */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 1;
}
</style>
