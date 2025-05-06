import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import logoUniversidad from "../assets/logo-urp1.png";
import { Link } from "react-router-dom"; // Importa Link
import Noteslist from "../components/NotesList";

function TesistaView() {
  const usuario = { rol: localStorage.getItem("userRole") };
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
              {/* Mostrar el rol del usuario */}
              <small>{usuario?.rol ? "USUARIO:" + usuario.rol : "Rol"}</small>
            </div>
          </div>

          <div className="d-grid gap-2">
            <Link to="/" className="btn btn-light text-start">
              Inicio
            </Link>
            <Link to="/TesistaView" className="btn btn-light text-start active">
              Revisión
            </Link>
            {usuario?.rol !== "tesista" && (
              <Link
                to="/TesistaFinalView"
                className="btn btn-light text-start active"
              >
                Carpeta Final
              </Link>
            )}
          </div>

          <div className="mt-5 text-center">
            <Button variant="outline-light" size="sm">
              <Link to="/">Salir</Link>
            </Button>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h4 className="mb-4">F.003</h4>

          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center justify-content-between">
              {/* DESCAGRAR / SUBIR */}
              <div>
                <h5 className="mb-0">SAMANIEGO PAQUIRACHI</h5>
                <small>Tesista</small>
              </div>
              <div className="text-center me-4">
                <small className="d-block fw-bold text-secondary">
                  DESCARGAR
                </small>
                <div className="d-flex gap-2 justify-content-center">
                  <Button variant="outline-success">⬇</Button>
                </div>
                <small className="d-block fw-bold text-secondary mt-2">
                  SUBIR
                </small>
                <div className="d-flex gap-2 justify-content-center">
                  <Button variant="outline-success">⬆</Button>
                </div>
              </div>

              {usuario?.rol !== "tesista" && (
                <div className="text-center me-4">
                  <small className="d-block fw-bold text-secondary">
                    APROBADO
                  </small>
                  <div className="d-flex gap-2 justify-content-center">
                    <Button variant="success">✔</Button>
                  </div>
                  <small className="d-block fw-bold text-secondary mt-2">
                    DESAPROBADO
                  </small>
                  <div className="d-flex gap-2 justify-content-center">
                    <Button variant="danger">✘</Button>
                  </div>
                </div>
              )}

              <textarea
                placeholder="Comentarios"
                className="form-control w-25"
                style={{ height: "80px", resize: "none" }}
              ></textarea>
            </Card.Body>
          </Card>
          <h4 className="mt-5">F.004</h4>

          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center justify-content-between">
              {/* DESCAGRAR / SUBIR */}
              <div>
                <h5 className="mb-0">SAMANIEGO PAQUIRACHI</h5>
                <small>Tesista</small>
              </div>
              <div className="text-center me-4">
                <small className="d-block fw-bold text-secondary">
                  DESCARGAR
                </small>
                <div className="d-flex gap-2 justify-content-center">
                  <Button variant="outline-success">⬇</Button>
                </div>
                <small className="d-block fw-bold text-secondary mt-2">
                  SUBIR
                </small>
                <div className="d-flex gap-2 justify-content-center">
                  <Button variant="outline-success">⬆</Button>
                </div>
              </div>

              {usuario?.rol !== "tesista" && (
                <div className="text-center me-4">
                  <small className="d-block fw-bold text-secondary">
                    APROBADO
                  </small>
                  <div className="d-flex gap-2 justify-content-center">
                    <Button variant="success">✔</Button>
                  </div>
                  <small className="d-block fw-bold text-secondary mt-2">
                    DESAPROBADO
                  </small>
                  <div className="d-flex gap-2 justify-content-center">
                    <Button variant="danger">✘</Button>
                  </div>
                </div>
              )}
              <textarea
                placeholder="Comentarios"
                className="form-control w-25"
                style={{ height: "80px", resize: "none" }}
              ></textarea>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TesistaView;
