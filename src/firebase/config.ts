import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyARktqEmQavomv3deMpl6BjLTsl_jlmM6o",
  authDomain: "exam-certification-site.firebaseapp.com",
  projectId: "exam-certification-site",
  storageBucket: "exam-certification-site.appspot.com",
  messagingSenderId: "351930416792",
  appId: "1:351930416792:web:3e06e07cec55122c685aed",
  measurementId: "G-HZ62455V5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }