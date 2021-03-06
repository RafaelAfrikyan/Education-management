import React from "react";
import SingleLecturer from "../../Components/SingleLecturer/SingleLecturer.js";
import { useSelector } from "react-redux";
import "./styles.css";

function Lecturers() {
  const lecturers = useSelector(function (state) {
    return state.lecturers;
  });
  return (
    <div className="lecturers-wrapper">
      <div className="lecturers">
      {lecturers.map((lecturer, i) => (
        <SingleLecturer key={i} lecturer={lecturer} />
      ))}
      </div>
    </div>
    
  );
}

export default Lecturers;

