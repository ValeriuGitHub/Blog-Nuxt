<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="navbar-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link to="/posts">Posts</nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link to="/secret">Secret</nuxt-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.navbar {
  &-item {
    margin-right: 20px;
  }
  &-nav {
    flex: 1;
    justify-content: flex-end;
    & a {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
