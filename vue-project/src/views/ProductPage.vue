<script>
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'ProductPage',
    components: {
        ProductList
    },
    data() {
        return {}
    },
    methods: {

    }
}
</script>

<template>
    <div class="search">
        <label class="body1" for="searchInput">Search :</label>
        <input class="body2" type="text" placeholder="Type search term">
    </div>
    <ProductList />
</template>

<style>
.search{
    display: flex;
    gap: 1.6rem;
    align-items: center;
}

input{
    padding: .6rem 2.4rem;
    border: 1px solid black;
    border-radius: 1.6rem;
    background-color: #bbbbbb33;
}
</style>