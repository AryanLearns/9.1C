import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA1yeeY_rZRn9CmytvVZG5MHub9jFIy1Nk",
  authDomain: "fir-task-9a0ba.firebaseapp.com",
  projectId: "fir-task-9a0ba",
  storageBucket: "fir-task-9a0ba.appspot.com",
  messagingSenderId: "782672149374",
  appId: "1:782672149374:web:61b6b25b8799ef6367d12f",
  measurementId: "G-JEKV5PJRKN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

