import React, { useEffect } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import Button from '../button/Button';

const Start = () => {
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      // Add other options as needed
    });

    return () => {
      // Clean up locomotive-scroll on component unmount
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container data-scroll-section data-scroll-speed=".8" className='bg-[#CDEA68] text-center py-5'>
      <h1 className='uppercase text-[12.5vw] tracking-[-.05em] font-bold py-5 leading-[11rem]'>
        ready <br /> to start <br />the project?
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="btn pt-3  text-center">
          <Button value={"START THE PROJECT"} />
        </div>
        <h3 className="mt-1 ">OR</h3>
        <div className="btn pt-1 pb-5 text-center">
          <Button value={`SAY HI TO ARIF`} className='bg-black' />
        </div>
      </div>
    </div>
  );
}

export default Start;
