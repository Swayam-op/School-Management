import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselSection from "../Sections/CarouselSection";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidersToShow: 1,
    slidersToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="w-full  overflow-x-hidden overflow-y-clip">
        <Corousel {...settings}>
          <Wrap>
            <CarouselSection
              Image={"url(/images/campus/building1.jpg)"}
              Title={"World's Best Institute"}
            />
          </Wrap>
          <Wrap>
            <CarouselSection
              Image={"url(/images/campus/building2.jpg)"}
              Title={"Fascinating Campus"}
            />
          </Wrap>
          <Wrap>
            <CarouselSection
              Image={"url(/images/campus/building3.jpg)"}
              Title={"Amazing Library"}
            />
          </Wrap>
          <Wrap>
            <CarouselSection
              Image={"url(/images/campus/building4.jpg)"}
              Title={"Appreciative Education"}
            />
          </Wrap>
        </Corousel>
      </div>
    </>
  );
};

const Corousel = styled(Slider)`
  margin-top: 0px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    position: relative;
    top: -50px;
    &:before {
      font-size: 10px;
      border-radius: 0px;
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 0px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: ralative;
    height: 100%;
    img {
      width: 100%;
      height: 500px;
    }
  }
`;

export default ImgSlider;
