import React, { useEffect, useState } from "react";
import DocListing from "../Components/DocListing";
import Header from "../Components/Header";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function DoctorInfo() {
  const [showAll, setShowAll] = useState(true);
  const [showOnline, setShowOnline] = useState(false);
  const [doctorProfile, setDoctorProfile] = useState([]);

  const handleCheckboxChange = (checkboxName) => {
    if (checkboxName === "showAll") {
      setShowAll(true);
      setShowOnline(false);
    } else if (checkboxName === "showOnline") {
      setShowAll(false);
      setShowOnline(true);
    }
  };

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const doctorProfileRef = collection(db, "Doctor Profile");
        const snapshot = await getDocs(doctorProfileRef);

        const doctorData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const doctor = {
            fullName: data.Name,
            time: data.time,
            status: data.status,
            fee: data.fee,
            image: data.image,
          };
          doctorData.push(doctor);
        });

        setDoctorProfile(doctorData);
        console.log("Doctor Profile:", doctorData);
      } catch (error) {
        console.error("Error fetching doctor profile:", error);
      }
    };

    fetchDoctorProfile();
  }, []);

  const filteredDoctorProfile = showOnline
    ? doctorProfile.filter((doctor) => doctor.status.toLowerCase() === "online")
    : showAll
    ? doctorProfile
    : [];

  return (
    <div>
      <Header />
      <div className="text-center">
        <div className="text-black">
          <h4 className="mb-6 text-xl tracking-wider mt-10 font-bold">
            Find and book the best doctors near you
          </h4>

          <div className="flex items-center justify-center flex-wrap mb-2">
            <label className="text-black mr-2 flex items-center">
              <input
                type="checkbox"
                checked={showAll}
                onChange={() => handleCheckboxChange("showAll")}
                className="mr-1"
              />
              All
            </label>
            <label className="text-black flex items-center">
              <input
                type="checkbox"
                checked={showOnline}
                onChange={() => handleCheckboxChange("showOnline")}
                className="mr-1"
              />
              Online
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 mt-2">
        {filteredDoctorProfile.map((doctor) => (
          <DocListing key={doctor.fullName} doctorData={doctor} />
        ))}
      </div>
    </div>
  );
}
