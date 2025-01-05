import React, { FC } from 'react';
import styles from "./Hero.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Container from "@/components/layout/Container";
import ScrollButton from "./components/ScrollButton";

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
      <Container className={"h-full flex items-center relative"}>
        <div className={"flex flex-col m:relative absolute m:top-0 top-[var(--height-header)] py-3 m:py-0 left-[50%] m:left-0 translate-x-[-50%] m:translate-x-0 gap-3 z-[5]"}>
          <h1 className={classNames(styles.heading, "relative z-[5] text-center m:text-left left-0 xl:left-[200px] l:left-20 m:left-10")}>TAPPERS</h1>
          <h1 className={classNames(styles.heading, styles.white, "relative text-center m:text-left left-0 xl:left-[320px] l:left-40 m:left-20")}>STUDIOS</h1>
          <ScrollButton />
        </div>
        <div
          className={classNames(styles.image, "z-[4] absolute l:w-[500px] w-[400px] h-[500px] scale-50 m:scale-[60%] l:scale-75 xl:scale-100 m:top-[50%] m:translate-y-[-50%] m:right-[0] m:left-[unset] m:bottom-0 bottom-10 left-[50%] translate-x-[-50%] m:translate-x-0")}
        >
          <Image
            src={"/img/landing/hero/object.png"}
            alt={""}
            width={450}
            height={450}
          />
          <Image
            src={"/img/landing/hero/particle1.png"}
            className={"absolute bottom-[-28%] right-[40%]"}
            alt={""}
            width={101}
            height={96}
          />
          <Image
            src={"/img/landing/hero/particle2.png"}
            className={"absolute top-[0] right-[6%] rotate-90"}
            alt={""}
            width={40}
            height={36}
          />
          <Image
            src={"/img/landing/hero/particle3.png"}
            className={"absolute top-[14%] left-[-20%]"}
            alt={""}
            width={40}
            height={36}
          />
          <Image
            src={"/img/landing/hero/particle4.png"}
            className={"absolute top-[-12%] left-[-8%]"}
            alt={""}
            width={77}
            height={108}
          />
          <Image
            src={"/img/landing/hero/particle2.png"}
            className={"absolute bottom-[0] right-[20%]"}
            alt={""}
            width={40}
            height={36}
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
