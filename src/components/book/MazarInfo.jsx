import React from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';

export default function MazarInfo() {
  return (
    <div className='w-full MazarInfo'>
        <Image src={logo} alt="Mazar" className="img-logo" />
        <h2>Join Us on Your Journey </h2>
        <p>Please fill out the form below to begin your trip planning. Our team is here to make your experience as smooth and enjoyable as possible. Simply provide the details, and we'll handle the rest!</p>
    </div>
  );
}
