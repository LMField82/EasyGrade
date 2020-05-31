import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
//import API from "../../utils/API";

function MainCard(){
    return (
        <div>
            
            <Card className="main center">
                <Card.Header as="h5">What Would You Like To Do?</Card.Header>
                <Card.Body>
                    <Row>
                        <Button className="home-btn center" variant="primary">Add A Student</Button>
                        <Button className="home-btn center" variant="primary">Add An Assignment</Button>
                        <Button className="home-btn center" variant="primary">Enter Grades</Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MainCard;