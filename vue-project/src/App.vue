<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import ProductCard from './components/ProductCard.vue';
import ProductList from './components/ProductList.vue';
import Home from './views/Home.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      products: [],
      error: null
      // cartTotal: 0
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Error' + Error)
        }
        this.products = await response.json()
      }

      catch (error) {
        console.log(`Error : ${error}`)
      }
    }
  },
  // computed: {
  //   increaseCart() {
  //     cartTotal + this.price
  //   }
  // },
  provide() {
    return {
      products: this.products
    }
  },
  mounted() {
    this.fetchProducts()
  }
}

</script>

<template>
  <Navbar />
  <h1>Products e-shop</h1>
  <RouterView />
  <Home />


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');

* {
  font-size: 62.5%;
  font-family: 'Host Grotesk';
}

body .light {
  background-color: whitesmoke;
  color: #050505;
}

body.dark {
  background-color: #101010;
  color: whitesmoke;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  width: fit-content;
}

h2 {
  font-size: 3.2rem;
  font-weight: 600;
  width: fit-content;
}

p {
  font-size: 2rem;
  font-weight: 300;
}
</style>