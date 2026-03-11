<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      users: [],
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
        users = response.json()
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
  // provide() {
  //   users: this.users
  // },
  mounted() {
    this.fetchProducts()
  }
}

</script>

<template>
  <Navbar />
  <h1>Products e-shop</h1>
  <RouterView />


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');

* {
  font-size: 62.5%;
  font-family: 'Host Grotesk';
}

body .light{
  background-color: whitesmoke;
  color: #050505;
}

body.dark{
  background-color: #101010;
  color: whitesmoke;
}
</style>