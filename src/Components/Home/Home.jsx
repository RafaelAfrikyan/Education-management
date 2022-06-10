import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../../state/state";
import { useState } from "react";

export default function Home() {
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
    <div>
      <div>
        <div>Add Lecturer</div>
        <div>
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
      <div>
        <div>Add Room</div>
        <div>
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
  );
}
