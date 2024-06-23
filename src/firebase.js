import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDvn66MhzuzG79qowv0xDf5ywAaiLnRPUs",
    authDomain: "netflix-clone-ffb64.firebaseapp.com",
    projectId: "netflix-clone-ffb64",
    storageBucket: "netflix-clone-ffb64.appspot.com",
    messagingSenderId: "171718957177",
    appId: "1:171718957177:web:7408ae874d95c550849ca8"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

export { auth };
export default db;