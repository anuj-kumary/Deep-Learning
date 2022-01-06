import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
    apiKey: "AIzaSyAAhe4yXuqaq4cFKUmwhJK85nomqCWgJug",
    authDomain: "deaf-auth.firebaseapp.com",
    projectId: "deaf-auth",
    storageBucket: "deaf-auth.appspot.com",
    messagingSenderId: "690652968154",
    appId: "1:690652968154:web:a21c4fc1dca3fe6e1461e3"
  };
  
  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);