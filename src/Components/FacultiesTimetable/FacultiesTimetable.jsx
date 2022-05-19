import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../DrawTable/DrawTable.js";
import { faculties } from "../../state/state.js";

export default function FacultiesTimetable() {
  const { faculty } = useParams();
  let facultyID = Object.keys(faculties).filter(
    (singleFaculty) => singleFaculty == faculty
  );

  return (
    <div>
      <h1>Faculties Timetable</h1>
      <DrawTable param={faculties[facultyID[0]].timeTable} />
    </div>
  );
}
