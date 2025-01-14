import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPK9pnS4xxc52GuJm0JMG8eglTRl0Fo5Y",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "universityapp-8f815",
  storageBucket: "universityapp-8f815.firebasestorage.app",
  messagingSenderId: "331372808929",
  appId: "1:331372808929:android:504c63f4d37d368a8685a0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
