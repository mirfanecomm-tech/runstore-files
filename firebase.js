import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBM6w0ed9QU5l6hEWIUSSthakPJKv4GQ3s",
  authDomain: "runstore-786.firebaseapp.com",
  projectId: "runstore-786",
  storageBucket: "runstore-786.firebasestorage.app",
  messagingSenderId: "1079230273221",
  appId: "1:1079230273221:web:5ca4d0f4f50b0dcbfd42ac",
  measurementId: "G-JYMCD5K9N9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);