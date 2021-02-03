import Vue from 'vue'
import Vuex from 'vuex'
import { createDirectStore } from 'direct-vuex'
import JWTDecode from 'jwt-decode'

import { posts } from './posts/index'
import { authentication } from './auth/index'
const cookieparser = require('cookieparser')

Vue.use(Vuex)

interface Decoded {
  email: string
  // eslint-disable-next-line camelcase
  user_id: string
}

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
} = createDirectStore({
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (process.server && process.static) return
      if (!req.headers.cookie) return

      const parsed = cookieparser.parse(req.headers.cookie)
      const accessTokenCookie = parsed.access_token

      if (!accessTokenCookie) return

      const decoded: Decoded = JWTDecode(accessTokenCookie)

      if (decoded) {
        commit('auth/setUser', {
          uid: decoded.user_id,
          email: decoded.email,
        })
      }
    },
  },
  modules: {
    posts,
    authentication,
  },
})

function initStore() {
  return store.original
}

export const storeOriginal = store.original

export default initStore

export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
  store,
}

export type AppStore = typeof store

// export const actions = {
//   nuxtServerInit({ commit }, { req }) {
//     if (process.server && process.static) return
//     if (!req.headers.cookie) return

//     const parsed = cookieparser.parse(req.headers.cookie)
//     const accessTokenCookie = parsed.access_token

//     if (!accessTokenCookie) return

//     const decoded = JWTDecode(accessTokenCookie)

//     if (decoded) {
//       commit('users/SET_USER', {
//         uid: decoded.user_id,
//         email: decoded.email,
//       })
//     }
//   },
// }
