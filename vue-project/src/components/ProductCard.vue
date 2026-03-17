<script>
export default {
    name: 'ProductCard',
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
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
    <button @click="getProducts">waw damn</button>
    <ul>
        <li v-for="product in products" :key="product.id">
            <p>{{ product.title }}</p>
        </li>
    </ul>
</template>

<style>
button{
    font-size: 2rem;
}
</style>