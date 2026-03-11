import { defineStore } from "pinia";

export const useTheme = defineStore('theme', {
    state: () => ({
        theme: 'light'
    }),
    actions: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
            document.body.className = this.theme
        }
    }
})