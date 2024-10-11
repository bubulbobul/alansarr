import React from "react";
import AuthNavBar from "./AuthNavBar";
import GuestNavBar from "./GuestNavBar";

const Navbar = () => {
  const isUserLoggedIn = false;
  return isUserLoggedIn ? <AuthNavBar /> : <GuestNavBar />;
};

export default Navbar;
