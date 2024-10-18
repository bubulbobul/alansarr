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
        <Route path="/alansarr" element={<Home />} />
        <Route path="/alansarr/about" element={<AboutUs />} />
        <Route path="/alansarr/contactus" element={<ContactUs />} />
        <Route path="/alansarr/login" element={<Login />} />
        <Route path="/alansarr/schoolprogram" element={<SchoolProgram />} />
        <Route path="/alansarr/pricing" element={<Pricing />} />
        <Route path="/alansarr/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
