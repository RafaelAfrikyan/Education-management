import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleFaculty from "../SingleFaculty/SingleFaculty.jsx";

export default function DisplayFaculties() {
  let faculties = useSelector((state) => state.faculties);

  return (
    <div className="all-faculties">
      {Object.keys(faculties).map((facultyName, i) => {
        return (
          <Link key={i} to={`${facultyName}`}>
            <SingleFaculty
              facultyName={facultyName}
              count={faculties[facultyName].count}
              props={faculties[facultyName]}
            />
          </Link>
        );
      })}
    </div>
  );
}
