import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import logoUrp from "../assets/logo-urp.png";

function Finalview() {
  return (
    <Container fluid>
      <Row>
        {/*INTERFAZ*/}
        <Col
          style={{ width: "830px" }}
          className="bg-success text-white min-vh-100 p-3"
        >
          <div className="text-center mb-4">
            <img
              src={logoUrp}
              className="img-fluid mb-2"
              alt="Logo Universidad"
              style={{ maxWidth: "150px" }}
            />
            <h4 className="fw-bold"> TITES </h4>
            <div className="mt-5">
              <h5>Jorge Carpio</h5>
              <small>METODÓLOGO</small>
            </div>
          </div>
          <div className="d-grid gap-2">
            <Button variant="light" className="text-start">
              Inicio
            </Button>
            <Button variant="light" className="text-start">
              Revisión
            </Button>
            <Button variant="light" className="text-start">
              Firmas
            </Button>
            <Button variant="light" className="text-start active">
              Carpeta Final
            </Button>
          </div>

          <div className="mt-5 text-center">
            <Button variant="outline-light" size="sm">
              Salir
            </Button>
          </div>
        </Col>

        {/*F003*/}
        <Col md={10} className="p-4">
          <h4 className="mb-4">F.003</h4>
          {/*PRIMERA PERSONA --------------------------------------------------------------------*/}
          <Card className="mb-3" style={{ backgroundColor: "#c8facc" }}>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h5 className="mb-0">SAMANIEGO PAQUIRACHI</h5>
                <small>Tesista</small>
              </div>
              <div className="text-center me-4">
                <small className="d-block fw-bold text-secondary">
                  MANDAR A CARPETA FINAL
                </small>
                <div className="d-flex gap-2 justify-content-center">
                  <Button variant="outline-success">✉️</Button>
                </div>
              </div>
              <div
                className="form-control w-25"
                style={{
                  height: "80px",
                  resize: "none",
                  color: "black",
                  padding: "8px",
                  fontSize: "13px",
                  overflow: "hidden", // Oculta la barra de scroll
                  backgroundColor: "#78d58c", // opcional, para que se vea como un textarea inactivo
                }}
              >
                <div>LISTO PARA ENVIAR</div>
                <div style={{ color: "red" }}>
                  ADVERTENCIA: Una vez enviado este documento se almacena en la
                  carpeta final y no se puede modificar
                </div>
              </div>
            </Card.Body>
          </Card>
          {/*SEGUNDA PERSONA----------------------------------------------------*/}
          <Card className="mb-3" style={{ backgroundColor: "#c8facc" }}>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h5 className="mb-0">PEREZ QUISPE</h5>
                <small>Tesista</small>
              </div>
              <div
                className="form-control w-25"
                style={{
                  height: "80px",
                  resize: "none",
                  color: "black",
                  padding: "8px",
                  fontSize: "13px",
                  overflow: "hidden", // Oculta la barra de scroll
                  backgroundColor: "#78d58c", // opcional, para que se vea como un textarea inactivo
                }}
              >
                <div>FALTA FIRMA DE: METODOLOGO</div>
              </div>
            </Card.Body>
          </Card>

          {/*F004*/}
          <h4 className="mt-5">F.004</h4>

          <Card className="mb-3" style={{ backgroundColor: "#c8facc" }}>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h5 className="mb-0">SAMANIEGO PAQUIRACHI</h5>
                <small>Tesista</small>
              </div>
              <div
                className="form-control w-25"
                style={{
                  height: "80px",
                  resize: "none",
                  color: "black",
                  padding: "8px",
                  fontSize: "13px",
                  overflow: "hidden", // Oculta la barra de scroll
                  backgroundColor: "#78d58c", // opcional, para que se vea como un textarea inactivo
                }}
              >
                <div>FALTA FIRMA DE: METODOLOGO, TESISTA</div>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-3" style={{ backgroundColor: "#c8facc" }}>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h5 className="mb-0">PEREZ QUISPE</h5>
                <small>Tesista</small>
              </div>
              <div
                className="form-control w-25"
                style={{
                  height: "80px",
                  resize: "none",
                  color: "black",
                  padding: "8px",
                  fontSize: "13px",
                  overflow: "hidden", // Oculta la barra de scroll
                  backgroundColor: "#78d58c", // opcional, para que se vea como un textarea inactivo
                }}
              >
                <div>FALTA FIRMA DE: METODOLOGO, TESISTA, CARPETA FINAL </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Finalview;
