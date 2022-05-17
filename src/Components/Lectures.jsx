import React from "react";
import SingleLecturer from "../Components/SingleLecturer";
import { lecturers } from "../state/state";

function Lecturers() {
  return (
    <div className="lecturers-wrapper">
      {lecturers.map((lecturer, i) => (
        <SingleLecturer key={i} lecturer={lecturer} />
      ))}
    </div>
  );
}

export default Lecturers;
