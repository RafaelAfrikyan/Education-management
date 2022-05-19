import React from "react";
import { useRef } from "react";

function DrowTable({ param }) {
  const divRef = useRef(null);

  return (
    <div className="wrapper">
      <div className="day-timetabel">
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
      </div>
      <div className="container">
        <div className="hour-timetabel">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div className="table-wrap">
          {Object.keys(param).map((day, i) => {
            return (
              <div key={i} className="table">
                {/* <div className="day">Day{day}</div> */}
                {Object.keys(param[day]).map((hour, i) => {
                  divRef.current = param[day][hour];
                  console.log(divRef.current);
                  return (
                    <div
                      ref={divRef}
                      className={
                        divRef.current === "Elen"
                          ? "timetable-activ-Elen"
                          : divRef.current === "Vrezh" ||
                            divRef.current === "1" ||
                            divRef.current === "2" ||
                            divRef.current === "3"
                          ? "timetable-activ-Vrezh"
                          : divRef.current === "Rafayel" ||
                            divRef.current === "4" ||
                            divRef.current === "5" ||
                            divRef.current === "6"
                          ? "timetable-activ-Rafayel"
                          : divRef.current === "Avet" ||
                            divRef.current === "7" ||
                            divRef.current === "8" ||
                            divRef.current === "9"
                          ? "timetable-activ-Avet"
                          : divRef.current === "Mher" ||
                            divRef.current === "10" ||
                            divRef.current === "11" ||
                            divRef.current === "12" ||
                            divRef.current === "13"
                          ? "timetable-activ-Mher"
                          : divRef.current === "Gago"
                          ? "timetable-activ-Gago"
                          : divRef.current === "Norayr"
                          ? "timetable-activ-Norayr"
                          : divRef.current === "Eduard"
                          ? "timetable-activ-Eduard"
                          : "timetable-div"
                      }
                      key={i}
                    >
                      {param[day][hour]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DrowTable;
