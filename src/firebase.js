import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDtxK2EDNnVVjS18Q7fae8c923TKuGy-NA",
  authDomain: "bookstore-dc54f.firebaseapp.com",
  projectId: "bookstore-dc54f",
  storageBucket: "bookstore-dc54f.appspot.com",
  messagingSenderId: "762085103426",
  appId: "1:762085103426:web:3ef082c6d478fca8331adb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
