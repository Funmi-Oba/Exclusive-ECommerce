import { defineStore } from 'pinia'
import { useCartStore } from './cart'
import { ref, computed} from 'vue'

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref([])

  const getWishlist = computed(() => wishlist.value) 

  const getWishlistItemById = (id) => {
    return wishlist.value.find((item) => item.id === id)
  }

  const addToWishlist = (product) => {
    wishlist.value.push(product)
  }

  const removeFromWishlist = (productId) => {
    wishlist.value = wishlist.value.filter((product) => product.id !== productId)
  }
  const clearWishlist = () => {
    wishlist.value = []
  }
  const updateWishlist = (product) => {
    const exists = wishlist.value.some((item) => item.id === product.id)

    if (!exists) {
     addToWishlist(product)
    } else {
      removeFromWishlist(product.id)
    }
  }
  
  const moveItemsToCart = (cartStore) => {
    cartStore = useCartStore()
    wishlist.value.forEach((item) => {
      cartStore.addToCartAction(item)
      wishlist.value=[]
    })
  }
  return {
    wishlist,
    getWishlist,
    removeFromWishlist,
      addToWishlist,
    getWishlistItemById,
    updateWishlist,
    clearWishlist,
    moveItemsToCart
  }

})

// export const wishlistStore = {
//   namespaced: true,

//   state() {
//     return {
//       wishlist: [],
//     }
//   },

//   getters: {
//     getWishlist(state) {
//       return state.wishlist
//     },
//     getWishlistItem: (state) => (id) => {
//       return state.wishlist.find((item) => item.id === id)
//     },
//   },

//   mutations: {
//     setWishlist(state, product) {
//       state.wishlist.push(product)
//     },

//     deleteProduct(state, productId) {
//       state.wishlist = state.wishlist.filter((product) => product.id !== productId)
//     },
//     clearWishlist(state){
//       state.wishlist=[]
//     }
//   },

//   actions: {
//     updateWishlist({ commit, state }, product) {
//       const exists = state.wishlist.some((item) => item.id === product.id)

//       if (!exists) {
//         commit('setWishlist', product)

//       } else {
//         commit('deleteProduct', product.id)

//       }
//     },
//     deleteProduct({ commit }, productId) {
//       commit('deleteProduct', productId)
//     },
//    moveItemsToCart({ state, dispatch, commit }) {
//   state.wishlist.forEach((item) => {
//     dispatch('cart/addToCart', item, { root: true })
//   })

//   commit('clearWishlist')
// },
//   },
// }
