import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../../Components/DrawTable/DrawTable.js";
import LecturerInfo from "../../Components/LecturerInfo/LecturerInfo.js";
import LecturersTimetable from "../../Components/LecturersTimetable/LecturersTimetable.js";
import { lecturers } from "../../state/state.js";
import "./Lecturer.css";

function Lecturer() {
  const { lecturerName } = useParams();
  const filtered = lecturers.filter(
    (lecturer, i) => `${lecturer.name}${lecturer.surname}` == lecturerName
  );
  const { name, surname, speciality } = filtered[0];
  return (
    <div className="singleLecturer">
      <div className="lecturer-info">
        <img src="https://images1.content-hcs.com/commimg/myhotcourses/blog/post/myhc_78689.jpg" />
        <div className="lecturer-name">
          <h3> Name: {name} </h3>
          <h3> Surname: {surname} </h3>
          <h3> Speciality: {speciality}</h3>
        </div>
      </div>
      <DrawTable param={filtered[0].timeTable} />
    </div>
  );
}

export default Lecturer;
