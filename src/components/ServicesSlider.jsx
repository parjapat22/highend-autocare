import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ServicesSlider.css";

function ServicesSlider({ services }) {
  const singleSlide = services.map((service) => (
    <SwiperSlide key={service.id}>
      <div className="slide">
        <img src={service.image} alt={service.title} />
        <h4>{service.title}</h4>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={false}
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {singleSlide}
    </Swiper>
  );
}

export default ServicesSlider;
