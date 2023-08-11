"use client";
import React, { FC } from "react";
import { Pagination, Navigation } from "swiper/modules";
import s from "./ServicePage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useGetImagesQuery } from "@/services/getImagesApi";

interface SwiperProps {
  id: number;
}

const Swipers: FC<SwiperProps> = ({ id }) => {
  const { data: images } = useGetImagesQuery(id);
  return (
    <div className={s.swiper}>
      <div className={s.container}>
        <Swiper
          slidesPerView={1} // Установите 1 слайд в видимости
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 57,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 57
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 57,
            },
          }}
        >
          {images?.length !== 0 &&
            images?.map((image) => (
              <SwiperSlide key={image.id}>
                <Image
                  priority
                  src={image.img}
                  alt="works"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;
