<script>
import ProductList from '@/components/ProductList.vue';

</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
    </nav>
    <h1>Site e-commerce</h1>
    <ProductList />

</template>

<style></style>