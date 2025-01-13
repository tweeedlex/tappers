import React, { FC } from 'react';
import styles from "./Hero.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Container from "@/components/layout/Container";
import ScrollButton from "./components/ScrollButton";

const Hero: FC = () => {
  const cards = [
    {
      id: 2,
      subtitle: "Active users in our games last week",
      title: "140k",
      offsetY: 60
    },
    {
      id: 1,
      subtitle: "Games launched last month",
      title: "5",
      offsetY: 0
    },
    {
      id: 3,
      subtitle: "Happy clients last year",
      title: "100%",
      offsetY: -60
    }
  ]

  return (
    <div className={classNames("absolute mt-[-50px] l:mt-[-80px] mb-[-120px] w-full overflow-x-hidden h-screen flex items-center justify-center", styles.hero)}>
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
          <h1 className={classNames(styles.heading, "animate__animated animate__fadeInTopLeft relative z-[5] text-center m:text-left left-0 xl:left-[200px] l:left-20 m:left-10")}>TAPPERS</h1>
          <h1 className={classNames(styles.heading, styles.white, "animate__animated animate__fadeInBottomLeft relative text-center m:text-left left-0 xl:left-[320px] l:left-40 m:left-20")}>STUDIOS</h1>
          <ScrollButton />
        </div>
        <div
          className={classNames(styles.image, "z-[4] absolute l:w-[500px] w-[400px] h-[500px] scale-50 m:scale-[60%] l:scale-75 xl:scale-100 m:top-[50%] m:translate-y-[-50%] m:right-[0] m:left-[unset] m:bottom-0 bottom-10 left-[50%] translate-x-[-50%] m:translate-x-0")}
        >
          <div className={"z-[5] absolute left-[50%] flex gap-5 top-[50%]"} style={{transform: "translate(-50%, -50%)"}}>
            {cards.map(card => (
              <div
                key={card.id}
                className={"animate__animated animate__fadeInRight min-h-[200px] flex flex-col relative justify-center gap-3 text-xl w-40 p-5 rounded-[40px]"}
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  top: `${card.offsetY}px`
                }}
              >
                <p className={"text-xl"}>{card.subtitle}</p>
                <p className={"text-4xl"}>{card.title}</p>
              </div>
            ))}
          </div>
          <Image
            src={"/img/landing/hero/object.png"}
            alt={""}
            width={450}
            height={450}
            className={"animate__animated animate__fadeInRight"}
          />
          <Image
            src={"/img/landing/hero/particle1.png"}
            className={"animate__animated animate__fadeInRight absolute bottom-[-28%] right-[40%]"}
            alt={""}
            width={101}
            height={96}
          />
          <Image
            src={"/img/landing/hero/particle2.png"}
            className={"animate__animated animate__fadeInRight absolute top-[0] right-[6%] rotate-90"}
            alt={""}
            width={40}
            height={36}
          />
          <Image
            src={"/img/landing/hero/particle3.png"}
            className={"animate__animated animate__fadeInRight absolute top-[14%] left-[-20%]"}
            alt={""}
            width={40}
            height={36}
          />
          <Image
            src={"/img/landing/hero/particle4.png"}
            className={"animate__animated animate__fadeInRight absolute top-[-12%] left-[-8%]"}
            alt={""}
            width={77}
            height={108}
          />
          <Image
            src={"/img/landing/hero/particle2.png"}
            className={"animate__animated animate__fadeInRight absolute bottom-[0] right-[20%]"}
            alt={""}
            width={40}
            height={36}
          />
        </div>
      </Container>
      <Image width={36} height={18} alt={""} src={"/img/landing/hero/arrow.png"} className={classNames(styles.arrow, "absolute bottom-5 rotate-90")} />
    </div>
  );
};

export default Hero;
