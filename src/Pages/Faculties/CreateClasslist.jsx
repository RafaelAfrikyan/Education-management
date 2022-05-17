import React from "react";
// import { faculties } from "../../state/state.js";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { ACTION_TYPES } from "../../state/state";

export default function CreateClasslist() {
  const dispatch = useDispatch();
  const { faculties, lecturers, rooms } = useSelector((state) => {
    return state;
  });

  let obj = Object.keys(faculties).filter((faculty, i) => {
    return Object.keys(faculties[faculty].lessons).filter((item) => {
      return faculties[faculty].lessons[item] !== 0;
    });
  });

  let refer = useRef(null);

  const gago = (faculty, lecturers, rooms) => {
    Object.keys(faculties[faculty].lessons).forEach((lesson, i) => {
      if (faculties[faculty].lessons[lesson] !== 0) {
        lecturers.forEach((item) => {
          if (item.speciality === lesson) {
            Object.keys(item.timeTable).forEach((day) => {
              Object.keys(item.timeTable[day]).forEach((lectureHour) => {
                if (!item.timeTable[day][lectureHour]) {
                  Object.keys(rooms).forEach((size) => {
                    if (
                      size >= faculties[faculty].count
                      // Math.abs(size - faculties[faculty].count) < 10
                      // ||
                      // Math.abs(size - faculties[faculty].count) <= 20
                    ) {
                      Object.keys(rooms[size]).forEach((room) => {
                        Object.keys(rooms[size][room]).forEach((day) => {
                          Object.keys(rooms[size][room][day]).forEach(
                            (roomHour) => {
                              if (!rooms[size][room][day][roomHour]) {
                                if (faculties[faculty].lessons[lesson]) {
                                  faculties[faculty].lessons[lesson] =
                                    faculties[faculty].lessons[lesson] - 1;
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
    <div>
      {obj.map((element) => {
        return (
          <div
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
