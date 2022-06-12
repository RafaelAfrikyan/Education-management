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
import { useEffect, useState } from "react";
import ProtectedLogin from "./Components/ProtectedRoute/ProtectedLogin.jsx";

function App() {

  function getItem(){
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : {isLog: false}
  }

  const [user, setUser] = useState(getItem());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  },[user]);


  console.log(user)
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedLogin user={user}/>}>
          <Route path="/" element={<Login setUser={setUser} />} />
        </Route>
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
