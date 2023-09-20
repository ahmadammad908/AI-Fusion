import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9Bin9nWa2mhy6IRUw2GGLZYtHwfWArYI",
  authDomain: "ai-fusion-50771.firebaseapp.com",
  projectId: "ai-fusion-50771",
  storageBucket: "ai-fusion-50771.appspot.com",
  messagingSenderId: "826841932791",
  appId: "1:826841932791:web:4711e16b0cad460398c4f2",
  measurementId: "G-VR6ZFM4498",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
