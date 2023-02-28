import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute  -right-40  top-40 left-0 m-auto !flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)]  "
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <AiOutlineArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute top-40 right-0 -left-40 z-30  m-auto !flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] "
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    >
      <AiOutlineArrowLeft />
    </div>
  );
}
function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="relative my-10  min-h-[550px]  w-full overflow-hidden rounded-3xl ">
      <div className="absolute top-10 left-0 right-0 z-30 m-auto text-center">
        <div className="w-full">
          <p className="mb-3 text-base md:text-xl ">
            All you need is adventure
          </p>
          <h2 className="text-3xl font-medium  lg:text-5xl">
            Explore the world
          </h2>
        </div>
      </div>
      {/* slider */}

      <Slider {...settings}>
        <img src="/imgs/mainBanner.jpg " className="h-full object-contain" />
        <div className="h-full">
          <img src="/imgs/mainBanner2.jpg " className="h-full object-contain" />
        </div>
        <div className="h-full">
          <img src="/imgs/mainBanner3.jpg " className="h-full object-contain" />
        </div>
        <div className="h-full">
          <img src="/imgs/mainBanner4.jpg " className="h-full object-contain" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
