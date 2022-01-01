import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const NormalLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default NormalLayout;
