import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import Img from "../../elements/img";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function App() {
  return (
    <div className="flex flex-row justify-center items-center space-y-[4px] w-full">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        showArrows={false}
        containerClass="carousel-container"
        itemClass="carousel-item ml-10"
      >
        <div className="flex flex-col items-start font-rubik">
          <Img src="assets/img/img-2.svg" alt="" className="w-[852px] h-[483px]" />
          <text className="text-[25px]">Lorem Ipsum</text>
          <text className="text-[40px]">Works</text>
        </div>
        <div className="flex flex-col items-start font-rubik">
          <Img src="assets/img/img-2.svg" alt="" className="w-[852px] h-[483px]" />
          <text className="text-[25px]">Lorem Ipsum</text>
          <text className="text-[40px]">Works</text>
        </div>
        <div className="flex flex-col items-start font-rubik">
          <Img src="assets/img/img-2.svg" alt="" className="w-[852px] h-[483px]" />
          <text className="text-[25px]">Lorem Ipsum</text>
          <text className="text-[40px]">Works</text>
        </div>
   
      </Carousel>
    </div>
  );
}

export default App;
