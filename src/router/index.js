
import GeneralLayout from '@/layouts/GeneralLayout.vue'

import About from '@/pages/About.vue'
import Cart from '@/pages/Cart.vue'
import Checkout from '@/pages/Checkout.vue'
import Contact from '@/pages/Contact.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import SignUp from '@/pages/SignUp.vue'
import Wishlist from '@/pages/Wishlist.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GeneralLayout,
  
      redirect: '/login',
      children: [
        { path: 'login', component: Login, name: 'login' },
        { path: 'signup', component: SignUp, name: 'signup' },
        { path: 'login', component: Login, name: 'login' },
        { path: 'home', component: Home, name: 'home' },
         { path: 'wishlist', component: Wishlist, name: 'wishlist' },
          { path: 'cart', component: Cart, name: 'cart' },
           { path: 'checkout', component: Checkout, name: 'checkout' },
        { path: 'about', component: About, name: 'about' },
        { path: 'contact', component: Contact, name: 'contact' },
      ],
    },
  ],
})
// router.beforeEach((to, from, next) => {
//   const user = localStorage.getItem('user') === 'true'

//   if (to.meta.requiresAuth && !user) {
//     next({ name: 'login' })
//     return
//   }
//   if (to.meta.isGuest && user) {
//     next({ name: 'dashboard' })
//     return
//   }
//   next()
// })


export default router
