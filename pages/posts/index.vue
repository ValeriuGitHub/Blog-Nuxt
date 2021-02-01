<template>
  <div>
    <h1>Posts</h1>
    <ul class="list">
      <div class="wrap-title">
        <h3 v-for="(title, i) in titles" :key="title + i" v-text="title"></h3>
      </div>
      <li
        v-for="(post, i) in posts"
        :key="post + i"
        :class="`item item-${i + 1}`"
      >
        <div class="text">
          <a href="#" @click="openPost(post)" v-text="post.id"></a>
        </div>
        <div class="text" v-text="post.text"></div>
        <div class="text" v-text="post.author"></div>
        <div class="text" v-text="post.date"></div>
      </li>
      <!-- <li
        v-for="(post, i) in posts"
        :key="post + i"
        :class="`item item-${i + 1}`"
      >
        <div class="text" v-text="post.text"></div>
        <div class="text" v-text="post.author"></div>
        <div class="text" v-text="post.date"></div>
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { db } from '@/firebase.ts'

interface Post {
  id: String
  text: String
  date: String
  author: String
}

export default Vue.extend({
  // Returning async / await
  // async asyncData() {
  //   const teasers = [] as Array<Object>

  //   const querySnapshot = await db.collection('posts').get()

  //   if (querySnapshot.size > 0) {
  //     for (const doc of querySnapshot.docs) {
  //       teasers.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       })
  //     }
  //   }

  //   return { teasers }
  // },
  data() {
    return {
      titles: ['ID', 'Text', 'Author', 'Date'],
    }
  },
  async fetch({ store }) {
    if (store.getters['posts/posts'].length === 0) {
      await store.dispatch('posts/fetch')
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/posts']
    },
  },
  methods: {
    openPost(post: Post) {
      this.$router.push(`/posts/${post.id}`)
    },
  },
  // Returning a promise
  // asyncData() {
  //   const teasers: Array<Object> = []

  //   return db
  //     .collection('posts')
  //     .get()
  //     .then((querySnapshot) => {
  //       for (const doc of querySnapshot.docs) {
  //         teasers.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         })
  //       }
  //       return { teasers }
  //     })
  // },
  // // data() {
  //   return {
  //     posts: [] as Array<Object>,
  //   }
  // },
  // Using promises
  //
  // mounted() {
  //   db.collection('posts')
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         this.posts.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         })
  //       })
  //     })
  // },
  // Using async await
  //
  // async mounted() {
  //   const querySnapshot = await db.collection('posts').get()

  //   querySnapshot.forEach((doc) => {
  //     this.posts.push({
  //       id: doc.id,
  //       ...doc.data(),
  //     })
  //   })
  // },
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  padding-top: 40px;
}
li {
  display: flex;
  width: 100%;
  height: 50px;
  background: #ccc;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  margin-bottom: 30px;
}
.text {
  font-size: 14px;
  flex: 1;
}
.wrap-title {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 10px 5px;
  & h3 {
    flex: 1;
  }
}
</style>
