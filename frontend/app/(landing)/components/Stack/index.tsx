import React, { FC } from 'react';
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Stack: FC = () => {

  return (
    <section className={"w-full flex flex-col gap-2 items-center text-center"}>
      <h2 className={"h2"}>We use <span className={"text-secondary"}>modern and reliable</span> technologies</h2>
      <p className={"subtitle"}>For your app to be fast and secured</p>
      <div className={"flex flex-col gap-0 w-full h-[300px]"}>
        <Marquee gradient={true} gradientColor={"var(--color-primary-transparent)"} gradientWidth={150}>
            <div className={"flex gap-[30px] p-2 items-center h-[150px]"}>
              {
                ["react", "next", "mongodb", "nodejs", "mysql", "nginx", "docker", "pm2", "redux", "git", "figma", "postman"].map((item, index) => (
                  <Image className={"rounded-xl"} key={index} src={`/img/landing/stack/${item}.png`} alt={item} width={200} height={150}/>
                ))
              }
            </div>
        </Marquee>
        <Marquee gradient={true} gradientColor={"var(--color-primary-transparent)"} gradientWidth={150} className={"h-[150px] overflow-hidden"}>
          <div className={"flex gap-[30px] p-5 items-center"}>
            {
              [
                "typescript", "express", "linux", "vite", "webpack", "tailwind", "htmlcssjs", "github", "insomnia", "sass", "ubuntu", "python"
              ].map((item, index) => (
                <Image className={"rounded-xl relative left-[-100px]"} key={index} src={`/img/landing/stack/${item}.png`} alt={item} width={200} height={150}/>
              ))
            }
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Stack;
