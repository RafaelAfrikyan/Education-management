import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Lecturers from "./Pages/Lecturers/Lectures.jsx";
import Home from "./Components/Home.jsx";
// import Lectures from "./Components/Lectures.jsx";

import Course from "./Components/Course.jsx";
import CreateClasslist from "./Pages/Faculties/CreateClasslist.jsx";
// import Room from "./Components/Hall.jsx";
import RoomsTimetable from "./Components/RoomsTimetable.js";
import Lecturer from "./Pages/Lecturer/Lecturer.js";
import Faculties from "./Pages/Faculties/Faculties.jsx";
import Login from "./Pages/Login/Login.jsx";
import FacultiesTimetable from "./Components/FacultiesTimetable.jsx";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lectures" element={<Lecturers />} />
          <Route path="home/:roomId" element={<RoomsTimetable />} />
          <Route path="lectures/:lecturerName" element={<Lecturer />} />
          <Route path="course/:faculty" element={<FacultiesTimetable/>} />
          <Route path="course" element={<Faculties />} />
          <Route path="create" element={<CreateClasslist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
