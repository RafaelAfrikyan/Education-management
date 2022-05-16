/* eslint-disable */

import React from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../state/state.js";
import DrowTable from "./DrowTable.js";

function RoomsTimetable() {
  const { roomId } = useParams();
  return (
    <>
      {Object.keys(rooms).map((size, i) =>
        Object.keys(rooms[size]).map((room, i) => (

          room == roomId && <DrowTable room={rooms[size][room]} />
        ))
      )}
    </>
  );
}

export default RoomsTimetable;
