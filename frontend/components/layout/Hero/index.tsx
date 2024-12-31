import React, { FC } from 'react';
import styles from "./Hero.module.scss";
import classNames from "classnames";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Container from "@/components/layout/Container";

const Hero: FC = () => {
  return (
    <div className={classNames("relative w-full flex items-center", styles.hero)}>
      <div className={"z-[2] absolute top-0 left-0 w-full h-full"}>
        <div className={classNames("top-[-10%] left-[-5%]", styles.shade)}></div>
        <div className={classNames("top-[13%] left-[22%]", styles.shade)}></div>
        <div className={classNames("top-[-4%] right-[-3%]", styles.shade)}></div>
        <div className={classNames("top-[-5%] left-[-5%]", styles.shadeBlue)}></div>
        <div className={classNames("top-[32%] left-[20%]", styles.shadeBlue)}></div>
        <div className={classNames("top-[14%] right-0", styles.shadeBlue)}></div>
      </div>
      <Container>
        <div className={"flex flex-col relative gap-3 z-[3]"}>
          <h1 className={classNames(styles.heading, "relative left-40")}>TAPPERS</h1>
          <h1 className={classNames(styles.heading, styles.white, "relative left-[320px]")}>STUDIOS</h1>
          <Button variant={"secondary"} className={"relative left-[520px]"}>
            <p className={"uppercase"}>See our works</p>
            <Image src={"/img/landing/hero/arrow.png"} alt={""} width={24} height={24} />
          </Button>
        </div>
        <div className={"absolute top-0 right-0 z-[4] h-full"}>
          <Image src={"/img/landing/hero/object.png"} className={"relative top-[calc(50%-200px)] right-[110px]"} alt={""} width={450} height={450} />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
