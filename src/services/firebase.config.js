import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAxrcl7jPe35xJ3djnLu3H7A73ehFspZsA",
  authDomain: "comestate-ce013.firebaseapp.com",
  projectId: "comestate-ce013",
  storageBucket: "comestate-ce013.appspot.com",
  messagingSenderId: "501854560882",
  appId: "1:501854560882:web:4c762f0cea2fc1c21f98eb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);