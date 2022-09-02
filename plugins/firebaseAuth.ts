import { initializeApp } from "@firebase/app";
import {defineNuxtPlugin, useRuntimeConfig} from "#app";

export default defineNuxtPlugin(nuxtApp => {

    const config = useRuntimeConfig();
    console.log(config)
    const firebaseConfig = {
        apiKey: config.public.apiBase,
    };

    const app = initializeApp(firebaseConfig);
    console.log(app)
})