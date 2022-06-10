import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ACA } from "../../state/data";
import { createRooms } from "../../state/state";
import Room from "../Hall/Hall";
import { useRef, useState } from "react";
import "./style.css"

import MailIcon from "@material-ui/icons/Mail.js";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline.js";
import MapIcon from "@material-ui/icons/Map.js";
import "./Navbar.css";

// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

export default function OurMenu(props) {
  return (
    <CircleMenu
      startAngle={-40}
      rotationAngle={90}
      itemSize={2}
      radius={15}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={true}
      className="Menu"
    >
      <CircleMenuItem tooltip="Email" tooltipPlacement={TooltipPlacement.Right}>
        <Link to="/home">Home</Link>
      </CircleMenuItem>

      <CircleMenuItem tooltip="Email" tooltipPlacement={TooltipPlacement.Right}>
        <Link to="lectures">Lectures</Link>
      </CircleMenuItem>
      <CircleMenuItem tooltip="Help">
        <Link to="course">Course</Link>
        <p onClick={openModal}>Rooms</p>
        <Link to="create">Create Classlist</Link>
      </CircleMenuItem>
    </CircleMenu>
  );
}

// export default function Navbar() {
//   const roomRef = useRef(null);
//   const [isActive, setIsActive] = useState(false);

//   const openModal = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className="navbarWrap">
//       <div className="Navbar">
//         <Link to="/home">Home</Link>
//         <Link to="lectures">Lectures</Link>
//         <Link to="course">Course</Link>
//         <button onClick={openModal}>Rooms</button>
//         <Link to="create">Create Classlist</Link>
//         <Link to="menu">Menu</Link>
//       </div>
//       <Room isActive={isActive} roomRef={roomRef} />
//     </div>
//   );
// }
