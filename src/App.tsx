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
import { APP_PATH } from "./components/constant";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={APP_PATH.HOME} element={<Home />} />
        <Route path={APP_PATH.ABOUT} element={<AboutUs />} />
        <Route path={APP_PATH.CONTACT} element={<ContactUs />} />
        <Route path={APP_PATH.LOGIN} element={<Login />} />
        <Route path={APP_PATH.PROGRAM} element={<SchoolProgram />} />
        <Route path={APP_PATH.PRICING} element={<Pricing />} />
        <Route path={APP_PATH.REGISTRATION} element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
