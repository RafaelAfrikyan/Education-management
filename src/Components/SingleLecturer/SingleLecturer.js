import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function SingleLecturer({ lecturer }) {
  const { name, surname, speciality, img } = lecturer;
  return (
    <Link to={`${name}${surname}`} style={{ textDecoration: "none" }}>
      <div className="single-lecturer-wrapper">
        <div className="img">
          <img src={img} alt="" width="200" height="200" />
        </div>
        <div className="textWrapper">
          <h1>
            {name} {surname}
          </h1>
          <h1>{speciality}</h1>
        </div>
        <div className="button-wrapper"></div>
      </div>
    </Link>
  );
}

export default SingleLecturer;
