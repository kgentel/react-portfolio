import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Github from "../../assets/github3.jpg"
import Linkedin from "../../assets/linkedin3.jpg"
import Email from "../../assets/email.jpg"
import "./contact.css";

function contact() {
  return (
    <div id="contact">
        <div className="reach-out">
            Reach Out!
        </div>
      <Carousel className="carousel">
        <Carousel.Item className="item">
        <a href="https://www.linkedin.com/in/katie-gentel-ab612a164/" target="_blank">
          <img
            className="contact-image"
            src={Linkedin}
            alt="LinkedIn"
          />
          </a>
        </Carousel.Item>
        <Carousel.Item className="item">
        <a href="https://github.com/kgentel" target="_blank">
          <img
            className="contact-image"
            src={Github}
            alt="Github"
          />
          </a>
        </Carousel.Item>
        <Carousel.Item className="item">
        <a href="mailto:katie.m.gentel@gmail.com">
          <img
            className="contact-image"
            src={Email}
            alt="First slide"
          />
          </a>
        </Carousel.Item>
      </Carousel>
      </div>
     

     
    
  );
}

export default contact;
