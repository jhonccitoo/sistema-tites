import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import foto from "../assets/foto.jpg";
import Subir from "../assets/subir.svg";

function TarjetaTesista({ nombre = "", fondo = "#c8facc" }) {
  const fileInputRef = useRef(null);
  const [archivoSubido, setArchivoSubido] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`${nombre} subió:`, file.name);
      setArchivoSubido(true);
    }
  };

  const handleBotonClick = () => {
    if (archivoSubido) {
      alert(`${nombre}: Archivo subido`);
    } else {
      alert(`${nombre}: Primero sube un archivo`);
    }
  };

  return (
    <Card className="mb-3" style={{ backgroundColor: fondo }}>
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div style={{ width: 230 }}>
          <h5 className="mb-0">{nombre}</h5>
          <small>Tesista</small>
        </div>

        <div className="text-center me-4">
          <div style={{ display: "flex", gap: 100 }}>
            <img
              src={Subir}
              alt="Subir archivo"
              style={{
                width: "60px",
                height: "60px",
                cursor: "pointer",
                marginRight: 20,
              }}
              onClick={handleImageClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div
          className="form-control w-25"
          style={{
            height: "95px",
            resize: "none",
            color: "black",
            padding: "8px",
            fontSize: "13px",
            overflow: "hidden",
            backgroundColor: "#78d58c",
          }}
        >
          <button
            onClick={handleBotonClick}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            LISTO PARA ENVIAR
          </button>
          <div style={{ color: "red", fontSize: 10, marginTop: 5 }}>
            ADVERTENCIA: Una vez enviado este documento se almacenará en la
            carpeta final y no se permite modificaciones futuras
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

function MensajeTesista({ nombre, mensaje, fondo = "#c8facc" }) {
  return (
    <Card className="mb-3" style={{ backgroundColor: fondo }}>
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div style={{ width: 230 }}>
          <h5 className="mb-0">{nombre}</h5>
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
            overflow: "hidden",
            backgroundColor: "#78d58c",
          }}
        >
          <div>{mensaje}</div>
        </div>
      </Card.Body>
    </Card>
  );
}

function Finalview() {
  return (
    <Container fluid>
      <Row>
        {/* Menú lateral */}
        <Col
          style={{
            width: "830px",
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
          className="bg-success text-white min-vh-100 p-3"
        >
          <div className="text-center mb-4">
            <h4
              className="fw-bold"
              style={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 10,
                left: 10,
              }}
            >
              {" "}
              TITES{" "}
            </h4>
            <img
              src={foto}
              className="img-fluid mb-2"
              alt="Foto Asesor"
              style={{
                maxWidth: "150px",
                borderRadius: "50%",
                marginTop: 35,
              }}
            />
            <div className="mt-5">
              <h5>Rogelio Minaya</h5>
              <small>ASESOR</small>
            </div>
          </div>
          <div className="d-grid gap-2">
            <Button
              variant="light"
              className="text-start"
              style={{
                backgroundColor: "transparent",
                border: "transparent",
                fontWeight: 700,
              }}
            >
              Inicio
            </Button>
            <Button
              variant="light"
              className="text-start"
              style={{
                backgroundColor: "transparent",
                border: "transparent",
                fontWeight: 700,
              }}
            >
              Revisión
            </Button>
            <Button
              variant="light"
              className="text-start"
              style={{
                backgroundColor: "transparent",
                border: "transparent",
                fontWeight: 700,
              }}
            >
              Firmas
            </Button>
            <Button
              variant="light"
              className="text-start active"
              style={{
                backgroundColor: "lightgreen",
                border: "transparent",
                fontWeight: 700,
              }}
            >
              Carpeta Final
            </Button>
          </div>

          <div className="mt-5 text-center">
            <Button
              variant="outline-light"
              size="sm"
              style={{ border: "transparent", color: "black", fontWeight: 700 }}
            >
              Salir
            </Button>
          </div>
        </Col>

        {/* Contenido principal */}
        <Col md={10} className="p-4">
          <h4 className="mb-4">F.003</h4>
          <TarjetaTesista nombre="ANDERSON REYES" />
          <MensajeTesista
            nombre="PERCY QUISPE"
            mensaje="FALTA FIRMA DEL METODOLOGO"
          />

          <h4 className="mb-4">F.004</h4>
          <TarjetaTesista nombre="JOSE MARQUEZ" fondo="#6dfd79" />
          <MensajeTesista
            nombre="ADRIAN RETAMOZO"
            mensaje="FALTA FIRMA DE TESISTA Y METODOLOGO"
            fondo="#6dfd79"
          />

          <h4 className="mb-4">F.005</h4>
          <TarjetaTesista nombre="JADE CORDOVA" />
          <MensajeTesista
            nombre="JERZY CARRASCO"
            mensaje="FALTA FIRMA DEL TESISTA"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Finalview;
