import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ACA } from "../../state/data";
import { createRooms } from "../../state/state";
import Room from "../Hall/Hall";
import { useRef, useState } from "react";
import "./style.css";



export default function Navbar({isActive, setIsActive}) {
  const roomRef = useRef(null);

  const openModal = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbarWrap">
      <div className="Navbar">
        <Link to="/home">Home</Link>
        <Link to="lectures">Lectures</Link>
        <Link to="course">Course</Link>
        <p onClick={openModal}>Rooms</p>
        <Link to="create">Create Classlist</Link>
      </div>
      <Room isActive={isActive} roomRef={roomRef} setIsActive={setIsActive} />
    </div>
  );
}
