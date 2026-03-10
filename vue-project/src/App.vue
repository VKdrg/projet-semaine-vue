<script>
import ProductCard from './components/ProductCard.vue';

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      cartTotal: 0
    }
  },
  methods: {

  },
  computed:{
    increaseCart() {
      cartTotal + this.price
    }
  }
}

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
  </nav>
  <RouterView />

  <ProductCard @add-to-cart="increaseCart" />
</template>

<style></style>