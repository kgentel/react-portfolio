import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/image.jpg"
import { Container, Row, Col, Image } from "react-bootstrap";
import './about_me.css';

function aboutMe () {
    return (
        <Container className="aboutMe" id="about_me">
            <Row>
                <Col></Col>
                <Col>
                <Image className="image" src={image}></Image>
                </Col>
                <Col>
                <h6 className="intro">
                    Hi, I'm Katie
                </h6>
                <p className="sansita">I am a full stack web developer</p>
                <p className="intro">
                    A little about me.
                </p></Col>
                <Col></Col>
            </Row>
        </Container>
    )
};

export default aboutMe;