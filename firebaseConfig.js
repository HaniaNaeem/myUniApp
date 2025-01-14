import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';  // Import Firestore if you're using it

// Your web app's Firebase configuration (found in Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBPK9pnS4xxc52GuJm0JMG8eglTRl0Fo5Y",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "universityapp-8f815",
  storageBucket: "niversityapp-8f815.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:331372808929:android:504c63f4d37d368a8685a0",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();  // if already initialized
}

export { firebase };
