import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profileDataLoaded, setProfileDataLoaded] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setFullName(userData.fullName);
          setDateOfBirth(userData.dateOfBirth);
          setGender(userData.gender);
          setContactNumber(userData.contactNumber);
          setEmail(userData.email);
        }
        setProfileDataLoaded(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const profileData = {
          fullName,
          dateOfBirth,
          gender,
          contactNumber,
          email,
        };
        await setDoc(userDocRef, profileData);

        alert("Profile data saved successfully!");
      }
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  };

  if (!profileDataLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">
        <form>
          <div className="my-4">
            <label htmlFor="fullName" className="text-lg">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="my-4">
            <label htmlFor="dateOfBirth" className="text-lg">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="my-4">
            <label htmlFor="gender" className="text-lg">
              Gender:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="my-4">
            <label htmlFor="contactNumber" className="text-lg">
              Contact Number:
            </label>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="my-4">
            <label htmlFor="email" className="text-lg">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleUpdateProfile}
              className="bg-blue-500 hover:bg-blue-600 w-56 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
