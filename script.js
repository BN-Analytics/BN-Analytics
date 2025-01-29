// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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
