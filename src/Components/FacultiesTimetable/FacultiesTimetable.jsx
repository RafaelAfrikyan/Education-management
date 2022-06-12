import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../DrawTable/DrawTable.js";

import { useSelector } from "react-redux";
import "./style.css"

export default function FacultiesTimetable() {
  const faculties = useSelector((state) => {
    return state.faculties;
  });
  const { faculty } = useParams();
  let facultyID = Object.keys(faculties).filter(
    (singleFaculty) => singleFaculty == faculty
  );

  return (
    <div className="faculty-timetable">
      <DrawTable param={faculties[facultyID[0]].timeTable} />
    </div>
  );
}
