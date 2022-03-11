import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECTID ,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET ,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGEINGSENDERID ,
    appId: process.env.REACT_APP_FIREBASE_APPID
};
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;