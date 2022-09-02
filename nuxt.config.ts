import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        apiSecret: process.env.FIREBASE_API_KEY,
        public: {
            apiBase: process.env.FIREBASE_API_KEY
        }
    }
})
