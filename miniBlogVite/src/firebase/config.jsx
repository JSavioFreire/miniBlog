import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPs--ED753mwRatE9T0149fxD7cBrJqK4",
  authDomain: "miniblog-515c8.firebaseapp.com",
  projectId: "miniblog-515c8",
  storageBucket: "miniblog-515c8.appspot.com",
  messagingSenderId: "319073043584",
  appId: "1:319073043584:web:9d960aef6b6fa1beae1265"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }