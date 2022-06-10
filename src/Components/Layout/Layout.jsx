import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./style.css"

export default function Layout({isActive, setIsActive}) {
  return (
    <>
      <Navbar isActive={isActive} setIsActive={setIsActive}/>
      <div className="outletWrapper">
      <Outlet />
      </div>
    </>
  );
}
