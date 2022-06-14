import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../../state/state";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  function name() {
    const data = localStorage.getItem("user");
    const parse = JSON.parse(data);
    return parse.username;
  }

  const dispatch = useDispatch();
  const [isLecturerName, setIsLecturerName] = useState("");
  const [isLecturerSurname, setIsLecturerSurname] = useState("");
  const [isLecturerSpeciality, setIsLecturerSpeciality] = useState("");
  const [isRoomSize, setisRoomSize] = useState("");
  const [isRoomNumber, setisRoomNumber] = useState("");
  const { faculties, rooms, lecturers } = useSelector((state) => {
    return state;
  });
  const setLecturerName = (e) => setIsLecturerName(e.target.value);
  const setLecturerSurname = (e) => setIsLecturerSurname(e.target.value);
  const addLecturer = () => {
    if (isLecturerName && isLecturerSurname && isLecturerSpeciality) {
      dispatch({
        type: ACTION_TYPES.ADD_LECTURERS,
        payload: {
          name: isLecturerName,
          surname: isLecturerSurname,
          speciality: isLecturerSpeciality,
        },
      });
    }
    setIsLecturerName("");
    setIsLecturerSurname("");
    setIsLecturerSpeciality("");
  };

  const addRoom = () => {
    if (isRoomSize && isRoomNumber) {
      dispatch({
        type: ACTION_TYPES.ADD_ROOM,
        payload: {
          size: isRoomSize,
          number: isRoomNumber,
        },
      });
      setisRoomNumber("");
      setisRoomSize("");
    }
  };
  console.log(lecturers);

  return (
    <div className="homeWrapper">
      <h1>Welcome to Education Management</h1>
      <h2> Username : {name()}</h2>
      <div className="mainContent">
        <div className="addLecturer">
          <h1>Add Lecturer</h1>
          <div className="lecturerInput">
            <input
              onChange={setLecturerName}
              type="text"
              placeholder="lecturer name"
              value={isLecturerName}
            />
            <input
              onChange={setLecturerSurname}
              type="text"
              placeholder="lecturer surname"
              value={isLecturerSurname}
            />
            <input
              value={isLecturerSpeciality}
              onChange={(e) => setIsLecturerSpeciality(e.target.value)}
              type="text"
              placeholder="speciality"
            />
            <button onClick={addLecturer}>Add</button>
          </div>
        </div>
        <div className="addRoom">
          <h1>Add Room</h1>
          <div className="roomInput">
            <input
              onChange={(e) => setisRoomSize(e.target.value)}
              value={isRoomSize}
              type="number"
              placeholder="roomsize"
            />
            <input
              onChange={(e) => setisRoomNumber(e.target.value)}
              value={isRoomNumber}
              type="number"
              placeholder="number"
            />
            <button onClick={addRoom}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
