import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
