import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Noteslist from "./components/NotesList.jsx";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import TesistaView from "./screens/tesista-view.jsx";
import Login from "./screens/login.jsx";
import Navigation from "./components/Navigation"; // Importa tu componente Navigation
import MetodologoView from "./screens/metodologo-view.jsx";
import Asesor from "./screens/asesor-view.jsx";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Rutas que SÍ deben mostrar la Navigation */}
        <Route
          path="/*"
          element={
            <>
              <Navigation />
              <div className="container p-4">
                <Routes>
                  <Route path="/notas" element={<Noteslist />} />
                  <Route path="/edit/:id" element={<CreateNote />} />
                  <Route path="/create" element={<CreateNote />} />
                  <Route path="/user" element={<CreateUser />} />
                  <Route path="/TesistaView" element={<TesistaView />} />
                  <Route path="/MetodologoView" element={<MetodologoView />} />
                  <Route path="/asesor" element={<Asesor/>} />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;