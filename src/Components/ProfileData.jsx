import React from "react";

export default function ProfileData({
  fullName,
  dateOfBirth,
  gender,
  contactNumber,
  email,
}) {
  return (
    <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Profile Details</h2>
      {/* Display profile details */}
      <p>Full Name: {fullName}</p>
      <p>Date of Birth: {dateOfBirth}</p>
      <p>Gender: {gender}</p>
      <p>Contact Number: {contactNumber}</p>
      <p>Email Address: {email}</p>
    </div>
  );
}
