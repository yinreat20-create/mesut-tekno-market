import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
apiKey : "AIzaSyC_Y6kRF8CZdKJwihkEaSwy1nHBFJb7OUo" , 
  authDomain : "mesut-tekno-market.firebaseapp.com" , 
  projectId : "mesut-tekno-market" , 
  storageBucket : "mesut-tekno-market.firebasestorage.app" , 
  messagingSenderId : "242014287881" , 
  appId : "1:242014287881:web:6200ff1d6497d2e36b60d8" , 
  ölçümId : "G-G8K16D1ZCQ" 
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Secondary app instance used for admin user creation (avoids switching auth session)
const secondaryApp =
  getApps().find((a) => a.name === 'secondary') ??
  initializeApp(firebaseConfig, 'secondary');

export const auth = getAuth(app);
export const secondaryAuth = getAuth(secondaryApp);
export const db = getFirestore(app);
export default app;
