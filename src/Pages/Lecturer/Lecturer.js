import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../../Components/DrawTable/DrawTable.js";
import LecturerInfo from "../../Components/LecturerInfo/LecturerInfo.js";
import LecturersTimetable from "../../Components/LecturersTimetable/LecturersTimetable.js";

import { useSelector } from "react-redux";

function Lecturer() {
  const lecturers = useSelector((state) => {
    return state.lecturers;
  });
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
