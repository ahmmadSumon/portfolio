import React, { useEffect } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import fastSvg from '../../assets/about/fast.svg';
import responsiveSvg from '../../assets/about/responsive.svg';
import designSvg from '../../assets/about/design.svg';
import rocketSvg from '../../assets/about/rocket.svg';
import { Typewriter } from 'react-simple-typewriter';
import { GoArrowUpRight } from "react-icons/go";
import Button from '../button/Button';
import { motion } from 'framer-motion';

const About = () => {
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
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='bg-[#252934] mt-1 py-5 text-white'>
      <div className='container py-16 '>
        <h1 className=' text-6xl flex justify-center items-center  border-spacing-4   pt-20'>About</h1>
        <div className="row pt-6 ">
          {/* Fast */}
          <div className="col-md-3 flex justify-center flex-column items-center gap-2 ">
            <img className='h-25' src={fastSvg} alt="" />
            <h2 className='text-opacity-75'>Fast</h2>
            <p className='text-xl'>Fast load times and lag-free interaction, my highest priority.</p>
          </div>

          {/* Responsive */}
          <div className="col-md-3 flex justify-center flex-column items-center  gap-2">
            <img className='h-25' src={responsiveSvg} alt="" />
            <h2>Responsive</h2>
            <p className='text-xl'>My layouts will work on any device, big or small.</p>
          </div>

          {/* Design */}
          <div className="col-md-3 flex justify-center flex-column items-center  gap-2">
            <img className='h-25' src={designSvg} alt="" />
            <h2>Design</h2>
            <p className='text-xl'>Strong preference for easy to use, intuitive Design.</p>
          </div>

          {/* Dynamic */}
          <div className="col-md-3  flex justify-center  flex-column items-center  gap-2">
            <img className='h-25' src={rocketSvg} alt="" />
            <h2>Dynamic</h2>
            <p className='text-xl'>Websites don't have to be static, I love making pages come to life.</p>
          </div>
        </div>

        {/* Typewriter */}
        <h2 className='text-center text-4xl text-[#02C2C9]'> a {
          <Typewriter
            words={['Developer', 'Problem solver', 'Front-end specialist']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        }</h2>

        {/* Description */}
        <p className='text-center text-xl mt-3'> I am Arif Ahmmad, a passionate web developer from Bangladesh and the co-founder of IT Hub, bringing you web development and design from the future. My expertise is developing next-level websites and web applications full frontend design.</p>

        {/* Button */}
        <div className='flex justify-center  mt-5 items-center'>
          <Button value={"Send a note to me"} className="flex justify-center" />
        </div>
      </div>
    </div>
  );
}

export default About;
