// import { act } from "react-dom/test-utils/index.js";
import { combineReducers, createStore } from "redux";
import { ACA } from "./data.js";

function createFaculties(university) {
  let obj = {};

  Object.keys(university.faculties).forEach((facultet) => {
    obj[facultet] = {
      lessons: {},
      students: {},
      count: university.faculties[facultet].students.length,
      timeTable: {
        1: {
          1: null,
          2: null,
          3: null,
          4: null,
        },
        2: { 1: null, 2: null, 3: null, 4: null },
        3: { 1: null, 2: null, 3: null, 4: null },
        4: { 1: null, 2: null, 3: null, 4: null },
        5: { 1: null, 2: null, 3: null, 4: null },
      },
    };
    university.faculties[facultet].syllabus.forEach((elem) => {
      for (let prop in elem) {
        obj[facultet].lessons[prop] = elem[prop];
      }
    });
    university.faculties[facultet].students.forEach((elem, i) => {
      for (let prop in elem) {
        obj[facultet].students[i + 1] = elem;
      }
    });
  });
  return obj;
}
function createLecturers(university) {
  //....
  let lecturersObject = [];
  const { lecturers } = university;
  lecturers.forEach((lecturer) =>
    lecturersObject.push({
      ...lecturer,
      timeTable: {
        1: {
          1: null,
          2: null,
          3: null,
          4: null,
        },
        2: { 1: null, 2: null, 3: null, 4: null },
        3: { 1: null, 2: null, 3: null, 4: null },
        4: { 1: null, 2: null, 3: null, 4: null },
        5: { 1: null, 2: null, 3: null, 4: null },
      },
    })
  );

  return lecturersObject;
}
export function createRooms(university) {
  let rooms = {};
  Object.keys(university.rooms).forEach((size) => {
    rooms[size] = {};
    university.rooms[size].forEach((num) => {
      rooms[size][num] = {
        1: {
          1: null,
          2: null,
          3: null,
          4: null,
        },
        2: { 1: null, 2: null, 3: null, 4: null },
        3: { 1: null, 2: null, 3: null, 4: null },
        4: { 1: null, 2: null, 3: null, 4: null },
        5: { 1: null, 2: null, 3: null, 4: null },
      };
    });
  });
  return rooms;
}

export const rooms = createRooms(ACA);
export const faculties = createFaculties(ACA);
export const lecturers = createLecturers(ACA);
const test = Object.keys(faculties);
import { rooms, lecturers, faculties } from "./data.js";


export const ACTION_TYPES = {
  ROOMS_TABLE: "ROOMS_TABLE",
  LECTURER_TABLE: "LECTURER_TABLE",
  FACULTIES_TABLE: "FACULTIES_TABLE",

  DRAW_FACULTIES: "DRAW_FACULTIES",

  ADD_LECTURERS: "ADD_LECTURERS",
  ADD_ROOM: "ADD_ROOM",

};

const initialState = {
  rooms,
  lecturers,
  test,
  faculties,
};

function lecturerReducer(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.LECTURER_TABLE: {
      state.forEach((lecturer, i) => {
        if (
          lecturer.name == action.payload.lecturerName &&
          lecturer.surname == action.payload.lecturerSurname
        ) {
          Object.keys(lecturer["timeTable"]).forEach((day) => {
            if (day == action.payload.roomDay) {
              Object.keys(lecturer["timeTable"][day]).forEach((hour) => {
                if (hour == action.payload.roomHour) {
                  lecturer["timeTable"][day][hour] = action.payload.roomNumber;
                }
              });
            }
          });
        }
      });
      return state;
    }
    case ACTION_TYPES.ADD_LECTURERS: {
      return [
        ...state,
        {
          name: action.payload.name,
          surname: action.payload.surname,
          speciality: action.payload.speciality,
          timeTable: {
            1: {
              1: null,
              2: null,
              3: null,
              4: null,
            },
            2: { 1: null, 2: null, 3: null, 4: null },
            3: { 1: null, 2: null, 3: null, 4: null },
            4: { 1: null, 2: null, 3: null, 4: null },
            5: { 1: null, 2: null, 3: null, 4: null },
          },
        },
      ];
    }
  }

  return state;
}
function facultiesReducer(state = {}, action) {
  // console.log(state);
  switch (action.type) {
    case ACTION_TYPES.FACULTIES_TABLE: {
      Object.keys(state).forEach((faculty) => {
        if (faculty == action.payload.facultiesName) {
          Object.keys(state[faculty]["timeTable"]).forEach((day) => {
            if (day == action.payload.roomDay) {
              Object.keys(state[faculty]["timeTable"][day]).forEach((hour) => {
                if (hour == action.payload.roomHour) {
                  state[faculty]["timeTable"][day][hour] =
                    action.payload.lecturerName;
                  state[faculty].lessons[action.payload.lesson] =
                    state[faculty].lessons[action.payload.lesson] - 1;
                  console.log(state[faculty].lessons[action.payload.lesson]);
                }
              });
            }
          });
        }
      });
    }
  }
  return state;
}
function testReducer(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.DRAW_FACULTIES: {
      return state.filter((el) => el !== action.payload.name);
    }
  }
  return state;
}
function roomsReducer(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.ROOMS_TABLE: {
      Object.keys(state).forEach((size) => {
        if (size == action.payload.roomSize) {
          Object.keys(state[size]).forEach((number) => {
            if (number == action.payload.roomNumber) {
              Object.keys(state[size][number]).forEach((day) => {
                if (day === action.payload.roomDay) {
                  Object.keys(state[size][number][day]).forEach((hour) => {
                    if (hour === action.payload.roomHour) {
                      state[size][number][day][hour] =
                        action.payload.facultiesName;
                    }
                  });
                }
              });
            }
          });
        }
      });
    }

    case ACTION_TYPES.ADD_ROOM: {
      Object.keys(state).map((key) => {
        if (key === [action.payload.size]) {
          state.key = {
            ...state.key,
            [action.payload.number]: {
              1: { 1: null, 2: null, 3: null, 4: null },
              2: { 1: null, 2: null, 3: null, 4: null },
              3: { 1: null, 2: null, 3: null, 4: null },
              4: { 1: null, 2: null, 3: null, 4: null },
              5: { 1: null, 2: null, 3: null, 4: null },
            },
          };
        } else {
          state[action.payload.size] = {
            ...state[action.payload.size],
            [action.payload.number]: {
              1: { 1: null, 2: null, 3: null, 4: null },
              2: { 1: null, 2: null, 3: null, 4: null },
              3: { 1: null, 2: null, 3: null, 4: null },
              4: { 1: null, 2: null, 3: null, 4: null },
              5: { 1: null, 2: null, 3: null, 4: null },
            },
          };
        }
      });
    }
  }
  return state;
}

export const store = createStore(
  combineReducers({
    faculties: facultiesReducer,
    rooms: roomsReducer,
    lecturers: lecturerReducer,
    test: testReducer,
  }),
  initialState
);

// {
//   'Frontend Bootcamp': {
//     lessons: { JavaScript: 5, HTML: 3, CSS: 3, ReactJS: 2 },
//     students: {
//
//       '19': [Object],
//       '20': [Object]
//     },
//     count: 20,
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//
// }

// {
//   '10': {
//     '1': {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     },
// }

// [
//   {
//     name: 'Gago',
//     surname: 'Gagyan',
//     speciality: 'Java',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//
// ]
