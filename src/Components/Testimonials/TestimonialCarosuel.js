import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import Testimonial from "./Testimonial";

export default function TestimonialCarosuel() {
  const [products, setProducts] = useState([{}, {}, {}, {}, {}, {}]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (product) => {
    return <Testimonial />;
  };

  return (
    <div className="card mt-5">
      <h1>Testimonial</h1>

      <Carousel
        value={products}
        numVisible={4}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        autoplayInterval={2000}
        showNavigators={false}
      />
    </div>
  );
}
