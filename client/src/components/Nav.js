import React from "react";
//import{ Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
//import API from "../../utils/API";

function MyNav({ page }) {
    return (
        <Nav className="navbar" defaultActiveKey="/home" variant="tabs">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/students">Student Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/assignments">Assignment Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/grades">Grading Info</Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

export default MyNav;