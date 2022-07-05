import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBOXRP0KXsGh99gMxUNhrB0a5E3vuWpSlc",
  authDomain: "my-olx-clone-iitg.firebaseapp.com",
  projectId: "my-olx-clone-iitg",
  storageBucket: "my-olx-clone-iitg.appspot.com",
  messagingSenderId: "598673038380",
  appId: "1:598673038380:web:547aa2d8b6c08e398f8589",
  measurementId: "G-TE74P2JRE8"
};;

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export