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
      <div className="wrapperRoom">
        {Object.keys(rooms).map((size, i) =>
          Object.keys(rooms[size]).map(
            (room, i) =>
              room == roomId && <DrawTable key={i} param={rooms[size][room]} />
          )
        )}
      </div>
  );
}

export default RoomsTimetable;
