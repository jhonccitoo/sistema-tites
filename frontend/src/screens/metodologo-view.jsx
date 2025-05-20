import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import logoUniversidad from "../assets/logo-urp1.png";
import asesor from "../assets/asesor.webp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function MetodologoView() {
  const [notes, setNotes] = useState([]);
  const [activeFilter, setActiveFilter] = useState("F.TITES 003");

  const { logout } = useAuth();
  console.log("Auth funcionando en Metodólogo");
  const navigate = useNavigate();

  const usuario = { rol: localStorage.getItem("userRole") };

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const res = await axios.get("http://localhost:4000/api/notes");
    setNotes(res.data);
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:4000/api/notes/${id}`);
    getNotes();
  };

  const handleFilterByTitle = (searchTerm) => {
    setActiveFilter(searchTerm);
  };

  const handleRedireccionar = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const filteredNotes = activeFilter
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(activeFilter.toLowerCase())
      )
    : notes;

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col style={{ width: "830px" }} className="bg-success text-white min-vh-100 p-3">
          <div className="text-center mb-4">
            <img src={logoUniversidad} className="img-fluid mb-2" alt="Logo Universidad" style={{ maxWidth: "150px" }} />
            <h4 className="fw-bold"> TITES </h4>
            <img src={asesor} className="img-fluid mb-2" alt="Foto Asesor" style={{ maxWidth: "150px", borderRadius: "50%", marginTop: 35 }} />
            <div className="mt-5">
              <h5>{usuario?.rol || "Rol"}</h5>
              <small>{usuario?.rol ? "USUARIO:" + usuario.rol : "Rol"}</small>
            </div>
          </div>

          <div className="d-grid gap-2">
            <Button variant="outline-light" onClick={() => handleFilterByTitle("F.TITES 003")}>
              Filtrar por F.TITES 003
            </Button>
            <Button variant="outline-light" onClick={() => handleFilterByTitle("F.TITES 004")}>
              Filtrar por F.TITES 004
            </Button>
          </div>

          <div className="mt-5 text-center">
            <Button variant="outline-light" size="sm" onClick={handleLogout}>
              Salir
            </Button>
          </div>
        </Col>

        <Col md={9} className="p-4">
          <div className="row">
            {filteredNotes.map((note) => (
              <div className="col-md-12 p-2" key={note._id}>
                <Card className="mb-3">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h5 className="mb-0">{note.title}</h5>
                        <small>{note.author}</small>
                      </div>
                      {usuario?.rol !== "tesista" && (
                        <Link className="btn btn-secondary btn-sm" to={`/edit/${note._id}`}>
                          Calificar
                        </Link>
                      )}
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div className="text-center me-4">
                        <small className="d-block fw-bold text-secondary">FORMULARIO</small>
                        <div className="d-flex gap-2 justify-content-center">
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() =>
                              usuario?.rol === "tesista" &&
                              handleRedireccionar("https://drive.google.com/drive/folders/1X4THssnsB4ZqGrzBd2H473U_GIHa1b12?usp=drive_link")
                            }
                          >
                            ⬇
                          </Button>
                        </div>
                        <small className="d-block fw-bold text-secondary mt-2">BORRADOR DE TESIS</small>
                        <div className="d-flex gap-2 justify-content-center">
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() =>
                              handleRedireccionar("https://drive.google.com/drive/folders/1X4THssnsB4ZqGrzBd2H473U_GIHa1b12?usp=drive_link")
                            }
                          >
                            ⬆
                          </Button>
                        </div>
                      </div>

                      <small className="text-muted me-3">{format(note.date)}</small>

                      <textarea
                        placeholder="Comentarios"
                        className="form-control w-25 me-4"
                        style={{ height: "120px", resize: "none" }}
                        defaultValue={note.content}
                      ></textarea>

                      <div className="text-center me-4">
                        <small className="d-block fw-bold text-secondary">APROBADO</small>
                        <div className="d-flex gap-2 justify-content-center">
                          <Button
                            variant={note.approvalStatus === "2" ? "success" : "outline-secondary"}
                            size="sm"
                          >
                            {note.approvalStatus === "2" ? "✔" : "☐"}
                          </Button>
                        </div>
                        <small className="d-block fw-bold text-secondary mt-2">DESAPROBADO</small>
                        <div className="d-flex gap-2 justify-content-center">
                          <Button
                            variant={note.approvalStatus === "1" ? "danger" : "outline-secondary"}
                            size="sm"
                          >
                            {note.approvalStatus === "1" ? "✘" : "☐"}
                          </Button>
                        </div>
                      </div>

                      {usuario?.rol !== "tesista" && (
                        <div className="text-center me-4">
                          <small className="d-block fw-bold text-secondary">MANDAR A CARPETA FINAL</small>
                          <div className="d-flex gap-2 justify-content-center">
                            <Button
                              variant="outline-success"
                              size="sm"
                              onClick={() =>
                                handleRedireccionar("https://drive.google.com/drive/folders/1iNe9_5MSC0yr-Tv1KQQx4NxqKtXnECVR?usp=sharing")
                              }
                            >
                              ✉️
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="d-flex justify-content-end">
                      {usuario?.rol !== "tesista" && (
                        <Button variant="danger" size="sm" onClick={() => deleteNote(note._id)}>
                          Delete
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
