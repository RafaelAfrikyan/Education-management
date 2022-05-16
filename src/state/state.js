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
// console.log(createFaculties(ACA)['Frontend Bootcamp'], 'student')
const faculties = createFaculties(ACA);
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
export const lecturers = createLecturers(ACA);

export function createRooms(university) {
  let rooms = {};
  Object.keys(university.rooms).forEach((size) => {
    rooms[size] = {};
    university.rooms[size].forEach((num) => {
      rooms[size][num] = {
        1: {
          1: 'JS',
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

function gago(faculties, lecturers, rooms) {
  Object.keys(faculties).forEach((faculty) => {
    Object.keys(faculties[faculty].lessons).forEach((lesson, i) => {
      if (faculties[faculty].lessons[lesson] !== 0) {
        lecturers.forEach((item) => {
          if (item.speciality === lesson) {
            Object.keys(item.timeTable).forEach((day) => {
              Object.keys(item.timeTable[day]).forEach((lectureHour) => {
                if (!item.timeTable[day][lectureHour]) {
                  Object.keys(rooms).forEach((size) => {
                    // console.log(rooms[size]);

                    if (
                      size == faculties[faculty].count ||
                      size - faculties[faculty].count <= 10 ||
                      size - faculties[faculty].count <= 20
                    ) {
                      Object.keys(rooms[size]).forEach((room) => {
                        Object.keys(rooms[size][room]).forEach((day) => {
                          Object.keys(rooms[size][room][day]).forEach(
                            (roomHour) => {
                              if (!rooms[size][room][day][roomHour]) {
                                if (faculties[faculty].lessons[lesson]) {
                                  faculties[faculty].lessons[lesson] =
                                    faculties[faculty].lessons[lesson] - 1;
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
  });
}
gago(faculties, lecturers, rooms);
// console.log(faculties["Frontend Bootcamp"]);

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
//     '2': {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     },
//     '3': {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     },
//     '4': {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },

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
//   {
//     name: 'Avet',
//     surname: 'Badalyan',
//     speciality: 'UI/UX',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Eduard',
//     surname: 'Harutyunyan',
//     speciality: 'ReactJS',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Norayr',
//     surname: 'Hayrikyan',
//     speciality: 'Project Management',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Elen',
//     surname: 'Ghazaryan',
//     speciality: 'JavaScript',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Edgar',
//     surname: 'Khudoyan',
//     speciality: 'NodeJS',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Rafayel',
//     surname: 'Afrikyan',
//     speciality: 'CSS',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Hovhannes',
//     surname: 'Kocharyan',
//     speciality: 'ReactJS',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Sona',
//     surname: 'Shahgeldyan',
//     speciality: 'NodeJS',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Elmira',
//     surname: 'Avagyan',
//     speciality: 'JavaScript',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Vrezh',
//     surname: 'Oganesyan',
//     speciality: 'HTML',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   },
//   {
//     name: 'Mher',
//     surname: 'Armenia',
//     speciality: 'Python',
//     timeTable: {
//       '1': [Object],
//       '2': [Object],
//       '3': [Object],
//       '4': [Object],
//       '5': [Object]
//     }
//   }
// ]
