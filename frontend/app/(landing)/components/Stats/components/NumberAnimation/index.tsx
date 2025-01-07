"use client";
import React, { FC, useEffect, useRef, useState } from "react";

interface Props {
  children: number;
  duration?: number;
}

const NumberAnimation: FC<Props> = ({ children, duration = 1000 }) => {
  const [value, setValue] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startValue = value;
    const endValue = +children;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setValue(Math.round(startValue + (endValue - startValue) * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, children, duration]);

  return <span ref={elementRef}>{value}</span>;
};

export default NumberAnimation;
