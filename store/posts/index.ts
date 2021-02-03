import { db } from '@/firebase.ts'
import { defineModule } from 'direct-vuex'

interface State {
  posts: Array<Object>
}

export const posts = defineModule({
  namespaced: true,

  state: (): State => {
    return {
      posts: [],
    }
  },

  mutations: {
    setPosts(state: State, posts: Array<Object>) {
      state.posts = posts
    },
  },

  actions: {
    async fetch({ commit }) {
      const posts = [] as Array<Object>

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
  },

  getters: {
    posts: (s: State) => s.posts,
  },
})

// export const state = () => ({
//   posts: [],
// })

// export const mutations = {
//   setPosts(state, posts) {
//     state.posts = posts
//   },
// }

// export const actions = {
//   async fetch({ commit }) {
//     const posts = []

//     const querySnapshot = await db.collection('posts').get()

//     if (querySnapshot.size > 0) {
//       for (const doc of querySnapshot.docs) {
//         posts.push({
//           id: doc.id,
//           ...doc.data(),
//         })
//       }
//     }

//     commit('setPosts', posts)
//   },
// }

// export const getters = {
//   posts: (s) => s.posts,
// }
