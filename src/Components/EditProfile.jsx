// import React, { useState } from 'react';

// export default function EditProfile() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [gender, setGender] = useState('');
//   const [medicalCondition, setMedicalCondition] = useState('');
//   const [medication, setMedication] = useState('');
//   const [allergies, setAllergies] = useState('');

//   const handleSave = (e) => {
//     e.preventDefault();
   
//     console.log('Profile data saved!');
//   };

//   const handleEdit = (e, field) => {
//     e.preventDefault();
//     switch (field) {
//       case 'name':
//         setName('');
//         break;
//       case 'email':
//         setEmail('');
//         break;
//       case 'contactNumber':
//         setContactNumber('');
//         break;
//       case 'gender':
//         setGender('');
//         break;
//       case 'medicalCondition':
//         setMedicalCondition('');
//         break;
//       case 'medication':
//         setMedication('');
//         break;
//       case 'allergies':
//         setAllergies('');
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
//       <form onSubmit={handleSave}>
//         <div className="mb-4">
//           <label htmlFor="name" className="text-lg">
//             Name:
//           </label>
//           <div className="flex items-center">
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//             <button
//               type="button"
//               onClick={(e) => handleEdit(e, 'name')}
//               className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="text-lg">
//             Email:
//           </label>
//           <div className="flex items-center">
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//             <button
//               type="button"
//               onClick={(e) => handleEdit(e, 'email')}
//               className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="contactNumber" className="text-lg">
//             Contact Number:
//           </label>
//           <div className="flex items-center">
//             <input
//               type="tel"
//               id="contactNumber"
//               value={contactNumber}
//               onChange={(e) => setContactNumber(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//             <button
//               type="button"
//               onClick={(e) => handleEdit(e, 'contactNumber')}
//               className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="gender" className="text-lg">
//             Gender:
//           </label>
//           <div className="flex items-center">
//             <select
//               id="gender"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//             <button
//               type="button"
//               onClick={(e) => handleEdit(e, 'gender')}
//               className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="medicalCondition" className="text-lg">
//             Medical Condition:
//           </label>
//           <div className="flex items-center">
//             <textarea
//               id="medicalCondition"
//               value={medicalCondition}
//               onChange={(e) => setMedicalCondition(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             ></textarea>
//             <button
//               type="button"
//               onClick={(e) => handleEdit(e, 'medicalCondition')}
//               className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="medication" className="text-lg">
//             Medication:
//           </label>
//           <div className="flex items-center">
//             <textarea
//               id="medication"
//               value={medication}
//               onChange={(e) => setMedication(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             ></textarea>
//             <button
//               type="button"
//               onClick={(e) => handleEdit(e, 'medication')}
//               className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="allergies" className="text-lg">
//             Allergies:
//           </label>
//           <div className="flex items-center">
//             <textarea
//               id="allergies"
//               value={allergies}
//               onChange={(e) => setAllergies(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             ></textarea>
//             <button
//               type="button"
//               onClick={(e) => handleEdit(e, 'allergies')}
//               className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }




import React from "react";

export default function EditProfile({
  fullName,
  dateOfBirth,
  gender,
  contactNumber,
  email,
  medicalCondition,
  medication,
  allergies,
  onFullNameChange,
  onDateOfBirthChange,
  onGenderChange,
  onContactNumberChange,
  onEmailChange,
  onMedicalConditionChange,
  onMedicationChange,
  onAllergiesChange,
}) {
  const handleFullNameChange = (e) => {
    onFullNameChange(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    onDateOfBirthChange(e.target.value);
  };

  const handleGenderChange = (e) => {
    onGenderChange(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    onContactNumberChange(e.target.value);
  };

  const handleEmailChange = (e) => {
    onEmailChange(e.target.value);
  };

  const handleMedicalConditionChange = (e) => {
    onMedicalConditionChange(e.target.value);
  };

  const handleMedicationChange = (e) => {
    onMedicationChange(e.target.value);
  };

  const handleAllergiesChange = (e) => {
    onAllergiesChange(e.target.value);
  };

  return (
    <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">
      <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
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
            onChange={handleFullNameChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="my-4">
          <label htmlFor="dateOfBirth" className="text-lg">
            Date of Birth:
          </label>
          <input
            type="text"
            id="dateOfBirth"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="my-4">
          <label htmlFor="gender" className="text-lg">
            Gender:
          </label>
          <input
            type="text"
            id="gender"
            placeholder="Gender"
            value={gender}
            onChange={handleGenderChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="my-4">
          <label htmlFor="contactNumber" className="text-lg">
            Contact Number:
          </label>
          <input
            type="text"
            id="contactNumber"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={handleContactNumberChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="my-4">
          <label htmlFor="email" className="text-lg">
            Email:
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="my-4">
          <label htmlFor="medicalCondition" className="text-lg">
            Medical Condition:
          </label>
          <input
            type="text"
            id="medicalCondition"
            placeholder="Medical Condition"
            value={medicalCondition}
            onChange={handleMedicalConditionChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="my-4">
          <label htmlFor="medication" className="text-lg">
            Medication:
          </label>
          <input
            type="text"
            id="medication"
            placeholder="Medication"
            value={medication}
            onChange={handleMedicationChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="my-4">
          <label htmlFor="allergies" className="text-lg">
            Allergies:
          </label>
          <input
            type="text"
            id="allergies"
            placeholder="Allergies"
            value={allergies}
            onChange={handleAllergiesChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
