import React from "react";
import img from "../../assets/lecturer.webp";
import { Link } from "react-router-dom";
import "./styles.css";

function SingleLecturer({ lecturer }) {
  const { name, surname, speciality } = lecturer;
  return (
    <Link to={`${name}${surname}`} style={{ textDecoration: "none" }}>
      <div className="single-lecturer-wrapper">
        <div class="wrap-image">
          <img src={img} alt="" />
        </div>
        {/* <div className="lecturer-info"> */}
        <div className="text">
          {name} {surname}
        </div>
        <div className="speciality-wrapper">{speciality}</div>
        <div className="button-wrapper"></div>
        {/* </div> */}
      </div>
    </Link>
  );
}

export default SingleLecturer;
