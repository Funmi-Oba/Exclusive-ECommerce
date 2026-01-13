import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const itemSubTotal = ref(null)
  const cartSubTotal = ref(null)
  const cartTotal = ref(null)

  const getCart = computed(() => cart.value)

  const  getCartItemById = (id) => {
    return cart.value.find((item) => item.id === id)
  }

  const getItemSubtotal = (productId) => {
    const item = cart.value.find((item) => item.id === productId)
    return item ? item.price * item.quantity : 0
  }

  const getCartSubTotal = computed(() => {
    return cart.value.reduce((acc, curItem) => acc + curItem.price * curItem.quantity, 0)
  })

  const addToCart = (product) => { 
    cart.value.push({ ...product, quantity: 1 })
  }

  const deleteFromCart =  (productId) => {
    cart.value = cart.value.filter((item) => item.id !== productId)
  }

  const increaseQuantity = (productId) => {
    const item = cart.value.find((item) => item.id === productId)
    if (item) item.quantity++
  }

  const decreaseQuantity = (productId) => {
    const item = cart.value.find((item) => item.id === productId)
       if (item) {
         item.quantity--
         if (item.quantity <= 0) {
           cart.value = cart.value.filter((i) => i.id !== productId)
         }
       }
      }

      const addToCartAction = (product) => {
        const existingItem = cart.value.find((item) => item.id === product.id)
         if (existingItem) {
          increaseQuantity(product.id)
        } else {
         addToCart(product)
       }
     }

    //  const deleteFromCartAction = (productId) => {
    //    deleteFromCart(productId)
    //  }
    //  const increaseQuantityAction = (productId) => {
    //    increaseQuantity(productId)
    //  }
    //  const decreaseQuantityAction = (productId) => {
    //    decreaseQuantity(productId)
    //  }

    return{
    cart,
    itemSubTotal,
    cartSubTotal,
    cartTotal,
    getCart,
    getCartItemById,
    getItemSubtotal,
    getCartSubTotal,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    addToCartAction,
    }
})






// export const cartStore = {
//   namespaced: true,
//   state() {
//     return {
//       cart: [],
//       itemSubTotal: null,
//       cartSubTotal: null,
//       cartTotal: null,
//     }
//   },

//   getters: {
//     getCart(state) {
//       return state.cart
//     },

//     getCartItemById: (state) => (id) => {
//       return state.cart.find((p) => p.id === id) || null
//     },

//     getItemSubtotal: (state) => (productId) => {
//       const item = state.cart.find((item) => item.id === productId)
//       return item ? item.price * item.quantity : 0
//     },

//     getCartSubTotal(state) {
//       return state.cart.reduce((acc, curItem) => acc + curItem.price * curItem.quantity, 0)
//     },
//   },

//   mutations: {

//     addToCart(state, product) {
//       state.cart.push({ ...product, quantity: 1 })
//     },

//     deleteFromCart(state, productId) {
//      state.cart = state.cart.filter((item) => item.id !== productId)
//     },

//     increaseQuantity(state, productId) {
//       const item = state.cart.find((item) => item.id === productId)
//       if (item) item.quantity++
//     },

//     decreaseQuantity(state, productId) {
//       const item = state.cart.find((item) => item.id === productId)
//       if (item) {
//         item.quantity--
//         if (item.quantity <= 0) {
//           state.cart = state.cart.filter((i) => i.id !== productId)
//         }
//       }
//     },
//   },

//   actions: {
//     addToCart({ state, commit }, product) {
//       const existingItem = state.cart.find((item) => item.id === product.id)
//       if (existingItem) {
//         commit('increaseQuantity', product.id)
//        } else {
//         commit('addToCart', product)
//       }
//     },
//     deleteFromCart({ commit }, productId) {
//       commit('deleteFromCart', productId)
//     },
//     increaseQuantity({ commit }, productId) {
//       commit('increaseQuantity', productId)
//     },
//     decreaseQuantity({ commit }, productId) {
//       commit('decreaseQuantity', productId)
//     },
//   },
// }
