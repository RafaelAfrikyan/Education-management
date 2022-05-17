import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { faculties } from "../state/state.js";
import SingleFaculty from "./SingleFaculty.jsx";


export default function DisplayFaculties() {
  // let facultiesArray = Object.keys(faculties);
  let faculties = useSelector((state) => state.faculties);
  console.log(faculties);
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
