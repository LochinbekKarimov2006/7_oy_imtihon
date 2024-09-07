import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpjAtsfAMVghYbkqYV9mdM-PSnLZDGGQY",
    authDomain: "sigin-6783c.firebaseapp.com",
    projectId: "sigin-6783c",
    storageBucket: "sigin-6783c.appspot.com",
    messagingSenderId: "939181457236",
    appId: "1:939181457236:web:4abeaf5d25144b31b852c1",
    measurementId: "G-5DFGX02C9N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;
