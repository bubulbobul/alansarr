import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
import Login from "./Login/Login";
import SchoolProgram from "./SchoolProgram/SchoolProgram";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schoolprogram" element={<SchoolProgram />} />
      </Routes>
    </div>
  );
}

export default App;
