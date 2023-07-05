import React from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      // Initiate the sign-in process with redirect
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log("Something went wrong with the registration:", error);
    }
  }

  React.useEffect(() => {
    // Listen for the redirect result
    const handleRedirectResult = async () => {
      try {
        const auth = getAuth();

        // Complete the sign-in process
        await getRedirectResult(auth);

        // Get the authenticated user
        const user = auth.currentUser;

        if (user) {
          // Check for the user
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
        }
      } catch (error) {
        console.log("Something went wrong with the redirect result:", error);
      }
    };

    handleRedirectResult();
  }, [navigate]);

  return (
    <div>
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center justify-center w-72 md:w-96 bg-red-700 text-white px-4 py-2 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
      >
        Continue with Google
      </button>
    </div>
  );
}
