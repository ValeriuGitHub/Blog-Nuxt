import { auth } from '@/firebase.ts'
import Cookie from 'js-cookie'

import { defineModule } from 'direct-vuex'

interface State {
  user: string | null
}

export const authentication = defineModule({
  namespaced: true,

  state: (): State => {
    return {
      user: null,
    }
  },

  mutations: {
    setUser(state: State, account) {
      state.user = account
    },
  },

  actions: {
    async login({ commit }, account) {
      try {
        // Login the user
        await auth.signInWithEmailAndPassword(account.email, account.password)

        // Get JWT from firebase
        const token = await auth.currentUser!.getIdToken()
        const { email, uid } = auth.currentUser!

        // Set JWT to the cookie
        Cookie.set('access_token', token)
        // Set the user locally
        commit('setUser', { email, uid })
      } catch (error) {
        throw Error
      }
    },
  },
})

// export const state = () => ({
//   user: null,
// })

// export const mutations = {
//   SET_USER: (state, account) => {
//     state.user = account
//   },
// }

// export const actions = {
//   async login({ commit }, account) {
//     try {
//       // Login the user
//       await auth.signInWithEmailAndPassword(account.email, account.password)

//       // Get JWT from firebase
//       const token = await auth.currentUser.getIdToken()
//       const { email, uid } = auth.currentUser

//       // Set JWT to the cookie
//       Cookie.set('access_token', token)
//       // Set the user locally
//       commit('SET_USER', { email, uid })
//     } catch (error) {
//       throw Error
//     }
//   },
// }
