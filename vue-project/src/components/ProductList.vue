<script>
import ProductCard from './ProductCard.vue';
export default {
    name: 'ProductList',
    components: {
        ProductCard
    },
    inject: [
        'products'
    ]
}

</script>

<template>
    <div class="listview">
        <!-- <ul>
            <li v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </li>
        </ul> -->
        <ProductCard />
    </div>
</template>

<style>
</style>