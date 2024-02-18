import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import Slide from "./Slide";
const Carosouel = () => {
  const [slidesDetails, setSlidesDetails] = useState([
    {
      index: 1,
      heading: "Welcome to Dharamsinh Desai University",
      description:
        "Dharamsinh Desai University is a leading university in India. It is the leading university in India with the highest number of students in the country.",
      image: require("../../assets/image.avif"),
    },
    {
      index: 2,
      heading: "Our Programs",
      description:
        "Explore our diverse range of programs designed to prepare students for success in their chosen fields. From engineering to management, arts to sciences, we offer comprehensive programs tailored to meet the needs of today's industries.",
      image: require("../../assets/image.avif"),
    },
    {
      index: 3,
      heading: "Campus Life",
      description:
        "Experience vibrant campus life at Dharamsinh Desai University. Engage in a variety of extracurricular activities, join student clubs and organizations, and make lifelong memories with friends. Our campus offers modern facilities, comfortable accommodations, and a supportive community to enhance your overall university experience.",
      image: require("../../assets/image.avif"),
    },
  ]);
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

  const slideTemplate = (slide) => {
    return (
      <Slide
        heading={slide.heading}
        description={slide.description}
        image={slide.image}
        index={slide.index}
      />
    );
  };

  return (
    <Carousel
      value={slidesDetails}
      numVisible={1}
      itemTemplate={slideTemplate}
      autoplayInterval={2000}
      showNavigators={false}
    />
  );
};

export default Carosouel;
