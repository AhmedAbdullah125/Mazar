'use client'
import React from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
export default function MazarInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }} // Initial animation state (faded and shifted left)
      whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        // type: 'spring', // Using spring animation for smooth motion
        bounce: 0.2, // Small bounce effect for the animation
      }}
      className='w-full MazarInfo'>
      <Image src={logo} alt="Mazar" className="img-logo" />
      <h2>Join Us on Your Journey </h2>
      <p>Please fill out the form below to begin your trip planning. Our team is here to make your experience as smooth and enjoyable as possible. Simply provide the details, and we'll handle the rest!</p>
    </motion.div>
  );
}
