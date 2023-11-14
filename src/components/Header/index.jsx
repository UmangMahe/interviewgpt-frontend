import { Button, Image } from "antd";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "/images/logo.webp";

function Header(props) {
  return (
    <Navbar>
        <Navbar.Brand>
          <Image src={Logo} preview={false} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-4 me-5 d-flex align-items-center">
            <Nav.Link className="active">Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Benefits</Nav.Link>
            <Nav.Item className="ms-4">
                <Button type="primary">Go to App</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
