import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c7269.firebaseapp.com",
  projectId: "reactchat-c7269",
  storageBucket: "reactchat-c7269.appspot.com",
  messagingSenderId: "414651724617",
  appId: "1:414651724617:web:4260b445889c3157e26098",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()