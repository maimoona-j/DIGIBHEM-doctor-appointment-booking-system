import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "../firebase";
import { useNavigate } from "react-router-dom";



export default function OAuth() {

    const navigate = useNavigate();
    async function onGoogleClick() {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
  
        // check for the user
  
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
  
        if (!docSnap.exists()) {
          await setDoc(docRef, {
            name: user.displayName,
            email: user.email,
            timestamp: serverTimestamp(),
          });
        }
  
        navigate("/home");
      }  catch (error) {
        console.log("Something went wrong with the registration:", error);
        // or handle the error appropriately
      }
    }



  return (
    <div>
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center justify-center  w-96 bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
      >
        Continue with Google
      </button>
    </div>
  );
}
