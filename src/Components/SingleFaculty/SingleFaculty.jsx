import React from "react";
import "./../../Pages/Faculties/Faculties.css";
import "./style.css"

export default function SingleFaculty({ facultyName, count, props }) {
  return (
    <div className="singleFaculty">
      <h1> {facultyName} </h1>
      <p>Faculty size: {count} </p>
    </div>
  );
}
