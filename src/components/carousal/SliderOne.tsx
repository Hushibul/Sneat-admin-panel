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
  },
  {
    id: 2,
    image: ImageTwo,
    heading: "Second Slide",
    content: "In numquam omittam sea.",
  },
  {
    id: 3,
    image: ImageThree,
    heading: "Third Slide",
    content: "In numquam omittam sea.",
  },
];

const SliderOne = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
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
  );
};

export default SliderOne;
