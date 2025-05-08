import React, { useState } from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import logoUniversidad from "../assets/logo-urp1.png";

const formularios = [
  "F. TITES 009",
  "F. TITES 010",
  "F. TITES 012",
  "F. TITES 013",
  "F. TITES 016",
];

const datosMock = {
  "F. TITES 009": [
    { nombre: "Samaniego Paquirachi", estado: "En revisión" },
    { nombre: "Juan Pérez", estado: "Aprobado" },
  ],
  "F. TITES 010": [
    { nombre: "Samaniego Paquirachi", estado: "Pendiente" },
    { nombre: "Ana López", estado: "En revisión" },
  ],
  // Rellenar los demás formularios si deseas
};

function CoordinadorView() {
  const [formularioSeleccionado, setFormularioSeleccionado] = useState(null);

  const handleFormularioClick = (form) => {
    setFormularioSeleccionado(form);
  };

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
            <h4 className="fw-bold">TITES</h4>
            <div className="mt-5">
              <h5>Coordinador General</h5>
              <small>Gestión de Formatos</small>
            </div>
          </div>

          <div className="d-grid gap-2">
            {formularios.map((form) => (
              <Button
                key={form}
                variant="light"
                className={`text-start ${
                  formularioSeleccionado === form ? "active" : ""
                }`}
                onClick={() => handleFormularioClick(form)}
              >
                {form}
              </Button>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Button variant="outline-light" size="sm">
              Salir
            </Button>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h4 className="mb-4">
            {formularioSeleccionado
              ? `Avances: ${formularioSeleccionado}`
              : "Seleccione un formulario"}
          </h4>

          {formularioSeleccionado &&
            (datosMock[formularioSeleccionado] || []).map((alumno, index) => (
              <Card className="mb-3" key={index}>
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="mb-0">{alumno.nombre}</h5>
                    <small>Estado: {alumno.estado}</small>
                  </div>
                  <textarea
                    placeholder="Comentarios del coordinador"
                    className="form-control w-50"
                    style={{ height: "80px", resize: "none" }}
                  ></textarea>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default CoordinadorView;
