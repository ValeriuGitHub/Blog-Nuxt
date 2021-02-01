<template>
  <div>
    <h1>
      Post <span style="color: purple">{{ data }}</span>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  validate({ params }) {
    return params.id.length > 0
  },
  async asyncData({ params }) {
    const data: String = await params.id
    return { data }
  },
})
</script>
