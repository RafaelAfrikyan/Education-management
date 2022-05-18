import React from "react";
import { Link } from "react-router-dom";
import { faculties } from "../state/state.js";
import SingleFaculty from "./SingleFaculty.jsx";

export default function DisplayFaculties() {
  let facultiesArray = Object.keys(faculties);

  return (
    <div className="all-faculties">
      {facultiesArray.map((facultyName, i) => {
        return (
          <Link to={`${facultyName}`}>
          <SingleFaculty
            facultyName={facultyName}
            key={i}
            count={faculties[facultyName].count}
            props={faculties[facultyName]}
          />
          </Link>
          
        );
      })}
    </div>
  );
}
