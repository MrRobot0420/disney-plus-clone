import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC39AB9vDUptVSkW-M1VE_u8dM7KzdQww8",
    authDomain: "disney-plus-clone-88bb4.firebaseapp.com",
    projectId: "disney-plus-clone-88bb4",
    storageBucket: "disney-plus-clone-88bb4.appspot.com",
    messagingSenderId: "311481662231",
    appId: "1:311481662231:web:738f9011dd93f52e8dd552",
    measurementId: "G-T0SLPJ6DV5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export { auth, provider, storage }
  export default db