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
    <div className="Navbar">
      <Link to="/home">Home</Link>
      <Link to="lectures">Lectures</Link>
      <Link to="course">Faculties</Link>
      <Link to="hall">Study hall</Link>
      <Link to="create">Create Classlist</Link>
    </div>
  );
}
