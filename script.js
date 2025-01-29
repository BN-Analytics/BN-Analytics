// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDly-Y1Ty83HwhjoJsYtEOeb_4cAWUv40",
  authDomain: "website-login-1187c.firebaseapp.com",
  projectId: "website-login-1187c",
  storageBucket: "website-login-1187c.firebasestorage.app",
  messagingSenderId: "345702165724",
  appId: "1:345702165724:web:70ada9bf621f7b09fe5819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Sign in with Google
function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
        document.getElementById("user-info").innerText = `Hello, ${result.user.displayName}`;
    }).catch(error => console.error(error));
}

// Sign out
function signOut() {
    auth.signOut().then(() => {
        document.getElementById("user-info").innerText = "You are logged out.";
    }).catch(error => console.error(error));
}
