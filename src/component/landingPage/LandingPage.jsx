import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Button from '../button/Button';
import img from '../../assets/ss-removebg1.png';
import { GoArrowUpRight } from 'react-icons/go';
import { Typewriter } from 'react-simple-typewriter';

const LandingPage = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = useCallback((event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const backgroundColorX = useMotionValue(0);
  const backgroundColorY = useMotionValue(0);

  const backgroundColorXRange = useTransform(
    backgroundColorX,
    [0, window.innerWidth],
    ['#426E7E', '#9F413E']
  );

  const backgroundColorYRange = useTransform(
    backgroundColorY,
    [0, window.innerHeight],
    ['#426E7E', '#9F413E']
  );
  return (
    <>
      <motion.div
        className='container-fluid border-bottom-[.1px] shadow-md'
        style={{
          background: `linear-gradient(to right, ${backgroundColorXRange.get()}, ${backgroundColorYRange.get()})`,
        }}
        animate={{
          background: `linear-gradient(to right, ${backgroundColorXRange.get()}, ${backgroundColorYRange.get()})`,
        }}
        transition={{ duration: 0.8 }}
      >
        <div className='container'>
          <div className='row py-5 flex justify-center items-center'>
            <div className='col-md-6 font-sans text-[#fff]' 
            style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
              <h2 className='text-6xl '>Hi, I'm</h2>
              <h1 className=' '>
                <span className='text-7xl '>  Arif Ahmmad, </span>{' '}
              </h1>
              <p className='text-3xl pt-4'>
                A passionate{' '}
                <span className='text-4xl font-bold text-[#45d87d]'>
                  {'<Front End Developer/>'}
                </span>{' '}
                creating user-friendly websites.
              </p>
              <h3 className='pb-3'>
                Experienced with{' '}
                <span style={{ color: '#45d87d', fontWeight: 'bold' }} className="typewriter-text">
                  <Typewriter
                    words={[
                      'HTML',
                      'CSS',
                      'JavaScript',
                      'Bootstrap',
                      'Tailwind CSS',
                      'reactJs',
                      'NextJs',
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h3>
              <motion.div
                whileHover={{ scale: 1}}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.1, delay: .5 } }}
              >
                <Button value={'Lets talk'} />
              </motion.div>
            </div>
            <div
              className='col-md-6 rounded-full  flex justify-center items-center'
              onMouseMove={(event) => {
                backgroundColorX.set(event.clientX);
                backgroundColorY.set(event.clientY);
              }}
            >
              <img className='' src={img} alt='' />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='container-fluid bottom flex justify-between px-5 mt-3 text-[#212121]'
        initial='hidden'
        animate='visible'
      >
        {['see my projects', 'more about me', 'lets start a project'].map(
          (item, index) => (
            <motion.h5
              className='flex justify-center items-center gap-2 border rounded-3xl px-2 py-1 cursor-pointer hover:bg-slate-900 hover:text-white transition duration-300 ease-in-out shadow-md'
              key={index}
              whileHover={{ scale: 1.05 }}
            >
              {item} <GoArrowUpRight className='font-semibold ' />
            </motion.h5>
          )
        )}
      </motion.div>
    </>
  );
};

export default LandingPage;