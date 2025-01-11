import React, {FC} from 'react';
import Image from "next/image";

interface Props {
  review: {
    id: number;
    company: string;
    name: string;
    position: string;
    text: string;
    avatar: string;
  }
}

const Review: FC<Props> = ({ review }) => {
  return (
    <div className={"flex relative justify-center m:px-10 m:mx-20 px-5 mx-5 py-5 m:py-10 rounded-[20px] m:gap-20 m:flex-row flex-col items-start gap-4"} style={{background: "rgba(255, 255, 255, 0.05)"}}>
      <div className={"flex m:flex-col xs:flex-row flex-col m:gap-3 justify-between w-full xs:gap-6 gap-3 m:w-1/2"}>
        <div className={"flex gap-3 items-center"}>
          <Image width={24} height={24} alt={review.company} className={"rounded-[50%]"} src={review.avatar} />
          <h4 className={"h4"}>{review.company}</h4>
        </div>
        <div className={"flex flex-col xs:gap-2 gap-1 xs:items-end m:items-start items-start text-start xs:text-end m:text-start"}>
          <h3 className={"h3"}>{review.name}</h3>
          <p className={"subtitle"}>{review.position}</p>
        </div>
      </div>
      <div className={"m:relative"}>
        <p className={"absolute text-secondary m:text-6xl xs:text-8xl text-6xl top-o m:left-[-40px] xs:left-[-20px] left-[-10px] top-0"}>&#34;</p>
        <div className={"flex flex-col gap-3"}>
          <p className={"m:text-2xl s:text-xl text-sm"}>{review.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;