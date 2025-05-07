import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import logoUniversidad from "../assets/logo-urp1.png";
import { Link } from "react-router-dom";

export default class Noteslist extends Component {
  state = {
    notes: [],
    filterTerm: '', // Para un campo de búsqueda
    activeFilter: ''
  };

  handleFilterByTitle = (searchTerm) => {
    this.setState({ activeFilter: searchTerm });
  };

  componentDidMount() {
    this.getNotes();
  }

  async getNotes() {
    const res = await axios.get("http://localhost:4000/api/notes");
    this.setState({ notes: res.data });
  }

  deleteNote = async (id) => {
    await axios.delete(`http://localhost:4000/api/notes/${id}`);
    this.getNotes();
  };

  handleRedireccionar = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  render() {
    const usuario = { rol: localStorage.getItem("userRole") };
    const { notes, activeFilter } = this.state;
    const filteredNotes = activeFilter
      ? notes.filter(note =>
          note.title.toLowerCase().includes(activeFilter.toLowerCase())
        )
      : notes;

    return (
      <Container fluid>
        <Row>
          {/* Sidebar */}
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
              <div className="mt-5">
                <h5>{usuario?.rol || "Rol"}</h5>{" "}
                <small>{usuario?.rol ? "USUARIO:" + usuario.rol : "Rol"}</small>
              </div>
            </div>

            <div className="d-grid gap-2">
              <Button variant="outline-light" onClick={() => this.handleFilterByTitle("F.TITES 003")}>
                Filtrar por F.TITES 003
              </Button>
              <Button variant="outline-light" onClick={() => this.handleFilterByTitle("F.TITES 004")}>
                Filtrar por F.TITES 004
              </Button>
            </div>

            <div className="mt-5 text-center">
              <Button variant="outline-light" size="sm">
                <Link to="/">Salir</Link>
              </Button>
            </div>
          </Col>

          <Col md={9} className="p-4">
            <Card className="mb-3">
              <Card.Body className="d-flex align-items-center justify-content-between">
                <Button variant="primary" className="mr-2" onClick={() => this.handleRedireccionar("https://drive.google.com/drive/folders/1X4THssnsB4ZqGrzBd2H473U_GIHa1b12?usp=drive_link")}>
                  Descargar
                </Button>
                <Button variant="success" className="mr-2" onClick={() => this.handleRedireccionar("https://drive.google.com/drive/folders/1X4THssnsB4ZqGrzBd2H473U_GIHa1b12?usp=drive_link")}>
                  SUBIR
                </Button>
                <Button variant="info" onClick={() => this.handleRedireccionar("https://drive.google.com/drive/folders/1X4THssnsB4ZqGrzBd2H473U_GIHa1b12?usp=drive_link")}>
                  FINAL
                </Button>
              </Card.Body>
            </Card>

            <div className="row">
              {filteredNotes.map((note) => (
                <div className="col-md-4 p-2" key={note._id}>
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <h5>{note.title}</h5>
                      {usuario?.rol !== "tesista" && (
                        <Link
                          className="btn btn-secondary"
                          to={`/edit/${note._id}`}
                        >
                          Edit
                        </Link>
                      )}
                    </div>
                    <div className="card-body">
                      <p>{note.author}</p>
                      <p>{note.content}</p>
                      <p>
                        Estado: <strong>
                          {note.approvalStatus === '1' ? 'DESAPROBADO' : note.approvalStatus === '2' ? 'APROBADO' : 'Estado Desconocido'}
                        </strong>
                      </p>
                    </div>

                    <p>{format(note.date)}</p>

                    {usuario?.rol !== "tesista" && (
                      <div className="card-footer">
                        <button
                          className="btn btn-danger"
                          onClick={() => this.deleteNote(note._id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}