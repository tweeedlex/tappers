import React, { FC } from 'react';
import Container from "@/components/layout/Container";
import Image from "next/image";
import classNames from "classnames";
import {getWorks} from "@/requests/works";

const Works: FC = async () => {
  const {data: works} = await getWorks();

  return (
    <Container>
      <h2 className={"works h2 text-center pb-10"}> Some of our <span className={"text-secondary"}>favourite</span> projects </h2>
      <div className={"flex flex-col gap-10 items-center"}>
        {
          works.map((work, i) => (
            <div key={work.title} className={classNames("flex items-center m:gap-20 s:gap-6 gap-4 justify-center", i % 2 && "flex-row-reverse")}>
              <div className={"overflow-hidden rounded-2xl m:min-w-[360px] s:min-w-[180px] min-w-[140px]"}  style={{ boxShadow: "0 3px 20px rgba(255, 255, 255, 0.2)" }}>
                <Image
                  className={"hover:scale-105 w-full"}
                  style={{ transition: "all .6s cubic-bezier(.08,.7,.63,.8)" }}
                  width={360}
                  height={575}
                  src={work.img}
                  alt={""}
                />
              </div>
              <div className={classNames("flex flex-col gap-2 m:gap-4 m:w-[300px]", (i % 2) && "text-right")}>
                <p className={"m:text-5xl text-2xl"}>{work.title}</p>
                <p className={"subtitle m:text-sm text-xs"}>{work.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  );
};

export default Works;
