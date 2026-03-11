import Cart from '@/views/Cart.vue'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
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