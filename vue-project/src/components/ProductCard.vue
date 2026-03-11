<script>
export default {
    name: 'ProductCard',
    data() {
        return {
            produc
        }
    },
    watch: {
        async fetchAPI() {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()

            const product = data.json()
            try {

            } catch (error) {
                console.error(`Error : ${error}`)
            }
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart')
            },
        }
    }
}
</script>

<template>
    <div class="item-card" @click="productPage">
        <img src={{ product.image }} alt="photography of the product">
        <div class="product-info">
            <p>{{ product.name }}</p>
            <p>{{ product.price }}</p>
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