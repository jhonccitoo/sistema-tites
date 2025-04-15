import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import foto from './assets/foto.jpg'
import Descarga from './assets/download-icon.svg'

function Finalview() {
    return(
        <Container fluid>
            <Row>
                {/*INTERFAZ*/}
            <Col style={{ width: '830px',position: 'sticky', top: 0,height: '100vh'}} className="bg-success text-white min-vh-100 p-3">
                <div className="text-center mb-4">
                    
                    <h4 className='fw-bold'style={{ margin: 0, padding: 0, position: 'absolute', top: 10, left: 10 }}> TITES </h4>
                    <img
                        src={foto}
                        className="img-fluid mb-2"
                        alt="Foto Asesor"
                        style={{ maxWidth: '150px',
                        borderRadius: '50%',
                        marginTop: 35,
                         }}
                    />
                    <div className="mt-5">
                        <h5>Rogelio Minaya</h5>
                        <small>ASESOR</small>
                    </div>
                </div>
                <div className="d-grid gap-2">
                <Button variant="light" className="text-start" style={{backgroundColor: 'transparent', border: 'transparent',fontWeight:700}}>Inicio</Button>
                <Button variant="light" className="text-start active"style={{backgroundColor: 'lightgreen', border: 'transparent',fontWeight:700}}>Revisión</Button>
                <Button variant="light" className="text-start"style={{backgroundColor: 'transparent', border: 'transparent',fontWeight:700}}>Firmas</Button>
                <Button variant="light" className="text-start"style={{backgroundColor: 'transparent', border: 'transparent',fontWeight:700}}>Carpeta Final</Button>
                </div>

                <div className="mt-5 text-center">
                <Button variant="outline-light" size="sm" style={{border:'transparent',color:'black',fontWeight:700}}>Salir</Button>
                </div>
            </Col>
            
            <Col md={10} className="p-4">
          <h4 className="mb-4">F.005</h4>
            {/*N°1 TESISTA*/}
          <Card className="mb-3" style={{ backgroundColor: '#c8facc' }}>

            <Card.Body className="d-flex align-items-center justify-content-between">
              <div style={{width:230}}>
                    <h5 className='mb-0'>ANDERSON REYES</h5>
                    <small>Tesista</small>
              </div>
              <div className="text-center me-4">
                <div style={{display: 'flex',gap:100}}>
                <img 
                  src={Descarga}
                  alt="Descargar F005"
                  style={{ 
                    width: '60px',
                    height: '60px',
                    cursor:'pointer',
                    marginRight: 20,
                  }}>
                </img>
                  <div className='boton-conteiner'>
                    <Button variant="outline-success" size="lg" style={{ borderRadius: '50%', margin:10}}>✓</Button>
                    <Button variant="outline-danger" size="lg"  style={{ borderRadius: '50%', margin:10}}>X</Button>
                  </div>
                </div>
              </div>
              <div className="form-control w-25"
                    style={{
                    height: '80px',
                    resize: 'none',
                    color: 'black',
                    padding: '8px',
                    fontSize: '13px',
                    overflow: 'hidden',
                    backgroundColor: '#78d58c'
                    }}
>
                <div>Comentarios</div>
            </div>
            </Card.Body>
          </Card>
            {/*N°2 TESISTA*/}
          <Card className="mb-3" style={{ backgroundColor: '#6dfd79' }}>
            <Card.Body className="d-flex align-items-center justify-content-between">
             <div style={{width:230}}>
                    <h5 className='mb-0'>PERCY QUISPE</h5>
                    <small>Tesista</small>
              </div>

              <div className="text-center me-4">
                <div style={{display: 'flex',gap:100}}>
                <img 
                  src={Descarga}
                  alt="Descargar F005"
                  style={{ 
                    width: '60px',
                    height: '60px',
                    cursor:'pointer',
                    marginRight: 20,
                  }}>
                </img>
                  <div className='boton-conteiner'>
                    <Button variant="outline-success" size="lg" style={{ borderRadius: '50%', margin:10}}>✓</Button>
                    <Button variant="outline-danger" size="lg"  style={{ borderRadius: '50%', margin:10}}>X</Button>
                  </div>
                </div>
              </div>

              <div className="form-control w-25"
                    style={{
                    height: '80px',
                    resize: 'none',
                    color: 'black',
                    padding: '8px',
                    fontSize: '13px',
                    overflow: 'hidden',
                    backgroundColor: '#78d58c'
                    }}
>
                <div>Comentarios</div>
            </div>
            </Card.Body>
          </Card>      
        </Col>
            </Row>
        </Container>
    )
}

export default Finalview;