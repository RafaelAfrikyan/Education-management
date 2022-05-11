const cragir = {
  rooms: {
    size: [25, 45, 75, 89, 15, 24, 78],
  },
  lecturers: [{ name: "name", surname: "surname", speciality: "speciality" }],
  faculties: {
    facultyName: {
      subject: {
        English: 20,
        Matematic: 10,
      },
      students: [{ name: "name", surname: "surname" }],
    },
  },
};

const faculties = {
  first: {
    facultet: "fizika",
    year: "year",
    count: 20,
    lessons: {
      fizika: false,
      history: false,
      matematic: false,
      geographi: false,
    },
    students: {
      1: {
        name: "name",
        surname: "surname",
        facultet: "fizika",
        age: "age",
      },
    },
    timeTable: {
      1: {
        1: null,
        2: null,
        3: null,
        4: null,
      },
      2: {},
      3: {},
      4: {},
      5: {},
    },
  },
};

// Object.keys(faculties.id.lessons).map((lesson, index) => {
//  lecturers.forEach((lecture, index) => {
//       if(!lesson && lesson === lecture.speciality ){
//         Object.keys(rooms).forEach((roomSize) => {
//           if(roomSize === faculties.id.count){
//             rooms.roomSize
//           }
//         })

//       }

//   })
// })

const lecturers = [
  {
    name: "name",
    surname: "surname",
    speciality: "fizika",
    timeTable: {
      1: {
        1: null,
        2: null,
        3: null,
        4: null,
      },
      2: {},
      3: {},
      4: {},
      5: {},
    },
  },
  {
    name: "name",
    surname: "surname",
    speciality: "history",
    timeTable: {
      1: {
        1: null,
        2: null,
        3: null,
        4: null,
      },
      2: {},
      3: {},
      4: {},
      5: {},
    },
  },
  {
    name: "name",
    surname: "surname",
    speciality: "matematic",
    timeTable: {
      1: {
        1: null,
        2: null,
        3: null,
        4: null,
      },
      2: {},
      3: {},
      4: {},
      5: {},
    },
  },
  // {
  //   name: "name",
  //   surname: "surname",
  //   speciality: "geographi",
  //   timeTable: {
  //     1: {
  //       1: null,
  //       2: null,
  //       3: null,
  //       4: null,
  //     },
  //     2: {},
  //     3: {},
  //     4: {},
  //     5: {},
  //   },
  // },
];

// const rooms {
//   '20': {
//     number: 'number',
//     timeTable: {
//       '1': {
//         '1': {
//           facultets: facultets.id,
//           lecturer: lectrurers.id,
//         },
//         '2': null,
//         '3': null,
//         '4': null,
//         '5': null,

//       },
//       '2':{},
//       '3':{},
//       '4':{},
//       '5':{},
//     }
//   }
// }

const rooms = {
  20: [
    {
      1: {
        1: null,
        2: null,
        3: null,
        4: null,
      },
      2: {},
      3: {},
      4: {},
      5: {},
    },
  ],
};

function gago() {
  Object.keys(faculties.first.lessons).forEach((lesson, i) => {
    if (!faculties.first.lessons[lesson]) {
      lecturers.forEach((item) => {
        if (item.speciality === lesson) {
          Object.keys(item.timeTable).forEach((day) => {
            Object.keys(item.timeTable[day]).forEach((lectureHour) => {
              if (!item.timeTable[day][lectureHour]) {
                Object.keys(rooms).forEach((size) => {
                  if (size == faculties.first.count) {
                    rooms[size].forEach((room) => {
                      Object.keys(room).forEach((day) => {
                        Object.keys(room[day]).forEach((roomHour) => {
                          if (!room[day][roomHour]) {
                            faculties.first.lessons[lesson] = true;
                            
                          }
                        });
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
}
gago();
console.log(faculties.first);
