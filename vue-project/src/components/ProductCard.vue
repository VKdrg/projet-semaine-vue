<script>
import ProductPage from '@/views/ProductPage.vue';

export default {
    name: 'ProductCard',
    data() {
        return {
            product
        }
    },
    watch: {},
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
        },
        CardWorking() {
            console.log('this works')
        },
        getProducts() {
            this.products.forEach((product) => {
                console.log(product.title)
            })
        }
    },
    inject: [
        'products'
    ]
}
</script>

<template>
    <div class="item-card" @click="CardWorking">
        <!-- <img src={{ product.image }} alt="photography of the product"> -->
        <div class="product-info">
            <p>{{ product.title }}</p>
            <!-- <p>{{ product.price }}</p> -->
        </div>
        <div class="cart-add">
            <button @click="addToCart">+</button>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: 'Jost';
}

.item-card {
    display: flex;
    flex-direction: column;
    padding: 1.3rem 1.6rem;
}

.product-info {
    flex-direction: row;
}

btn {
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: 16px;
    background-color: #ccc;
}
</style>