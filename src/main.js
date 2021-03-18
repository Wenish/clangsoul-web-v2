import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
// import 'firebase/analytics'
// import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config/firebase.config'

import '@/css/app.styl'

window.x = firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true});

createApp(App).use(store).use(router).mount('#app')
