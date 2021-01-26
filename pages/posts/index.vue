<template>
  <div>
    <h1 @click="readFromFirestore()">Users</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    async readFromFirestore() {
      const messageRef = this.$fire.firestore
      // .collection('message')
      // .doc('message')
      await console.log(messageRef)
      return null
      // try {
      //   const snapshot = await messageRef.get()
      //   const doc = snapshot.data()
      //   if (!doc) {
      //     alert('Document does not exist.')
      //     return
      //   }
      //   alert(doc.message)
      // } catch (e) {
      //   alert(e)
      // }
    },
  },
})
</script>

<style></style>
