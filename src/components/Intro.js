import React, { useState } from "react";
import upendra from "../photos/upendra.jpg";
import SlidePhoto from "../photos/SlidePhoto.jpeg";
import "../css/intro.css";
//import { Slide } from "react-slideshow-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Intro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const slides = [
    { url: SlidePhoto, caption: "Twitter dApp" },
    { url: upendra, caption: "deFi dApp" },
    { url: SlidePhoto, caption: "Amazon clone" },
    // Add more slides here as needed
  ];
  return (
    <Container >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <img
          src={upendra}
          alt="logo"
          width="300"
          height="300"
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
      </div>
      <h1>Upendra Jaiswal</h1>
      <p>Engineer, Blockchain and React Developer</p>
    </Container>
  );
};

export default Intro;
