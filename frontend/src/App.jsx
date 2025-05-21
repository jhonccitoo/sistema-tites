import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotesList from "./components/NotesList.jsx";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import TesistaView from "./screens/tesista-view.jsx";
import Login from "./screens/login.jsx";
import Navigation from "./components/Navigation"; // Importa tu componente Navigation
import MetodologoView from "./screens/metodologo-view.jsx";
import Asesor from "./screens/asesor-view.jsx";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Matricula from "./screens/matricula.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
              <>
                <Navigation />
                <div className="container p-4">
                  <Routes>
                    <Route path="/notas" element={<NotesList />} />
                    <Route path="/edit/:id" element={<CreateNote />} />
                    <Route path="/create" element={<CreateNote />} />
                    <Route path="/user" element={<CreateUser />} />
                    <Route path="/TesistaView" element={<TesistaView />} />
                    <Route path="/MetodologoView" element={<MetodologoView />} />
                    <Route path="/asesor" element={<Asesor />} />
                    <Route path="/matricula" element={<Matricula />} /> 
                </Routes>
                </div>
              </>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;