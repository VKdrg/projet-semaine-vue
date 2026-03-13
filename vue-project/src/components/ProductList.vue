<script>
import ProductCard from './ProductCard.vue';
export default {
    name: 'ProductList',
    data() {
        return {
            product: {},
            list: {}
        }
    },
    inject: [
        'products'
    ]
}

</script>

<template>
    <div class="listview">
        <ProductCard>
            <p class="body2">product.title</p>
            <i class="fa-solid fa-basket-shopping"></i>
            <ul>
                <li v-for="product in products"></li>
            </ul>
        </ProductCard>
    </div>
</template>

<style>
i {
    font-size: 2rem;
}
</style>