<template>
  <div>
    <h1>Admin Page</h1>
    <a @click="logout">Logout</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/firebase.ts'
import Cookie from 'js-cookie'

export default Vue.extend({
  methods: {
    async logout() {
      await auth.signOut()
      await Cookie.remove('access_token')

      location.href = '/'
    },
  },
})
</script>

<style></style>
