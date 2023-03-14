import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./carouselOne.jpg";
import img2 from "./carouselTwo.jpg";
import img3 from "./carouselThree.jpg";
import img5 from "./carouselFive.jpg";

function CarouselSlide() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>PROFESSIONAL PARTNERSHIP</h3>
          <h3>Explore Our Wholesale Program</h3>
          <p>
            Our Wholesale Team is dedicated to helping coffee programs across
            the US to stand out and tell their stories.
          </p>
          <h3>LET'S TALK</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={img5} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlide;
