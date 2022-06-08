import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../../Components/DrawTable/DrawTable.js";
import { lecturers } from "../../state/state.js";
import "./Lecturer.css";

function Lecturer() {
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
      <div className="lecturer-info">
        <img src={image} className="lecturer-img" />
        <div className="lecturer-name">
          <h3>Name: {name}</h3>
          <h3>Surname:{surname}</h3>
          <h3>Speciality: {speciality}</h3>
          <h3>e-mail: {mail}</h3>
        </div>
      </div>
      <DrawTable param={filtered[0].timeTable} />
    </div>
  );
}

export default Lecturer;
