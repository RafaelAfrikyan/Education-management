import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../DrawTable/DrawTable.js";
import "./FacultiesTimetable.css"

import { useSelector } from "react-redux";

export default function FacultiesTimetable() {
  const faculties = useSelector((state) => {
    return state.faculties;
  });
  const { faculty } = useParams();
  console.log("factules", faculties);
  let facultyID = Object.keys(faculties).filter(
    (singleFaculty) => singleFaculty == faculty
  );
  console.log("faculty", faculty);
  const studentsArray = Object.values(faculties[faculty].students);

  return (
    <div className="faculty-timetable">
      <h1>{faculty} Timetable</h1>
      <h2>Students</h2>

      <div className="students-list-in-faculty">
        {studentsArray.map((studentObj, index) => (
          <div key={Math.random()} className="student-name-in-faculty">
          {} {index + 1}. {studentObj.name} {studentObj.surname} {}
          </div>
        ))}
      </div>

      <h3>Faculty size: {faculties[faculty].count}</h3>
      <DrawTable param={faculties[facultyID[0]].timeTable} />
    </div>
  );
}
