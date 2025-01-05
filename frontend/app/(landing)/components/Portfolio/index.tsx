"use client";

import React, {useRef, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Portfolio.module.scss";
import classNames from "classnames";
import { Mousewheel, Controller } from 'swiper/modules';
import 'swiper/css';

const Portfolio = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1023);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setSlidersAmount(isSmall ? 2 : 4);
  }, [isSmall]);

  const [slidersAmount, setSlidersAmount] = useState(4);

  const items = new Array(slidersAmount / 2).fill(0).map(_ => [
    [{ img: "1.jpg" }, { img: "2.jpg" }, { img: "3.jpg" }, { img: "4.jpg" }, { img: "5.jpg" }, { img: "6.jpg" }],
    [{ img: "7.jpg" }, { img: "8.jpg" }, { img: "9.jpg" }, { img: "10.jpg" }, { img: "11.jpg" }, { img: "12.jpg" }],
  ]).flat();

  const swiperRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const handleSlideChange = (activeSwiper) => {
    if (isAnimatingRef.current) return;

    const activeIndex = activeSwiper.activeIndex;
    if (activeIndex === activeIndexRef.current) return;

    activeIndexRef.current = activeIndex;
    isAnimatingRef.current = true;

    swiperRefs.current.forEach(swiper => {
      if (swiper && swiper !== activeSwiper && swiper.activeIndex !== activeIndex) {
        swiper.slideTo(activeIndex, 300);  // Added 300ms animation duration
      }
    });

    // Reset animation flag after animation completes
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 350);  // Slightly longer than animation to ensure completion
  };


  return (
    <div id={"portfolio"}>
      <h2 className="h2 text-center py-20 px-3">
        <span className="text-secondary">Unique</span> ideas generate <span className="text-secondary">impressive</span> apps
      </h2>
      <div className={"overflow-hidden"}>
        <div className="w-full h-[80vh] scale-[115%] flex gap-3">
          {items.map((itemGroup, i) => (
            <Swiper
              className={classNames(`swiper slider${i + 1} h-full`, styles.slider)}
              key={i}
              freeMode={false}
              centeredSlides={true}
              direction="vertical"
              mousewheel={true}
              speed={300}
              loop={true}
              slidesPerView={1.75}
              slidesOffsetBefore={-125}
              modules={[Mousewheel, Controller]}
              onSwiper={(swiper) => {
                swiperRefs.current[i] = swiper;
              }}
              onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
              <div className={classNames("swiper-wrapper", styles.sliderWrapper)}>
                {itemGroup.map((item) => (
                  <SwiperSlide key={item.img}>
                    <div className={classNames("swiper-slide", styles.sliderItem)}>
                      <div
                        className={classNames(styles.sliderImg)}
                        style={{ backgroundImage: `url(img/landing/portfolio/${item.img})` }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;