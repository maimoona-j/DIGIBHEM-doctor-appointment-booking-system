import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


// pages
import Welcome from "./Pages/Welcome";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import DoctorInfo from "./Pages/DoctorInfo";
import MyAccount from "./Pages/MyAccount";
import RegisterDoctor from "./Pages/RegisterDoctor";
import Booked from "./Pages/Booked";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/home" element={<Home />} />
          <Route path="/doctor" element={<DoctorInfo />} />
          <Route path="/registerdoctor" element={<RegisterDoctor />} />
          <Route path="/booked" element={<Booked />} />
          <Route path="/profile" element={<MyAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


 