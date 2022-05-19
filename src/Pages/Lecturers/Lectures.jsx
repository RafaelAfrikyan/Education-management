import React from "react";
<<<<<<< HEAD:src/Components/Lectures.jsx
import { useSelector } from "react-redux";
import SingleLecturer from "../Components/SingleLecturer";
// import { lecturers } from "../state/state";
=======
import SingleLecturer from "../../Components/SingleLecturer.js";
import { lecturers } from "../../state/state";
>>>>>>> 46949b7d7e1f32b432ade8ea5c2391b0393fd98c:src/Pages/Lecturers/Lectures.jsx

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
