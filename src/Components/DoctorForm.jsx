import React from 'react'

export default function DoctorForm() {
  return (
    <div className=''>
          <h2 className="text-3xl font-bold text-center mt-6 ">Register as a Doctor</h2>
        <form className='w-[550px] p-4 mt-5 border border-blue-800 ml-[500px]'>
          {" "}
          <div className="my-4 w-96 ml-16">
            {" "}
            <label htmlFor="fullName" className="text-lg">
              Full Name*{" "}
            </label>{" "}
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
               
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="my-4 w-96 ml-16">
            {" "}
            <label htmlFor="gender" className="text-lg">
             Medical Licence*{" "}
            </label>{" "}
            <input
              type="number"
              id="dateOfBirth"
              placeholder=" Medical licence"
            
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="my-4 w-96 ml-16">
            {" "}
            <label htmlFor="gender" className="text-lg">
              Gender*{" "}
            </label>{" "}
            <select
              id="gender"
         
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value=""  >Select Gender</option>{" "}
              <option value="male">Male</option>{" "}
              <option value="female">Female</option>{" "}
              <option value="other">Other</option>{" "}
            </select>
          </div>
          <div className="my-4 w-96 ml-16">
            {" "}
            <label htmlFor="contactNumber" className="text-lg">
              Contact Number*{" "}
            </label>{" "}
            <input
              type="tel"
              id="contactNumber"
              placeholder="Contact Number"
             
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="my-4 w-96 ml-16">
            {" "}
            <label htmlFor="email" className="text-lg">
              Email Address*{" "}
            </label>{" "}
            <input
              type="email"
              id="email"
              placeholder="Email Address"
          
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="my-4 w-96 ml-16">
            {" "}
            <label htmlFor="email" className="text-lg">
            Fee*{" "}
            </label>{" "}
            <input
              type="number"
              id="email"
              placeholder="Enter your Fee"
          
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="my-4 w-96 ml-16">
            {" "}
            <label htmlFor="email" className="text-lg">
             Medical speciality*{" "}
            </label>{" "}
            <select
              id="gender"
         
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value=""  >Select Gender</option>{" "}
              <option value="male">Cardiologist</option>{" "}
              <option value="female">Dermatologist</option>{" "}
              <option value="other">Gynacologist</option>{" "}
            </select>
          </div>
        
          <div className="mb-6 w-96 ml-16">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
        Choose profile image
          </p>
          <input
            type="file"
            id="images"
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
         
       
          <button
            type="submit"
      
            className="bg-blue-500 hover:bg-blue-600 w-36    text-white font-bold py-2 px-4 rounded md:ml-56 mt-4 md:mt-0"
          >
           Register{" "}
          </button>{" "}
        </form>
    </div>
  )
}
