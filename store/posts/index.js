import { db } from '@/firebase.ts'

export const state = () => ({
  posts: [],
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  async fetch({ commit }) {
    const posts = []

    const querySnapshot = await db.collection('posts').get()

    if (querySnapshot.size > 0) {
      for (const doc of querySnapshot.docs) {
        posts.push({
          id: doc.id,
          ...doc.data(),
        })
      }
    }

    commit('setPosts', posts)
  },
}

export const getters = {
  posts: (s) => s.posts,
}
