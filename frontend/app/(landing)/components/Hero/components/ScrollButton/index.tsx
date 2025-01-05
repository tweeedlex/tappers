"use client";
import React, {FC} from 'react';
import Image from "next/image";
import Button from "@/components/ui/Button";

const ScrollButton: FC = () => {
  const scrollToPortfolio = () => {
    const portfolio = document.getElementById("portfolio");
    if (portfolio) {
      window.scrollTo({
        top: portfolio.offsetTop,
        behavior: "smooth"
      });
    }
  }

  return (
    <Button
      onClick={scrollToPortfolio}
      variant={"secondary"}
      className={"flex justify-center items-center gap-1 l:gap-2 relative left-[80px] m:left-[140px] l:left-[240px] xl:left-[440px] xxl:left-[520px]"}
    >
      <p className={"uppercase leading-[100%] l:text-[16px] text-[12px]"}>See our works</p>
      <Image src={"/img/landing/hero/arrow.png"} alt={""} width={24} height={24} className={"l:h-6 h-4 l:w-6 w-4"} />
    </Button>
  );
};

export default ScrollButton;