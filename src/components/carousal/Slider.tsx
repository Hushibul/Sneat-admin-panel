import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import SliderCard from "./SliderCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import ImageOne from "../../assets/img/elements/2.jpg";
import ImageTwo from "../../assets/img/elements/3.jpg";
import ImageThree from "../../assets/img/elements/5.jpg";
const SliderElements = [
  {
    id: 1,
    image: ImageOne,
    heading: "First Slide",
    content: "In numquam omittam sea.",
    dark: true,
  },
  {
    id: 2,
    image: ImageTwo,
    heading: "Second Slide",
    content: "In numquam omittam sea.",
    dark: true,
  },
  {
    id: 3,
    image: ImageThree,
    heading: "Third Slide",
    content: "In numquam omittam sea.",
    dark: true,
  },
];

const Slider = () => {
  return (
    <div className="mx-2 md:mx-6 lg:ml-5 grid grid-cols-12">
      <div className="col-span-12 md:col-span-6">
        <h2 className="text-textMain text-xl my-4 font-bold">Carousal Light</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {SliderElements.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderCard
                image={item.image}
                title={item.heading}
                content={item.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-12 md:col-span-6">
        <h2 className="text-textMain text-xl my-4 font-bold">Carousal Dark</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {SliderElements.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderCard
                image={item.image}
                title={item.heading}
                content={item.content}
                dark={item.dark}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
