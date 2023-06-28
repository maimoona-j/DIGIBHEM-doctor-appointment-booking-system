import bg2 from "../images/bg2.jpg";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate("/doctor");
  };

  return (
    <div>
      <div
        className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center mb-36">
          <div className="text-white">
            <h1 className="mb-6 text-3xl tracking-wider font-bold">
              Find and book the best doctors near you
            </h1>

            <select className="w-96 h-12 rounded-lg px-4 text-black border border-black bg-white mb-4">
              <option value="">Select Location</option>
              <option value="US">US</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Russia">Russia</option>
            </select>

            <select className="w-96 h-12 rounded-lg px-4 border text-black border-black bg-white mb-4">
              <option value="">Select Speciality</option>
              <option value="gynecologist">Gynecologist</option>
              <option value="skin_specialist">Skin Specialist</option>
              <option value="child_specialist">Child Specialist</option>
              <option value="neurologist">Neurologist</option>
              <option value="gastroenterologist">Gastroenterologist</option>
              <option value="heart_specialist">Heart Specialist</option>
            </select>

            <button
              className="bg-sky-500 w-36 p-3 rounded text-center"
              onClick={handleDoctorClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
