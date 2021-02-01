<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent>
      <div class="form-group">
        <input
          id="nuxtfire-email"
          v-model="account.email"
          placeholder="email"
          type="email"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <input
          id="nuxtfire-password"
          v-model="account.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>

      <div class="form-group">
        <input type="submit" class="btn btn-primary" @click="login" />
      </div>
      <div v-if="isError" class="alert alert-danger">
        <p class="mb-0">{{ errMsg }}</p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      account: {
        email: '',
        password: '',
      },
      isError: false,
      errMsg: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('users/login', this.account).catch((error) => {
        this.isError = true
        this.errMsg = error

        setTimeout(() => {
          this.isError = false
        }, 5000)
      })

      this.$router.push('/admin')
    },
  },
})
</script>

<style></style>
