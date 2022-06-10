/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DrawTable from "../DrawTable/DrawTable.js";
import "./style.css"

function RoomsTimetable() {
  const rooms = useSelector((state) => {
    return state.rooms;
  });
  const { roomId } = useParams();
  console.log(roomId)
  return (
    <div className="wrapperRoomTimetable">
      <h1> Room Timetable</h1>
      <h3>Room size: {}</h3>
      <div>
        {Object.keys(rooms).map((size, i) =>
          Object.keys(rooms[size]).map(
            (room, i) =>
              room == roomId && <DrawTable key={i} param={rooms[size][room]} />
          )
        )}
      </div>
    </div>
  );
}

export default RoomsTimetable;
