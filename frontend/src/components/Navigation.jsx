import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">NotesApp</Navbar.Brand>
            <Nav className="me-right">
              <Nav.Link href="/">Notes</Nav.Link>
              <Nav.Link href="/create">Create Note</Nav.Link>
              <Nav.Link href="/user">Create User</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
