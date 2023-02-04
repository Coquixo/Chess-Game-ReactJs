import React from "react";
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const MyNavbar = () => {
    const navigate = useNavigate();

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="border-bottom border-warning border-2 d-flex justify-content-evenly">
            <Container>
                <Navbar.Brand className=" text-info fw-bold font-monospace ">
                    Chess Game
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link
                            onClick={() => navigate("/mainGame")}
                            className="nameNavBar text-warning  ">
                            New Game
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => navigate("/members")}
                            className="nameNavBar text-warning  ">
                            Profile
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => navigate("/members/history")}
                            className="nameNavBar text-warning  ">
                            Matches History
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
