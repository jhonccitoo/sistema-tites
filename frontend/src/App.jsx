import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';

import Navigation from "./components/Navigation";
import Noteslist from "./components/Noteslist";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

import Finalview from './screens/final-view.jsx';
import Login from "./screens/login.jsx";

function App() {
  return (
   /*  <Router>
      <Navigation />
      <div className="container p-4">
      <Routes>
        <Route path="/" element={<Noteslist />} />
        <Route path="/edit/:id" element={<CreateNote />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
      </div>
    </Router> */
  /*   <div>
    <Finalview/>
  </div>
 */

  <div>
    <Login/>
  </div>
  );
}

export default App;
