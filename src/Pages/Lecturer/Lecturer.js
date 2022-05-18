import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../../Components/DrawTable.js";
import LecturerInfo from "../../Components/LecturerInfo.js";
import LecturersTimetable from "../../Components/LecturersTimetable.js";
import { lecturers } from "../../state/state.js";

function Lecturer() {
  const { lecturerName } = useParams();
  const filtered = lecturers.filter(
    (lecturer, i) => `${lecturer.name}${lecturer.surname}` == lecturerName
  );
  const { name, surname, speciality } = filtered[0];
  return (
    <div>
      <LecturerInfo />
      <DrawTable param={filtered[0].timeTable} />
    </div>
  );
}

export default Lecturer;
