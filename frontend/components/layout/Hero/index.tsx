import React, { FC } from 'react';
import styles from "./Hero.module.scss";
import classNames from "classnames";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Container from "@/components/layout/Container";

const Hero: FC = () => {
  return (
    <div className={classNames("relative w-full h-screen flex items-center justify-center", styles.hero)}>
      <div className={"z-[2] absolute top-0 left-0 w-full h-full"}>
        <div className={classNames("top-[-10%] left-[-5%]", styles.shade)}></div>
        <div className={classNames("top-[13%] left-[22%]", styles.shade)}></div>
        <div className={classNames("top-[-4%] right-[-3%]", styles.shade)}></div>
        <div className={classNames("top-[-5%] left-[-5%]", styles.shadeBlue)}></div>
        <div className={classNames("top-[32%] left-[20%]", styles.shadeBlue)}></div>
        <div className={classNames("top-[14%] right-0", styles.shadeBlue)}></div>
      </div>
      <Container className={"h-full m:h-[fit-content] relative"}>
        <div className={"flex flex-col m:relative absolute m:top-0 top-[var(--height-header)] py-3 m:py-0 left-[50%] m:left-0 translate-x-[-50%] m:translate-x-0 gap-3 z-[5]"}>
          <h1 className={classNames(styles.heading, "relative z-[5] text-center m:text-left left-0 xl:left-[200px] l:left-20 m:left-10")}>TAPPERS</h1>
          <h1 className={classNames(styles.heading, styles.white, "relative text-center m:text-left left-0 xl:left-[320px] l:left-40 m:left-20")}>STUDIOS</h1>
          <Button
            variant={"secondary"}
            className={"flex justify-center items-center gap-1 l:gap-2 relative left-[80px] xxl:left-[520px] xl:left-[440px] l:left-[240px] m:left-[140px]"}
          >
            <p className={"uppercase leading-[100%] l:text-[16px] text-[12px]"}>See our works</p>
            <Image src={"/img/landing/hero/arrow.png"} alt={""} width={24} height={24} className={"l:h-6 h-4 l:w-6 w-4"} />
          </Button>
        </div>
        <div className={"absolute top-[100px] m:top-0 m:right-0 left-[50%] translate-x-[-50%] m:translate-x-0 z-[4] h-full"}>
          <Image
            src={"/img/landing/hero/object.png"}
            className={"absolute scale-50 m:scale-[60%] translate-x-1/2 m:translate-x-0 right-[50%] m:right-0 l:scale-75 xl:scale-100 top-[calc(50%-200px)] xl:right-[110px] l:right-[60px]"}
            alt={""}
            width={450}
            height={450}
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
