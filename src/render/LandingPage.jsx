import React from "react";
import CarouselImages from "../components/CarouselSlide";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <div>
      <div class="shipping">
        <p className="shippingText">
          <strong>Free UPS Ground Shipping on Orders Over $40</strong>
        </p>
      </div>
      <NavBar />
      <CarouselImages />
    </div>
  );
}

export default LandingPage;
