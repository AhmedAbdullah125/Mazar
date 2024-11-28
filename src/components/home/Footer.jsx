'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import c from '/public/c.svg'
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() { // Defining the main functional component named 'Footer'.
    const [language, setLanguage] = useState('en');  // Default language is 'en'
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLanguage(localStorage.getItem('lang'));
        }
    }, []); 
    return (
        <footer className={`${language === 'en' ? 'ltr' : 'rtl'}`}> {/* Main footer container with padding and background color */}
            <div className="container m-auto"> {/* Container for the footer content */}
                <div className="footer-cont">
                    <div className="copyRight">
                        <Image src={c} alt="Mazar" className="img" />
                        <p>{language === 'en' ? 'Licensed by the Ministry of Tourism ,license number 73104705':'مرخصة من وزارة السياحة رقم الترخيص 73104705'}</p>
                    </div>
                    <div className="social">
                        <Link href={'https://www.linkedin.com/'}><Linkedin color='#025AB4'/></Link>
                        <Link href={'https://www.instagram.com/'}><Instagram color='#025AB4'/></Link>
                        <Link href={'https://www.facebook.com/'}><Facebook color='#025AB4'/></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
