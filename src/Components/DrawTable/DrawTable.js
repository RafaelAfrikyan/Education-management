import React from "react";
import { useRef } from "react";
import "./DrawTable.css"

function DrawTable({ param }) {
  const divRef = useRef(null);

  return (
    <div className="wrapper">
      <div className="table-top-part">
        <div className="empty-corner">Schedule</div>
        <div className="weekdays">
          <div className="day">Monday</div>
          <div className="day">Tuesday</div>
          <div className="day">Wednesday</div>
          <div className="day">Thursday</div>
          <div className="day">Friday</div>
        </div>
      </div>

      <div className="table-bottom-part">
        <div className="table-numbers">
          <div className="day-hour">1</div>
          <div className="day-hour">2</div>
          <div className="day-hour">3</div>
          <div className="day-hour">4</div>
        </div>

        <div className="table-wrap">
          {Object.keys(param).map((day, i) => {
            return (
              <div key={i} className="table">
                {Object.keys(param[day]).map((hour, i) => {
                  divRef.current = param[day][hour];

                  return (
                    <div
                      ref={divRef}
                      className={
                        divRef.current === "Elen"
                          ? "timetable-div timetable-activ-Elen"
                          : divRef.current === "Vrezh" ||
                            divRef.current === "1" ||
                            divRef.current === "2" ||
                            divRef.current === "3"
                          ? "timetable-div timetable-activ-Vrezh"
                          : divRef.current === "Rafayel" ||
                            divRef.current === "4" ||
                            divRef.current === "5" ||
                            divRef.current === "6"
                          ? "timetable-div timetable-activ-Rafayel"
                          : divRef.current === "Avet" ||
                            divRef.current === "7" ||
                            divRef.current === "8" ||
                            divRef.current === "9"
                          ? "timetable-div timetable-activ-Avet"
                          : divRef.current === "Mher" ||
                            divRef.current === "10" ||
                            divRef.current === "11" ||
                            divRef.current === "12" ||
                            divRef.current === "13"
                          ? "timetable-div timetable-activ-Mher"
                          : divRef.current === "Gago"
                          ? "timetable-div timetable-activ-Gago"
                          : divRef.current === "Norayr"
                          ? "timetable-div timetable-activ-Norayr"
                          : divRef.current === "Eduard"
                          ? "timetable-div timetable-activ-Eduard"
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

export default DrawTable;
