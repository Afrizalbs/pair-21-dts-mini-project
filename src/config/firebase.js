import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyAIjywJR8pz0Hr8g7pdjtF4qQRcTa5nm6g",
    authDomain: "react-mini-project-a8317.firebaseapp.com",
    projectId: "react-mini-project-a8317",
    storageBucket: "react-mini-project-a8317.appspot.com",
    messagingSenderId: "1001590542543",
    appId: "1:1001590542543:web:164ab229d4a163c85a67ba",
    measurementId: "G-TMV2PBC4G0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
