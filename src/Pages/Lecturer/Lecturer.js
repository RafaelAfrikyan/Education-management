import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../../Components/DrawTable/DrawTable.js";
import "./Lecturer.css";
import LecturerInfo from "../../Components/Layout/LecturerInfo/LecturerInfo.js";
// import LecturersTimetable from "../../Components/LecturersTimetable/LecturersTimetable.js";
import { lecturers } from "../../state/state.js";
import { useSelector } from "react-redux";
import "./style.css"

function Lecturer() {
  const lecturers = useSelector((state) => {
    return state.lecturers;
  });
  const { lecturerName } = useParams();
  const filtered = lecturers.filter(
    (lecturer, i) => `${lecturer.name}${lecturer.surname}` == lecturerName
  );
  
  const { name, surname, speciality, img } = filtered[0];
  const mail = `${lecturerName}@gmail.com`; 
  console.log(img);
  let image = img;
  return (
    <div className="singleLecturer">
      {/* <div className="lecturer-info">
        <img src={image} className="lecturer-img" />
        <div className="lecturer-name">
          <h3 className="lecturer-info-row1">Name: {name}</h3>
          <h3 className="lecturer-info-row2">Surname: {surname}</h3>
          <h3 className="lecturer-info-row3">Speciality: {speciality}</h3>
          <h3 className="lecturer-info-row4">e-mail: {mail.toLowerCase()}</h3>
        </div>
      </div> */}
      <DrawTable param={filtered[0].timeTable} />
    </div>
  );
}

export default Lecturer;
