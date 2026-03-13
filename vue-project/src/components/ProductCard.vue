<script>
export default {
    name: 'ProductCard',
    data() {
        return {
            products
        }
    },
    // watch: {},
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
    <p>waw damn</p>
    <!-- <div class="item-card" @click="CardWorking">
        <img src={{ product.image }} alt="photography of the product"> 
        <div class="product-info">
            <p>{{ product.title }}</p>
            <p>{{ product.price }}</p>
        </div>
        <div class="cart-add">
            <button @click="addToCart">+</button>
        </div>
    </div> -->
</template>

<style>

</style>