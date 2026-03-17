<script>
import { useTheme } from '@/stores/themes';

export default {
    name: 'Navbar',
    methods: {
        toggleDarkTheme() {
            const themeStore = useTheme()
            themeStore.toggleTheme()
        }
    }
}
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product">Products</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        <i @click="toggleDarkTheme" class="fa-solid fa-circle-half-stroke"></i>
    </nav>
</template>

<style>
nav {
    font-size: 3.2rem;
    padding: 1.6rem 8rem;
    background-color: #202020;
    display: flex;
    align-items: center;
    gap: 3.2rem;
    justify-content: right;

    a {
        color: whitesmoke;
        text-decoration: none;
        font-weight: 400;
    }

    a:hover{
        text-decoration: underline;
    }

    i {
        color: whitesmoke;
        cursor: pointer;
    }
}
</style>