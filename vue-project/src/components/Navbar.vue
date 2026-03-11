<script>
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
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        <button @click="toggleDarkTheme">Change Theme</button>
    </nav>
</template>

<style>
nav {
    font-size: 2rem;
    padding: 1.6rem 3.2rem;
    background-color: #202020;
}
</style>