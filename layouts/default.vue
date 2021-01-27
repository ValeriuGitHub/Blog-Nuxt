<template>
  <div>
    <Navbar />

    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar,
  },
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.container {
  padding-top: 40px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
