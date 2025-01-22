import React, { FC } from 'react';
import Container from "@/components/layout/Container";
import NumberAnimation from "@/app/(landing)/components/Stats/components/NumberAnimation";

const Stats: FC = () => {
  const blocks = [
    {
      title: "10+",
      subtitle: "Years of experience"
    },
    {
      title: "40+",
      subtitle: "Projects completed"
    },
    {
      title: "30+",
      subtitle: "Happy clients"
    },
    {
      title: "100%",
      subtitle: "Satisfaction rate"
    }
  ];

  return (
    <Container className={"stats"}>
      <div className={"flex flex-col gap-3"}>
        <h2 className={"h2"}>Tappers created popular games and apps with 500k+ users</h2>
        <p className={"subtitle"}>
          We develop innovative games with unique mechanics no game has ever had before.
        </p>
        <ul className={"m:flex m:gap-5 mt-5 m:items-center w-full m:justify-between grid grid-cols-2 gap-8"}>
          {blocks.map((block, index) => (
            <li key={index} className={"flex flex-col gap-3 m:w-[calc(25%-16px)] w-full"}>
              <hr className={"w-full h-[2px] bg-primary"} />
              <h3 className={"text-4xl text-secondary font-bold"}>
                <NumberAnimation duration={1000 + index * 200}>
                  {parseInt(block.title)}
                </NumberAnimation>
                <span>
                  {block.title.replace(/\d+/g, '')}
                </span>
              </h3>
              <p>{block.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Stats;
