import React, { useEffect } from "react";
// import { faculties } from "../../state/state.js";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { ACTION_TYPES } from "../../state/state";
import "./../../App.css";

export default function CreateClasslist() {
  
  const dispatch = useDispatch();
  const { faculties, lecturers, rooms } = useSelector((state) => {
    return state;
  });

  // Object.keys(faculties).filter((faculty, i) => {
  //   return Object.keys(faculties[faculty].lessons).filter((item) => {
  //     return faculties[faculty].lessons[item] > 0;
  //   });
  // });
  // console.log();
  let refer = useRef(null);

  const gago = (faculty, lecturers, rooms) => {
    Object.keys(faculties[faculty].lessons).forEach((lesson) => {
      console.log("leson", lesson);
      if (faculties[faculty].lessons[lesson] !== 0) {
        console.log("faculties" , faculties[faculty].lessons[lesson] );
        lecturers.forEach((item) => {
          if (item.speciality === lesson) {
            Object.keys(item.timeTable).forEach((day) => {
              Object.keys(item.timeTable[day]).forEach((lectureHour) => {
                if (!item.timeTable[day][lectureHour]) {
                  Object.keys(rooms).sort((a, b) => a-b).forEach((size) => {
                    if (
                      size >= faculties[faculty].count
                    ) {
                      Object.keys(rooms[size]).forEach((room) => {
                        Object.keys(rooms[size][room]).forEach((day) => {
                          Object.keys(rooms[size][room][day]).forEach(
                            (roomHour) => {
                              if (!rooms[size][room][day][roomHour]) {
                                if (faculties[faculty].lessons[lesson]) {
                                  dispatch({
                                    type: ACTION_TYPES.ROOMS_TABLE,
                                    payload: {
                                      lecturerName: item.name,
                                      lecturerSurname: item.surname,
                                      facultiesName: faculty,
                                      roomSize: size,
                                      roomNumber: room,
                                      roomDay: day,
                                      roomHour: roomHour,
                                    },
                                  });

                                  dispatch({
                                    type: ACTION_TYPES.LECTURER_TABLE,
                                    payload: {
                                      lecturerName: item.name,
                                      lecturerSurname: item.surname,
                                      facultiesName: faculty,
                                      roomSize: size,
                                      roomNumber: room,
                                      roomDay: day,
                                      roomHour: roomHour,
                                    },
                                  });
                                  dispatch({
                                    type: ACTION_TYPES.FACULTIES_TABLE,
                                    payload: {
                                      lecturerName: item.name,
                                      lecturerSurname: item.surname,
                                      facultiesName: faculty,
                                      roomSize: size,
                                      roomNumber: room,
                                      roomDay: day,
                                      roomHour: roomHour,
                                      lesson: lesson,
                                    },
                                  });
                                }
                              }
                            }
                          );
                        });
                      });
                    }
                  });
                }
              });
            });
          }
        });
      }
    });
  };

  return (
    <div className="wrapperClasslist">
      {Object.keys(faculties)
        .filter((faculty, i) => {
          return Object.keys(faculties[faculty].lessons).map((item) => {
            console.log(faculty, "lpppppp");
            return faculties[faculty].lessons[item] > 100;
          });
        })
        .map((element) => {
          console.log(element);
          return (
            <div
              className="create-button"
              ref={refer}
              onClick={(e) => {
                refer.current.value = e.target.innerText;

                gago(refer.current.value, lecturers, rooms);
              }}
            >
              {element}
            </div>
          );
        })}
    </div>
  );
}
