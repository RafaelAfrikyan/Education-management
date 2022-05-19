import React from "react";
import { useSelector } from "react-redux";
import SingleLecturer from "../../Components/SingleLecturer";
// import { lecturers } from "../state/state";

function Lecturers() {
  const lecturers = useSelector(function(state) {
    return state.lecturers
  })
  console.log(lecturers, 'lecturers');
  return (
    <div className="lecturers-wrapper">
      {lecturers.map((lecturer, i) => (
        <SingleLecturer key={i} lecturer={lecturer} />
      ))}
    </div>
  );
}

export default Lecturers;
