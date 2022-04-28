import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA_HoaLxwRj_FeTkoJp4j6OR1If-5UEWyU",
  authDomain: "vue-dojo-blog-ed8b2.firebaseapp.com",
  projectId: "vue-dojo-blog-ed8b2",
  storageBucket: "vue-dojo-blog-ed8b2.appspot.com",
  messagingSenderId: "1052911837647",
  appId: "1:1052911837647:web:b5e9c9c015f1f02d5b72ba"
}

// init firebase
const app = firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
// init firestore
const projectFirestore = firebase.firestore()
// timestamp field value
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { app, projectFirestore, projectAuth, timestamp }