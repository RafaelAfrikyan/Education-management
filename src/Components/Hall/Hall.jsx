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
import "./style.css"

export default function Room({ roomRef, isActive, setIsActive }) {
  // let roomSize = createRooms(ACA);
let roomSize = useSelector((state)=> state.rooms)

console.log(roomSize)
  return (
    <div className={isActive ? "roomActiveModal wrapperModal" : "roomModal"} onClick={() => {
      setIsActive(!isActive)
    }}>
    <div ref={roomRef}  className="roomActiveModal" onClick={(e) => {
      e.stopPropagation()
    }}>
      {Object.keys(roomSize).map((size, i) => {
        console.log(size)
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography >{`Room Size ${size}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.keys(roomSize[size]).map((number, i) => {
                return (
                  <Typography  className="roomNumber" onClick={() => {
                    setIsActive(!isActive)
                  }} key={i}>
                    <Link className="roomNumber" to={`home/${number}`}>
                       {`Number ${number}`}
                    </Link>
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
    </div>
  )
}
