import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Lecturers from "./Pages/Lecturers/Lectures.jsx";
import Home from "./Components/Home/Home.jsx";
import CreateClasslist from "./Pages/CreateClasslist/CreateClasslist.jsx";
// import Room from "./Components/Hall.jsx";
import RoomsTimetable from "./Components/RoomsTimetable/RoomsTimetable.js";
import Lecturer from "./Pages/Lecturer/Lecturer.js";
import Faculties from "./Pages/Faculties/Faculties.jsx";
import Login from "./Pages/Login/Login.jsx";
import FacultiesTimetable from "./Components/FacultiesTimetable/FacultiesTimetable.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(
    {
      username: '',
      password: '',
      isLog: false,
    }
  );
  const [isActive, setIsActive] = useState(false);

  console.log(user)

  return (
    <div className={isActive ? " App roomActiveModal wrapperModal" : " App "}>
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/home" element={<Layout isActive={isActive} setIsActive={setIsActive}/>}>
            <Route index element={<Home />} />
            <Route path="lectures" element={<Lecturers />} />
            <Route path="home/:roomId" element={<RoomsTimetable />} />
            <Route path="lectures/:lecturerName" element={<Lecturer />} />
            <Route path="course/:faculty" element={<FacultiesTimetable />} />
            <Route path="course" element={<Faculties />} />
            <Route path="create" element={<CreateClasslist />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
