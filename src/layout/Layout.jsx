import React from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation(); 

  return (
    <div>
      
      {location.pathname !== "/ticket" && <Header />}
      <Outlet />
    </div>
  );
}
