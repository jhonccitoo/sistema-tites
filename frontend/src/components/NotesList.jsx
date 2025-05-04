import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import logoUniversidad from "../assets/logo-urp1.png";
import { Link } from "react-router-dom";
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function ToggleButtonExample() {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'DESAPROBADO', value: '1' },
    { name: 'APROBADO', value: '2' },
  ];
  return(
    <>
    <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  )
}


export default class Noteslist extends Component {
  state = {
    notes: [],
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

  render() {
    const usuario = { rol: localStorage.getItem("userRole") };
    return (
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} className="bg-success text-white min-vh-100 p-3">
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
                {/* Mostrar el rol del usuario */}
                <small>{usuario?.rol ? "USUARIO:" + usuario.rol : "Rol"}</small>
              </div>
            </div>

            <div className="d-grid gap-2">
              <Link to="/" className="btn btn-light text-start">
                Inicio
              </Link>
              <Link
                to="/TesistaView"
                className="btn btn-light text-start active"
              >
                Revisión
              </Link>
              <Link to="/TesistaFinalView" className="btn btn-light text-start">
                Carpeta Final
              </Link>
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
                
              </Card.Body>
            </Card>



            <div className="row">
              {this.state.notes.map((note) => (
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
                    </div>
                    {usuario?.rol !== "tesista" && (
                    <ToggleButtonExample />
                  )}

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
