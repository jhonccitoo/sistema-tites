import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../context/AuthContext";

export default function Navigation() {
  const { isAuthenticated } = useAuth();
  const rol = localStorage.getItem("userRole"); // Puedes mejorar esto con contexto

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">TITES - URP</Navbar.Brand>
        <Nav className="me-right">
          {isAuthenticated && rol === "admin" && (
            <Nav.Link href="/notas">Formularios</Nav.Link>
          )}
          {isAuthenticated && rol !== "tesista" && (
            <Nav.Link href="/create">Crear Formularios</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
