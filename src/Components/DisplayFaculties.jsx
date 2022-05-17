import React from "react";
import { faculties } from "../state/state.js";
import SingleFaculty from "./SingleFaculty.jsx";

export default function DisplayFaculties() {
  let facultiesArray = Object.keys(faculties);

  return (
    <div className="all-faculties">
      {facultiesArray.map((facultyName) => {
        return (
          <SingleFaculty
            facultyName={facultyName}
            key={Math.random()}
            count={faculties[facultyName].count}
            props={faculties[facultyName]}
          />
        );
      })}
    </div>
  );
}
