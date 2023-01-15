import Masonry from "react-masonry-css";
import Pin from "./Pin";
import React from "react";

const breakPointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};
const MasonryLayout = ({ pins }) => {
  return (
    <div>
      <Masonry
        className='flex animate-slide-fwd'
        breakPointCols={breakPointObj}>
        {pins?.map((pin) => (
          <Pin
            key={pin._id}
            className='w-max'
            pin={pin}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;