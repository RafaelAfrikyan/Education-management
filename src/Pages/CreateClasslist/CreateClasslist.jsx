import React, { useEffect } from "react";
// import { faculties } from "../../state/state.js";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { ACTION_TYPES } from "../../state/state";
import "./../../App.css";
import { FoodBank } from "@mui/icons-material";

export default function CreateClasslist() {
  const dispatch = useDispatch();
  const { faculties, lecturers, rooms, test } = useSelector((state) => {
    return state;
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
                    if (size >= faculties[faculty].count) {
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

  function foo(name) {
    dispatch({
      type: ACTION_TYPES.DRAW_FACULTIES,
      payload: {
        name: name,
      },
    });
  }
  return (
    <div className="wrapperClasslist">
      {test.map((element) => {
        return (
          <div
            key={Math.random()}
            className="create-button"
            ref={refer}
            onClick={(e) => {
              refer.current.value = e.target.innerText;
              gago(refer.current.value, lecturers, rooms);
              foo(e.target.innerText);
            }}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
}
