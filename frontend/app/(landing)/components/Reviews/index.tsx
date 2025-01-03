"use client";

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import React, {FC, useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Review from "./components/Review";

const Reviews: FC = () => {
  const reviews = [
    {
      id: 1,
      company: "CRABS (crabstoken.io)",
      name: "Nik",
      position: "CEO, Founder of CRABS",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
    },
    {
      id: 2,
      company: "PokieTap",
      name: "Serhiy",
      position: "Marketing manager, PokieTap",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
    },
    {
      id: 3,
      company: "Hempton (@hempton_bot)",
      name: "Vladyslav",
      position: "Product manager, Hempton",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
    },
    {
      id: 4,
      company: "TONERO (@TON_EXP_BOT)",
      name: "Anonymous",
      position: "CEO, Founder of TONERO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
    }
  ]

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
    <div className={"w-full py-20"}>
      <h2 className={"h2 m:py-6 py-3 text-center"}><span className={"text-pink"}>100% of totally satisfied</span> customers
      </h2>
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
    </div>
  );
};

export default Reviews;