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
import ResetPassword from "./screens/reset-password.jsx"; // 👈 Importa la nueva pantalla
import TarjetaRevision from "./screens/asesor-revision.jsx";
import TarjetaTesista from "./screens/asesor-carpetafinal.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Routes>
          {/* Rutas originales */}
          <Route path="/" element={<Noteslist />} />
          <Route path="/edit/:id" element={<CreateNote />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/user" element={<CreateUser />} />

          {/* Pantallas adicionales */}
          <Route path="/tesista" element={<TesistaView />} />
          <Route path="/final" element={<Finalview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} /> {/* 👈 Nueva ruta */}
          <Route path="/asesor-revision" element={<TarjetaRevision />} />
          <Route path="/asesor-carpetafinal" element={<TarjetaTesista />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
