import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navigation() {
  const { isAuthenticated } = useAuth();
  const rol = localStorage.getItem("userRole");

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">TITES - URP</Navbar.Brand>
        <Nav className="me-right">
          {isAuthenticated && rol === "admin" && (
            <Nav.Link as={Link} to="/notas">Formularios</Nav.Link>
          )}
          {isAuthenticated && rol !== "tesista" && (
            <Nav.Link as={Link} to="/create">Crear Formularios</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}