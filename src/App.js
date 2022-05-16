import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Hall from "./Components/Hall";
import Course from "./Components/Course";
import CreateClasslist from "./Components/CreateClasslist";
import Lectures from "./Pages/Lecturers/Lectures";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="hall" element={<Hall />} />
          <Route path="course" element={<Course />} />
          <Route path="create" element={<CreateClasslist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
