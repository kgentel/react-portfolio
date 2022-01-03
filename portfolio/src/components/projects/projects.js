import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Card, Col } from "react-bootstrap";
import Marvel from "../../assets/project-1.jpeg";
import Tracker from "../../assets/employee-tracker.jpg";
import SkinDeep from "../../assets/skin-deep.jpeg";
import "./projects.css";

function projects() {
  return (
    <div className="projects-section" id="projects">
      <div className="section-title">
        My Work
      </div>
      <Row>
        <Col className="project-col">
          <a href="https://ska246801.github.io/Marvel-Quiz-Project-1/" target="_blank" className="link">
            <Card.Img variant="top" src={Marvel} className="project-image"/>
          </a>
          <Card.Body>
            <Card.Title className="project-title">Marvel Character Quiz</Card.Title>
            <Card.Text>
              An interactive personality quiz that matches the user to a Marvel
              superhero most like themselves.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col  className="project-col">
          <a href="https://www.youtube.com/watch?v=MdGaauJyMSc" target="_blank" className="link">
            <Card.Img variant="top" src={Tracker} className="project-image" />
          </a>
          <Card.Body>
            <Card.Title className="project-title">Employee Tracker</Card.Title>
            <Card.Text>
              A tracker of tables with department, role and employee data with
              the ability to add or edit information.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col className="project-col">
          <a href="https://mswil-skindeep.herokuapp.com/" target="_blank" className="link">
            <Card.Img variant="top" src={SkinDeep} className="project-image" />
          </a>
          <Card.Body>
            <Card.Title className="project-title">Skin Deep</Card.Title>
            <Card.Text>
              A social media website that connects tattoo artists with
              enthusiasts.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}

export default projects;
