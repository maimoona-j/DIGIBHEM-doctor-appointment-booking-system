import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Welcome from "./Pages/Welcome";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword"; 
import Home from "./Pages/Home"; // Import the ForgotPassword component
import DoctorInfo from "./Pages/DoctorInfo";
import MyAccount from "./Pages/MyAccount";
import ConfirmBooking from "./Pages/ConfirmBooking";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />  
          <Route path="/home" element={<Home />} />  
          <Route path="/doctor" element={<DoctorInfo />} />  
          <Route path="/profile" element={<MyAccount />} />  
          <Route path="/confirmbooking" element={<ConfirmBooking />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

