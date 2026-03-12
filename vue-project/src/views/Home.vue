<script>
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'Home',
    components: {
        ProductList
    },
    methods: {
        ApiFetch() {
            this.products.forEach((product) => {
                console.log(product.title);

            })
        }
    },
    // data(){
    //     // idfk
    // },
    inject: [
        'products'
    ]
}

</script>

<template>
    <!-- navbar -->

    <h2>Home Page</h2>

    <ProductList />

</template>

<style></style>