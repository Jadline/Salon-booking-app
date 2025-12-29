import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import { Autoplay } from 'swiper/modules';             

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PhotoSlider({ images }) {
  return (
   <Swiper
  modules={[Pagination, Autoplay]} 
  spaceBetween={20}
  slidesPerView={4}
   breakpoints={{
    340: { slidesPerView: 1, spaceBetween: 15 },
    700: { slidesPerView: 3, spaceBetween: 20 },

  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop
  className="w-full max-w-6xl mx-auto"
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <div className="w-full h-[31rem] overflow-hidden rounded-lg shadow-lg">
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover "
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
  );
}

export default PhotoSlider;
