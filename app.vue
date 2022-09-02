<template>
  <div>
    <button class="button" @click="signIn">Sign In</button>
    <button class="button" @click="signOut">Sign Out</button>
  </div>
</template>

<script setup>
import {createUser, signInUser, signOutUser} from "./composables/useFirebase";

const signIn = async () => {
  const email = "abdulla@email.com"
  const password = "12345678"
  const credentials = await signInUser(email, password)
  console.log(credentials)
}

const signOut =  async () => {
  const result = await signOutUser();
  console.log("result:", result)
}

onMounted(async () => {


  // const email = "abdulla@email.com"
  // const password = "12345678"
  // const credentials = await createUser(email, password)
  // console.log(credentials)

})
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>