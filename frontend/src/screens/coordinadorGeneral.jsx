import React, { useState } from "react";
import { Container, Row, Col, Button, Card, ListGroup, Badge, Form, InputGroup } from "react-bootstrap";
import { ArrowDown, ArrowUp, Check, X } from "react-bootstrap-icons";

function CoordinadorGeneralView() {
  const [activeForm, setActiveForm] = useState("F. TITES 009");

  // Sample student data
  const students = [
    { id: 1, name: "SAMANIEGO PAQUIRACHI", status: "pendiente" },
    { id: 2, name: "RODRIGUEZ MARTINEZ", status: "aprobado" },
    { id: 3, name: "GARCIA LOPEZ", status: "desaprobado" },
    { id: 4, name: "FERNANDEZ TORRES", status: "pendiente" },
  ];

  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        {/* Sidebar */}
        <Col md={2} className="bg-success text-white min-vh-100 p-3">
          <div className="text-center mb-4">
            <img
              src="/placeholder.svg"
              className="img-fluid mb-2"
              alt="Logo Universidad"
              style={{ maxWidth: "150px" }}
            />
            <h4 className="fw-bold">TITES</h4>
            <div className="mt-5">
              <h5>Laura Mendoza</h5>
              <small>COORDINADOR GENERAL</small>
            </div>
          </div>

          <div className="d-grid gap-2">
            {["F. TITES 009", "F. TITES 010", "F. TITES 012", "F. TITES 013", "F. TITES 016"].map((form) => (
              <Button
                key={form}
                variant={activeForm === form ? "light" : "outline-light"}
                className="text-start"
                onClick={() => setActiveForm(form)}
              >
                {form}
              </Button>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Button variant="outline-light" size="sm">
              <i className="bi bi-box-arrow-right me-2"></i>
              Salir
            </Button>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
            <h3 className="mb-3 mb-md-0">{activeForm}</h3>
            <div className="d-flex gap-2">
              <Button variant="outline-success">
                Exportar Lista
              </Button>
              <Button variant="success">
                Ver Estadísticas
              </Button>
            </div>
          </div>

          <Card className="mb-4 bg-light">
            <Card.Body>
              <h5 className="mb-2">Descripción del Formulario</h5>
              <p className="text-secondary">{getFormDescription(activeForm)}</p>
            </Card.Body>
          </Card>

          {/* Filter and Search */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-4 gap-3">
            <Form.Group style={{ width: "100%", maxWidth: "300px" }}>
              <Form.Control type="text" placeholder="Buscar tesista..." />
            </Form.Group>
            <Form.Group>
              <Form.Select>
                <option>Todos los estados</option>
                <option>Pendientes</option>
                <option>Aprobados</option>
                <option>Desaprobados</option>
              </Form.Select>
            </Form.Group>
          </div>

          {/* Student List */}
          <ListGroup className="mb-4">
            {students.map((student) => (
              <ListGroup.Item key={student.id} className="mb-3 p-0 border-0">
                <Card>
                  <Card.Body className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
                    <div style={{ minWidth: "200px" }}>
                      <h5 className="mb-0">{student.name}</h5>
                      <small>Tesista</small>
                      <div className="mt-1">
                        <Badge bg={
                          student.status === "aprobado" ? "success" : 
                          student.status === "desaprobado" ? "danger" : "warning"
                        }>
                          {student.status.toUpperCase()}
                        </Badge>
                      </div>
                    </div>

                    {/* Download/Upload */}
                    <div className="text-center me-4">
                      <small className="d-block fw-bold text-secondary">
                        DESCARGAR
                      </small>
                      <div className="d-flex gap-2 justify-content-center">
                        <Button variant="outline-success">
                          <ArrowDown size={16} />
                          <span className="visually-hidden">Descargar</span>
                        </Button>
                      </div>
                      <small className="d-block fw-bold text-secondary mt-2">
                        SUBIR
                      </small>
                      <div className="d-flex gap-2 justify-content-center">
                        <Button variant="outline-success">
                          <ArrowUp size={16} />
                          <span className="visually-hidden">Subir</span>
                        </Button>
                      </div>
                    </div>

                    {/* Approve/Disapprove */}
                    <div className="text-center me-4">
                      <small className="d-block fw-bold text-secondary">
                        APROBADO
                      </small>
                      <div className="d-flex gap-2 justify-content-center">
                        <Button 
                          variant={student.status === "aprobado" ? "success" : "outline-success"}
                        >
                          <Check size={16} />
                          <span className="visually-hidden">Aprobado</span>
                        </Button>
                      </div>
                      <small className="d-block fw-bold text-secondary mt-2">
                        DESAPROBADO
                      </small>
                      <div className="d-flex gap-2 justify-content-center">
                        <Button 
                          variant={student.status === "desaprobado" ? "danger" : "outline-danger"}
                        >
                          <X size={16} />
                          <span className="visually-hidden">Desaprobado</span>
                        </Button>
                      </div>
                    </div>

                    {/* Comments */}
                    <Form.Control
                      as="textarea"
                      placeholder="Comentarios"
                      className="w-100 w-md-25"
                      style={{ height: "80px", resize: "none" }}
                      defaultValue={getDefaultComment(student.status)}
                    />
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Pagination */}
          <div className="d-flex justify-content-center">
            <Button variant="outline-secondary" size="sm" className="mx-1">Anterior</Button>
            <Button variant="outline-success" size="sm" className="mx-1">1</Button>
            <Button variant="outline-secondary" size="sm" className="mx-1">2</Button>
            <Button variant="outline-secondary" size="sm" className="mx-1">3</Button>
            <Button variant="outline-secondary" size="sm" className="mx-1">Siguiente</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

// Helper function to get form descriptions
function getFormDescription(formName) {
  const descriptions = {
    "F. TITES 009": "Formulario de evaluación del plan de tesis por el asesor temático. Incluye criterios de evaluación sobre la relevancia, metodología y viabilidad del proyecto.",
    "F. TITES 010": "Formulario de evaluación del plan de tesis por el asesor metodológico. Evalúa aspectos metodológicos, estructura y coherencia del plan.",
    "F. TITES 012": "Formulario de aprobación del borrador de tesis. Verifica que el documento cumpla con los requisitos formales y de contenido antes de la sustentación.",
    "F. TITES 013": "Formulario de evaluación de la sustentación de tesis. Califica la presentación oral y defensa del trabajo de investigación.",
    "F. TITES 016": "Formulario de verificación final de documentos. Confirma que todos los documentos requeridos estén completos para el archivo institucional."
  };

  return descriptions[formName] || "Descripción no disponible para este formulario.";
}

// Helper function to get default comments based on status
function getDefaultComment(status) {
  if (status === "aprobado") return "El trabajo cumple con los requisitos establecidos. Aprobado.";
  if (status === "desaprobado") return "El trabajo requiere correcciones importantes antes de ser aprobado.";
  return "";
}

export default CoordinadorGeneralView;