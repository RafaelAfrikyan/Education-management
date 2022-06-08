import React from "react";
import SingleLecturer from "../../Components/SingleLecturer/SingleLecturer.js";

import { useSelector } from "react-redux";

function Lecturers() {
  const lecturers = useSelector(function (state) {
    return state.lecturers;
  });

  return (
    <div className="lecturers-wrapper">
      {lecturers.map((lecturer, i) => (
        <SingleLecturer key={i} lecturer={lecturer} />
      ))}
    </div>
  );
}

export default Lecturers;
