<script>
import ProductCard from '@/components/ProductCard.vue';
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'Home',
    components: {
        ProductList,
        ProductCard
    },
    methods: {
        ApiFetch() {
            this.products.forEach((product) => {
                console.log(product.title);

            })
        }
    },
    data() {
        return {

        }
    },
    inject: [
        'products'
    ]
}

</script>

<template>
    <h1>New Collection !</h1>
    <p class="intro">Discover our new collection of (not so) ethically sourced and very random items, to serve you and those around you in your everyday and on the special occasions of your horribly basic and mundane life.</p>

    <ProductList />

</template>

<style>
.intro{
    width: 50%;
}
</style>