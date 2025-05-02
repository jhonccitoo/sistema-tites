import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Noteslist from "./components/Noteslist";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import TesistaView from "./screens/tesista-view.jsx";
import Finalview from "./screens/final-view.jsx";
import Login from "./screens/login.jsx";
import TarjetaRevision from "./screens/asesor-revision.jsx";
import TarjetaTesista from "./screens/asesor-carpetafinal.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route path="/notas" element={<Noteslist />} />
          <Route path="/edit/:id" element={<CreateNote />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/user" element={<CreateUser />} />
          <Route path="/" element={<Login />} />
          <Route path="/TesistaView" element={<TesistaView />} />
          <Route path="/Finalview" element={<Finalview />} />
          <Route path="/TarjetaRevision" element={<TarjetaRevision />} />
          <Route path="/TarjetaTesista" element={<TarjetaTesista />} />
        </Routes>
      </div>
    </Router>

    /*   <div>
      <Login />
    </div>
     */
  );
}

export default App;
