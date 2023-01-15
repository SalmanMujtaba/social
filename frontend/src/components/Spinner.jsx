import React from "react";
import { Vortex } from "react-loader-spinner";
const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <Vortex
        visible={true}
        height='80'
        width='80'
        ariaLabel='vortex-loading'
        wrapperStyle={{}}
        wrapperClass='vortex-wrapper'
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
      {/* <ThreeCircles
        type='Circles'
        color='00BFFF'
        height={50}
        width={200}
        className='m-5'></ThreeCircles> */}
      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  );
};

export default Spinner;
