import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import MobileMenu from "../components/layout/MobileMenu";
import Navbar from "../components/layout/Navbar";

const NormalLayout = () => {
  return (
    <div className="overflow-hidden">
      <MobileMenu />
      <Navbar />
      <div className="flex">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default NormalLayout;
