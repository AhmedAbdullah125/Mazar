'use client';
import React, { useState } from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
export default function Header() {
  // const [position, setPosition] = useState("bottom")
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
        {/* <div className="menu-bars">
          <DropdownMenu>
            <DropdownMenuTrigger><Menu ></Menu></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel> 
              <DropdownMenuSeparator /> 
              <DropdownMenuItem><Link href="/" className='w-full min-w-48 text-center p-2'>Home</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/#paths" className='w-full min-w-48 text-center p-2'>Paths</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/#about" className='w-full min-w-48 text-center p-2'>About</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/paths" className='w-full min-w-48 bg-primaryColor text-white px-1 py-1 rounded-sm text-center hover:bg-secColor' >Book now</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div> */}

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