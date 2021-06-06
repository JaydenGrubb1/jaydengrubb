import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
//import * as firebase from 'firebase';
import firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyDzI3bqtoULEfIlwp3hE1I1o1vPA6F6oR4",
    authDomain: "jayden-grubb-home.firebaseapp.com",
    projectId: "jayden-grubb-home",
    storageBucket: "jayden-grubb-home.appspot.com",
    messagingSenderId: "956090215906",
    appId: "1:956090215906:web:f0127874a8f7b75a50ddbb",
    measurementId: "G-4HFQWJM3NH"
};
firebase.initializeApp(config);

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    rootElement
);