import Cart from '@/views/Cart.vue'
import Home from '@/views/Home.vue'
import ProductPage from '@/views/ProductPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(), // import.meta.env.BASE_URL
  routes: routes
})

export default router