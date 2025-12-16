
import { createStore } from 'vuex'
import { productsStore } from './products'
import { wishlistStore } from './wishlist'
import { userStore } from './user'
import { cartStore } from './cart'
export const store = createStore({
 modules:{
  products: productsStore,
  wishlist: wishlistStore,
  user: userStore,
  cart: cartStore

 }
})