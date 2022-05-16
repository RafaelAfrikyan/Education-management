import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
<<<<<<< HEAD
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Lectures from "./Components/Lectures.jsx";

import Course from "./Components/Course.jsx";
import CreateClasslist from "./Components/CreateClasslist.jsx";
import Room from "./Components/Hall.jsx";
import RoomsTimetable from "./Components/RoomsTimetable.js";
=======
import Home from "./Components/Home.jsx";
import Hall from "./Components/Hall.jsx";
import CreateClasslist from "./Components/CreateClasslist.jsx";
import Login from "./Pages/Login/Login.jsx";
import Faculties from "./Pages/Faculties/Faculties.jsx";
import Lectures from "./Pages/Lectures.jsx";

>>>>>>> bfc67417d4d8683516d2560ecd802daec1b7f402

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lectures" element={<Lectures />} />
<<<<<<< HEAD
          <Route path="home/:roomId" element={<RoomsTimetable/>} />

          <Route path="course" element={<Course />} />
=======
          <Route path="hall" element={<Hall />} />
          <Route path="course" element={<Faculties />} />
>>>>>>> bfc67417d4d8683516d2560ecd802daec1b7f402
          <Route path="create" element={<CreateClasslist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
