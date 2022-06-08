/* eslint-disable */

import React from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../../state/state.js";
import DrawTable from "../DrawTable/DrawTable.js";

function RoomsTimetable() {
  const { roomId } = useParams();
  return (
    <>
      <h1> Room Timetable</h1>
      <h3>Room size: </h3>
      <div>
        {Object.keys(rooms).map((size, i) =>
          Object.keys(rooms[size]).map(
            (room, i) =>
              room == roomId && <DrawTable key={i} param={rooms[size][room]} />
          )
        )}
      </div>
    </>
  );
}

export default RoomsTimetable;
