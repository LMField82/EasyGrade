import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, InputGroup } from "react-bootstrap";
import MainCard from "../components/MainCard";
import MyNav from "../components/Nav";
import InputCard from "../components/InputCard"

function Home() {
    return (
        <div>
            <MyNav />
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <MainCard />
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <InputCard />
            </Container>
        </div>
    )
}

export default Home;