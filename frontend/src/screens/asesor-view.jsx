import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import logoUniversidad from "../assets/logo-urp1.png";
import { Link } from "react-router-dom";
import asesor from "../assets/asesor.webp";

export default class Noteslist extends Component {
  state = {
    notes: [],
    filterTerm: "",
    activeFilter: "",
    noteUIState: {},
    noteContent: {},
    showModal: false,
    modalContent: {
      title: "",
      content: "",
      estado: "",
    },
  };

  handleFilterByTitle = (searchTerm) => {
    this.setState({ activeFilter: searchTerm });
  };

  componentDidMount() {
    this.getNotes();
  }

  async getNotes() {
    try {
      const res = await axios.get("http://localhost:4000/api/notes");
      const noteUIStateInicial = {};
      const noteContentInicial = {};
      res.data.forEach((note) => {
        noteUIStateInicial[note._id] = {
          aprobado: note.approvalStatus === "2",
          desaprobado: note.approvalStatus === "1",
        };
        noteContentInicial[note._id] = note.content;
      });

      this.setState(
        {
          notes: res.data,
          noteUIState: noteUIStateInicial,
          noteContent: noteContentInicial,
        },
        () => {
          const userRole = localStorage.getItem("userRole");
          if (userRole === "asesor") {
            this.setState({ activeFilter: "F.TITES 003" });
          }
        }
      );
    } catch (error) {
      console.error("Error al obtener las notas:", error);
      alert("Ocurrió un error al obtener las notas.");
    }
  }

  deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/notes/${id}`);
      this.getNotes();
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
      alert("No se pudo eliminar la nota.");
    }
  };

  handleRedireccionar = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  actualizarEstadoAprobacion = async (id, status) => {
    try {
      const contenido = this.state.noteContent[id];
      await axios.put(`http://localhost:4000/api/notes/${id}`, {
        approvalStatus: status,
        content: contenido,
      });

      const note = this.state.notes.find((n) => n._id === id);
      const estadoTexto = status === "2" ? "Aprobado" : "Desaprobado";

      this.setState((prevState) => ({
        noteUIState: {
          ...prevState.noteUIState,
          [id]: {
            aprobado: status === "2",
            desaprobado: status === "1",
          },
        },
        showModal: true,
        modalContent: {
          title: note.title,
          content: contenido,
          estado: estadoTexto,
        },
      }));
    } catch (error) {
      console.error("Error al actualizar aprobación:", error);
      alert("No se pudo actualizar el estado de aprobación.");
    }
  };

  handleCloseModal = () => { // Para mostrar ventana flotante
    this.setState({ showModal: false });
  };

  render() {
    const usuario = { rol: localStorage.getItem("userRole") };
    const { notes, activeFilter, noteUIState, noteContent, showModal, modalContent } = this.state;
    const filteredNotes = activeFilter
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(activeFilter.toLowerCase())
        )
      : notes;

    return (
      <Container fluid>
        <Row>
          <Col
            style={{ width: "830px" }}
            className="bg-success text-white min-vh-100 p-3"
          >
            <div className="text-center mb-4">
              <img
                src={logoUniversidad}
                className="img-fluid mb-2"
                alt="Logo Universidad"
                style={{ maxWidth: "150px" }}
              />
              <h4 className="fw-bold"> TITES </h4>
              <img
                src={asesor}
                className="img-fluid mb-2"
                alt="Foto Asesor"
                style={{
                  maxWidth: "150px",
                  borderRadius: "50%",
                  marginTop: 35,
                }}
              />
              <div className="mt-5">
                <h5>{usuario?.rol || "Rol"}</h5>
                <small>
                  {usuario?.rol ? "USUARIO: " + usuario.rol : "Rol"}
                </small>
              </div>
            </div>

            <div className="d-grid gap-2">
              <Button
                variant="outline-light"
                onClick={() => this.handleFilterByTitle("F.TITES 003")}
              >
                Filtrar por F.TITES 003
              </Button>
              <Button
                variant="outline-light"
                onClick={() => this.handleFilterByTitle("F.TITES 004")}
              >
                Filtrar por F.TITES 004
              </Button>
              <Button
                variant="outline-light"
                onClick={() => this.handleFilterByTitle("F.TITES 005")}
              >
                Filtrar por F.TITES 005
              </Button>
              <Button
                variant="outline-light"
                onClick={() => this.handleFilterByTitle("F.TITES 007")}
              >
                Filtrar por F.TITES 007
              </Button>
              <Button
                variant="outline-light"
                onClick={() => this.handleFilterByTitle("F.TITES 008")}
              >
                Filtrar por F.TITES 008
              </Button>
              <Button
                variant="outline-light"
                onClick={() => this.handleFilterByTitle("F.TITES 009")}
              >
                Filtrar por F.TITES 009
              </Button>
              <Button
                variant="outline-light"
                onClick={() => this.handleFilterByTitle("F.TITES 010")}
              >
                Filtrar por F.TITES 010
              </Button>
            </div>

            <div className="mt-5 text-center">
              <Button variant="outline-light" size="sm">
                <Link to="/">Salir</Link>
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
                                this.handleRedireccionar("https://drive.google.com/drive/folders/1X4THssnsB4ZqGrzBd2H473U_GIHa1b12?usp=drive_link")
                              }
                            >
                              ⬇
                            </Button>
                          </div>
                          <small className="d-block fw-bold text-secondary mt-2">SUBIR</small>
                          <div className="d-flex gap-2 justify-content-center">
                            <Button
                              variant="outline-success"
                              size="sm"
                              onClick={() =>
                                this.handleRedireccionar("https://drive.google.com/drive/folders/1X4THssnsB4ZqGrzBd2H473U_GIHa1b12?usp=drive_link")
                              }
                            >
                              ⬆
                            </Button>
                          </div>
                        </div>

                        <small className="text-muted me-3">
                          {format(note.date)}
                        </small>

                        <textarea
                          placeholder="Comentarios"
                          className="form-control w-25 me-4"
                          style={{
                            height: "120px",
                            resize: "none",
                            backgroundColor: "#fff",
                            cursor: "text",
                          }}
                          value={noteContent[note._id] || ""}
                          onChange={(e) => {
                            const value = e.target.value;
                            this.setState((prevState) => ({
                              noteContent: {
                                ...prevState.noteContent,
                                [note._id]: value,
                              },
                            }));
                          }}
                        />

                        <div className="text-center me-4">
                          <small className="d-block fw-bold text-secondary">
                            APROBADO
                          </small>
                          <div className="d-flex gap-2 justify-content-center">
                            <Button
                              variant={
                                noteUIState[note._id]?.aprobado
                                  ? "success"
                                  : "outline-secondary"
                              }
                              size="sm"
                              onClick={() =>
                                this.actualizarEstadoAprobacion(note._id, "2")
                              }
                            >
                              {noteUIState[note._id]?.aprobado ? "✔" : "☐"}
                            </Button>
                          </div>
                          <small className="d-block fw-bold text-secondary mt-2">
                            DESAPROBADO
                          </small>
                          <div className="d-flex gap-2 justify-content-center">
                            <Button
                              variant={
                                noteUIState[note._id]?.desaprobado
                                  ? "danger"
                                  : "outline-secondary"
                              }
                              size="sm"
                              onClick={() =>
                                this.actualizarEstadoAprobacion(note._id, "1")
                              }
                            >
                              {noteUIState[note._id]?.desaprobado ? "✘" : "☐"}
                            </Button>
                          </div>
                        </div>

                        {usuario?.rol !== "tesista" && (
                          <div className="text-center me-4">
                            <small className="d-block fw-bold text-secondary">MANDAR A CARPETA FINAL</small>
                            <div className="d-flex gap-2 justify-content-center">
                              <Button
                                variant={noteUIState[note._id]?.aprobado ? "success" : "outline-secondary"}
                                size="sm"
                                disabled={!noteUIState[note._id]?.aprobado}
                                style={{
                                  opacity: noteUIState[note._id]?.aprobado
                                    ? 1
                                    : 0.5,
                                  cursor: noteUIState[note._id]?.aprobado
                                    ? "pointer"
                                    : "not-allowed",
                                }}
                                onClick={() =>
                                  this.handleRedireccionar("https://drive.google.com/drive/folders/1iNe9_5MSC0yr-Tv1KQQx4NxqKtXnECVR?usp=sharing")
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
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => this.deleteNote(note._id)}
                          >
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

        <Modal show={showModal} onHide={this.handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Nota actualizada</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Título:</strong> {modalContent.title}</p>
            <p><strong>Contenido:</strong> {modalContent.content}</p>
            <p><strong>Estado:</strong> {modalContent.estado}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
