import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ACA } from "../state/data";
import { createRooms } from "../state/state";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Room({ roomRef, isActive }) {
  let roomSize = createRooms(ACA);

  return (
    <div ref={roomRef} className={isActive ? "roomActiveModal" : "roomModal"}>
      {Object.keys(roomSize).map((size, i) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{`Room Size ${size}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.keys(roomSize[size]).map((number) => {
                
                return (
                  <Typography>
                    <Link to={`home/${number}`}>
                      {" "}
                      <div className="roomNumber">
                        {`Number ${number}`}{" "}
                      </div>{" "}
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
