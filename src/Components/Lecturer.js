import React from "react";
import { useParams } from "react-router-dom";
import DrowTable from "./DrowTable.js";
import LecturerInfo from "./LecturerInfo.js";
import LecturersTimetable from "./LecturersTimetable.js";
import { lecturers } from "../state/state.js";

function Lecturer() {
  const { lecturerName } = useParams();
  //    console.log(lecturers);
  const filtered = lecturers.filter(
    (lecturer, i) => `${lecturer.name}${lecturer.surname}` == lecturerName
  );
  console.log(filtered);
  return (
    <div>
      <LecturerInfo />
      <DrowTable param={filtered[0].timeTable} />
    </div>
  );
}

export default Lecturer;
