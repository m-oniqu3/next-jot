// Import the functions you need from the SDKs you need
import { Jot } from "@/types/jot";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export function createNewUser(name: string, email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => credentials.user.uid)
    .then((uid) => storeUserInDb(uid, name, email))
    .catch((error) => {
      console.log(error);
    });
}

export async function storeUserInDb(uid: string, name: string, email: string) {
  await setDoc(doc(db, "users", uid), { name, email });
}

export async function createJot(uid: string, data: Jot) {
  const ref = doc(db, "jots", uid);
  await setDoc(ref, { [data.id]: { ...data } }, { merge: true });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user.uid));
  } else {
    localStorage.removeItem("user");
  }
});

async function findUserById(uid: string) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().name;
  }
}

export async function getUserName() {
  const user = JSON.parse(localStorage.getItem("user") || "");

  let uid = "";
  if (user) {
    uid = await findUserById(user);
  }

  return uid;
}
