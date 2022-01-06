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
                <Col xs={5}>
                <p className="intro">
                    Hi, I'm Katie
                </p>
                <p className="sansita">A full stack web developer</p>
                <p className="intro">
                I love going to the gym and being outdoors… but I also
                 love sweets and watching shows – this may be my greatest downfall. 
                 <br/>
                 As for things that are useful to coding, I have strong communication 
                 and time management skills.  I also love solving problems 
                 and work well in fast-paced environments.
                </p></Col>
                <Col></Col>
            </Row>
        </Container>
    )
};

export default aboutMe;