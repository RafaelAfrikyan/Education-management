import React from "react";
import SingleLecturer from "../../Components/SingleLecturer/SingleLecturer.js";
<<<<<<< HEAD

=======
>>>>>>> develop
import { useSelector } from "react-redux";
import "./styles.css";

function Lecturers() {
  const lecturers = useSelector(function (state) {
    return state.lecturers;
  });
<<<<<<< HEAD

=======
>>>>>>> develop
  return (
    <div className="lecturers-wrapper">
      {lecturers.map((lecturer, i) => (
        <SingleLecturer key={i} lecturer={lecturer} />
      ))}
    </div>
    
  );
}

export default Lecturers;

