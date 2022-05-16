import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ACA } from "../state/data";
import { createRooms } from "../state/state";
import Room from "./Hall";
import { useRef, useState } from "react";

export default function Navbar() {
  const roomRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbarWrap">
      <div className="Navbar">
        <Link to="/home">Home</Link>
        <Link to="lectures">Lectures</Link>
        <Link to="course">Course</Link>
        <button onClick={openModal}>Rooms</button>
        <Link to="create">Create Classlist</Link>
      </div>
      <Room isActive={isActive} roomRef={roomRef} />
    </div>
  );
}
