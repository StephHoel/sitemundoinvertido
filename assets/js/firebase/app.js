// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCyDx0bffH0mMypMwkgLZZmbrTBT1aR2wQ",
   authDomain: "bd-mundoinvertido.firebaseapp.com",
   projectId: "bd-mundoinvertido",
   storageBucket: "bd-mundoinvertido.appspot.com",
   messagingSenderId: "833631936517",
   appId: "1:833631936517:web:1950ce0b0fc31a68a13c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;