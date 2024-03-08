import React from 'react'
import { motion, useMotionValue, useTransform } from 
'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
const Button = ({ value }) => {
  return (
    <motion.button
      className='py-2 px-4 bg-[#45d87d] text-white font-semibold rounded-full focus:outline-none'
      whileHover={{ scale: 1.08, boxShadow: '0 0 10px rgba(69, 216, 125, 0.5)' }}
    >
      {value}
      
    </motion.button>
     );
    }
export default Button
