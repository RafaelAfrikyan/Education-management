import MailIcon from "@material-ui/icons/Mail.js";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline.js";
import MapIcon from "@material-ui/icons/Map.js";
import "./Menu.css";

// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

export default function OurMenu(props) {
  return (
    <CircleMenu
      startAngle={-20}
      rotationAngle={180}
      itemSize={2}
      radius={7}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
      className="Menu"
    >
      <CircleMenuItem tooltip="Email" tooltipPlacement={TooltipPlacement.Right}>
        Home
      </CircleMenuItem>
      <CircleMenuItem tooltip="Email" tooltipPlacement={TooltipPlacement.Right}>
        Lecturers
      </CircleMenuItem>
      <CircleMenuItem tooltip="Help">Course</CircleMenuItem>
      <CircleMenuItem tooltip="Location">Rooms</CircleMenuItem>
      <CircleMenuItem tooltip="Info">Create Classlist</CircleMenuItem>
    </CircleMenu>
  );
}
