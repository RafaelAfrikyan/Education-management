import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ACA } from "../../state/data";
import { createRooms } from "../../state/state";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Room({ roomRef, isActive }) {
  // let roomSize = createRooms(ACA);
let roomSize = useSelector((state)=> state.rooms)
  return (
    <div ref={roomRef} className={isActive ? "roomActiveModal" : "roomModal"}>
      {Object.keys(roomSize).map((size, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{`Room Size ${size}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.keys(roomSize[size]).map((number, i) => {
                return (
                  <Typography key={i}>
                    <Link to={`home/${number}`}>
                      <span className="roomNumber">{`Number ${number}`} </span>
                    </Link>
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
