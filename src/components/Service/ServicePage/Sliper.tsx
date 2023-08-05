'use client'
import React from "react";
import { Pagination, Navigation } from 'swiper/modules';
import s from './ServicePage.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

const Sliper = () => {
  return (
    <div className={s.swiper}>
      <div className={s.container}>
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={57}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src='/address.png' alt="works" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/address.png' alt="works" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/address.png' alt="works" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/service.png' alt="works" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/address.png' alt="works" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/address.png' alt="works" width={100} height={100} />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Sliper;
