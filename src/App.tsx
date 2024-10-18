import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import SchoolProgram from "./components/Pages/SchoolProgram/SchoolProgram";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Navbar from "./components/Layout/Navbar";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Layout/Footer";
import Pricing from "./components/Pages/Pricing/Pricing";

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
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
