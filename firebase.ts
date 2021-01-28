import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDo4nNLlEYAdXMq_jWiahFONklMEJz0kyk',
  authDomain: 'nuxt-blog-8a30c.firebaseapp.com',
  databaseURL: 'https://nuxt-blog-8a30c-default-rtdb.firebaseio.com',
  projectId: 'nuxt-blog-8a30c',
  storageBucket: 'nuxt-blog-8a30c.appspot.com',
  messagingSenderId: '394070586231',
  appId: '1:394070586231:web:ed0071dc9c7840f508a772',
}

if (!firebase.apps.length) firebase.initializeApp(config)
else firebase.app()

export const auth = firebase.auth()
export const db = firebase.firestore()
