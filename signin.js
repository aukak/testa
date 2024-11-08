// Firebase config (replace with your Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyDLuFhE0JRvvztodyDmRlPKUYJH2KaOmIQ",
    authDomain: "truffled-games.firebaseapp.com",
    projectId: "truffled-games",
    storageBucket: "truffled-games.firebasestorage.app",
    messagingSenderId: "366325351196",
    appId: "1:366325351196:web:3062111e103afda2acb0d9",
    measurementId: "G-WLTG1S4STB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Sign in with Google on button click
document.getElementById('google-sign-in').addEventListener('click', () => {
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log('User signed in:', user);
            // Display user profile info
            document.getElementById('profile-name').textContent = user.displayName;
            document.getElementById('profile-pic').src = user.photoURL;
        })
        .catch((error) => {
            console.error('Error during Google sign-in:', error);
        });
});
