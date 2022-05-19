import React from "react";
import "./styles_lecturers.css";
import img from "../../assets/lecturer.webp";
import { Link } from "react-router-dom";

function SingleLecturer({ lecturer }) {
  const { name, surname, speciality } = lecturer;
  return (
    <div className="single-lecturer-wrapper">
      <img src={img} />
      <div className="lecturer-info">
        <div>
          {name} {surname}
        </div>
        <div className="speciality-wrapper">{speciality}</div>
        <div className="button-wrapper">
          <Link to={`${name}${surname}`}>
            <button>Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleLecturer;
