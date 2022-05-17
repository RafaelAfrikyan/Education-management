import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home.jsx";
import Hall from "./Components/Hall.jsx";
import CreateClasslist from "./Components/CreateClasslist.jsx";

import Faculties from "./Pages/Faculties/Faculties.jsx";
import Lectures from "./Pages/Lectures.jsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element="" />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="hall" element={<Hall />} />
          <Route path="course" element={<Faculties />} />
          <Route path="create" element={<CreateClasslist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
