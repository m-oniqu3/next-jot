// Import the functions you need from the SDKs you need
import { Jot } from "@/types/jot";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

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

export async function fetchUserData(uid: string) {
  const docRef = doc(db, "jots", uid);
  const docSnap = await getDoc(docRef);

  let jots: { [key: string]: Jot } = {};

  if (docSnap.exists()) {
    jots = docSnap.data();
  }

  return jots;
}

export async function getNoteDetails(uid: string, jot_id: string) {
  const data = await fetchUserData(uid);

  return data[jot_id];
}

export function getUserJots(
  uid: string,
  callback: (jots: { [key: string]: Jot }) => void
) {
  const docRef = doc(db, "jots", uid);

  const unsubscribe = onSnapshot(docRef, (docSnap) => {
    let jots: { [key: string]: Jot } = {};

    if (docSnap.exists()) {
      jots = docSnap.data();
    }

    callback(jots);
  });

  // Return a function to unsubscribe from the snapshot listener when needed
  return unsubscribe;
}

export function logUserOut() {
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(() => {
      toast.error("Failed to log out. Please try again.");
    });
}
