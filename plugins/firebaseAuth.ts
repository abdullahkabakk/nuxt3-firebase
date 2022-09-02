import { initializeApp } from "@firebase/app";
import {defineNuxtPlugin, useRuntimeConfig} from "#app";
import {initUser} from "~/composables/useFirebase";

export default defineNuxtPlugin(nuxtApp => {

    const config = useRuntimeConfig();
    console.log(config)
    const firebaseConfig = {
        apiKey: config.public.apiBase,
    };

    const app = initializeApp(firebaseConfig);

    initUser();
})