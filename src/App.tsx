import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import SchoolProgram from "./components/SchoolProgram/SchoolProgram";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Layout/Navbar";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schoolprogram" element={<SchoolProgram />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
