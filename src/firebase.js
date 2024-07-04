import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArtDJVCk0iyhsHMNAdnliKvuvumMWMj-A",
  authDomain: "reporting6363.firebaseapp.com",
  databaseURL: "https://reporting6363-default-rtdb.firebaseio.com",
  projectId: "reporting6363",
  storageBucket: "reporting6363.appspot.com",
  messagingSenderId: "1092389012587",
  appId: "1:1092389012587:web:2fd7d8ead04acdc3de1d2e",
  measurementId: "G-9XBPPFG5C3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);