
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-t2h51pwjU5Dow8JiB8g6E6k4uFVpg5Q",
  authDomain: "synctex-63584.firebaseapp.com",
  projectId: "synctex-63584",
  storageBucket: "synctex-63584.appspot.com",
  messagingSenderId: "119385464062",
  appId: "1:119385464062:web:d767de039f3ed9f9e499af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app