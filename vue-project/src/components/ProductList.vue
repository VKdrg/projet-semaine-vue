<script>
import ProductCard from './ProductCard.vue';
export default {
    name : 'ProductList',
    data() {
        return {
            product: {},
            list : {}
        }
    }
}

</script>

<template>
    <div class="listview">
        <h3>view products here</h3>
        <ProductCard />
    </div>
</template>

<style></style>