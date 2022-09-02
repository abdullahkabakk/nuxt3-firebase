<template>
  <div>
    <button class="button" @click="signIn" v-if="!firebaseUser">Sign In</button>
    <button class="button" @click="signOut" v-if="firebaseUser">Sign Out</button>
    <div v-if="firebaseUser">
    <pre>
      {{firebaseUser}}
    </pre>
    </div>
    <div v-else>User is signed out</div>
  </div>
</template>

<script setup>
import {createUser, signInUser, signOutUser} from "./composables/useFirebase";
import {useFirebaseUser} from "./composables/useStates";
const credentials = ref();
const firebaseUser = useFirebaseUser()

const signIn = async () => {
  const email = "abdulla@email.com"
  const password = "12345678"
  credentials.value = await signInUser(email, password)
}

const signOut =  async () => {
  credentials.value = await signOutUser();
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