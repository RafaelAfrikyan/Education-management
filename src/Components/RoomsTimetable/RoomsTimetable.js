/* eslint-disable */

import React from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../../state/state.js";
import DrawTable from "../DrawTable/DrawTable.js";

function RoomsTimetable() {
  const { roomId } = useParams();
  return (
    <>
      {Object.keys(rooms).map((size, i) =>
        Object.keys(rooms[size]).map(
          (room, i) =>
            room == roomId && <DrawTable key={i} param={rooms[size][room]} />
        )
      )}
    </>
  );
}

export default RoomsTimetable;
