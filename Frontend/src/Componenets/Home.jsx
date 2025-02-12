// src/components/Navbar.js

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../User/Login";

const Home = () => {
  return (
    <>
      <Navbar
        bg=""
        variant="dark"
        expand="lg"
        style={{ backgroundColor: "blue" }}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              BookStore
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                to="/"
                style={{
                  padding: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                User
              </Link>
              <Link
                to="/slogin"
                style={{
                  padding: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Seller
              </Link>
              <Link
                to="/alogin"
                style={{
                  padding: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Admin
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Login/> */}
    </>
  );
};

export default Home;
