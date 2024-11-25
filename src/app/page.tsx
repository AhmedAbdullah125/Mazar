import React from 'react';
import Image from 'next/image';
import Hero from '../components/home/Hero';
import Paths from '../components/home/Paths';
import About from '../components/home/About';
import GenSection from '../components/home/GenSection';
import AppExplore from '../components/home/AppExplore';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Paths></Paths>
      <About></About>
      <GenSection/>
      <AppExplore/>
    </main>
  );
}
