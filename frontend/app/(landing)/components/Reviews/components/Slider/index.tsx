"use client"

import React, {FC, useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow} from "swiper/modules";
import Review from "@/app/(landing)/components/Reviews/components/Review";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

type Review = {
  id: number;
  company: string;
  name: string;
  position: string;
  text: string;
}

interface Props {
  reviews: Review[];
}

const Slider: FC<Props> = ({ reviews }) => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={isSmall ? 1 : 2}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
    >
      {reviews.map(review => (
        <SwiperSlide key={review.id}>
          <Review review={review}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
