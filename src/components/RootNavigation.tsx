"use client";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export function RootNavigation() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Bloodnight</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/mobs">Mobs</Nav.Link>
          <Nav.Link as={Link} href="/settings">Settings</Nav.Link>
          <Nav.Link as={Link} href="/items">Items</Nav.Link>
          <Nav.Link as={Link} href="/default_drops">Default Drops</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
