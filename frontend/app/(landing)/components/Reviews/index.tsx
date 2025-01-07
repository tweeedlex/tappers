import React, {FC} from 'react';
import Slider from "@/app/(landing)/components/Reviews/components/Slider";
import {getReviews} from "@/requests/reviews";

const Reviews: FC = async () => {
  const {data: reviews} = await getReviews();

  return (
    <div className={"w-full"}>
      <h2 className={"h2 m:py-6 py-3 px-2 text-center"}><span className={"text-pink"}>100% of totally satisfied</span> customers</h2>
      <Slider reviews={reviews}/>
    </div>
  );
};

export default Reviews;