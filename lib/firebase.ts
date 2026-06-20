import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
 apiKey: "AIzaSyDBwiM_edZ6TY5bgnMZB0D-LM_7lretWvo",
            authDomain: "teknomarket-1.firebaseapp.com",
            projectId: "teknomarket-1",
            storageBucket: "teknomarket-1.firebasestorage.app",
            messagingSenderId: "391354789892",
            appId: "1:391354789892:web:d82f37e93da39d121b0551"
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
