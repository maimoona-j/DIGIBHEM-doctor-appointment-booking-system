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

            <button
              className="bg-sky-500  hover:bg-sky-700 w-36 p-3 rounded text-center"
              onClick={handleDoctorClick}
            >
              Discover now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
