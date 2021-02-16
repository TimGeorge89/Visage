import {firebase} from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

//  firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyAZipnK6IbLDRy1ujaf7e9tr-IFkGavl3A",
  authDomain: "bettergram-a5c59.firebaseapp.com",
  projectId: "bettergram-a5c59",
  storageBucket: "bettergram-a5c59.appspot.com",
  messagingSenderId: "361431907880",
  appId: "1:361431907880:web:8fcabde10cb701c31cff1d"
}
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

//export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
