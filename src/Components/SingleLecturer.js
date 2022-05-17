import React from "react";
import "./styles_lecturers.css";
import img from "../assets/lecturer.webp";

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
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default SingleLecturer;
