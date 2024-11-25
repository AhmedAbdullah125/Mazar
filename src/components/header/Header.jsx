'use client';
import React from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {


  return (
    <header className="header">
      <div className="container m-auto flex items-center gap-2 justify-between">
        <Link href="/"> <Image src={logo} alt="logo" className="logo-img" /></Link>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/#paths">Paths</Link>
          <Link href="/#about">About</Link>
          <Link href="/#paths" className='book-link' >Book now</Link>
        </div>

        <Menu className='menu-bars' onClick={() => {
          document.querySelector('.side-menu').classList.toggle('side-menu-active')
          document.querySelector('.menu-bars').classList.toggle('hidden')
          document.querySelector('.menu-bars-X').classList.toggle('hidden')
        }} />
        <X className='menu-bars-X hidden' onClick={() => {
          document.querySelector('.side-menu').classList.toggle('side-menu-active')
          document.querySelector('.menu-bars').classList.toggle('hidden')
          document.querySelector('.menu-bars-X').classList.toggle('hidden')
        }} />
        <div className="side-menu">
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/#paths">Paths</Link>
            <Link href="/#about">About</Link>
            <Link href="/#paths" className='book-link' >Book now</Link>
          </div>
        </div>
      </div>
    </header>
  );
}