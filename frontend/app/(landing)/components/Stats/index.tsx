import React, { FC } from 'react';
import Container from "@/components/layout/Container";

const Stats: FC = () => {
  const blocks = [
    {
      title: "10+",
      subtitle: "Years of experience"
    },
    {
      title: "20+",
      subtitle: "Projects completed"
    },
    {
      title: "50+",
      subtitle: "Happy clients"
    },
    {
      title: "100%",
      subtitle: "Satisfaction rate"
    }
  ]

  return (
    <Container>
      <div className={"flex flex-col gap-3"}>
        <h2 className={"h2"}>Tappers created multiple popular games and apps with 500k+ users</h2>
        <p className={"subtitle"}>
          We develop innovative games with unique mechanics no game has ever had before.
        </p>
        <div className={"m:flex m:gap-5 mt-5 m:items-center w-full m:justify-between grid grid-cols-2 gap-8"}>
          {blocks.map((block, index) => (
            <div key={index} className={"flex flex-col gap-3 m:w-[calc(25%-16px)] w-full"}>
              <hr className={"w-full h-[2px] bg-primary"} />
              <h3 className={"text-4xl text-secondary font-bold"}>{block.title}</h3>
              <p>{block.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Stats;