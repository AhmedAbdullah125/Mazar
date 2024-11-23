import React from 'react'; // Importing React to use JSX syntax and create components.
import c from '/public/c.svg'
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() { // Defining the main functional component named 'Footer'.

    return (
        <footer className=''> {/* Main footer container with padding and background color */}
            <div className="container m-auto"> {/* Container for the footer content */}
                <div className="footer-cont">
                    <div className="copyRight">
                        <Image src={c} alt="Mazar" className="img" />
                        <p>Licensed by the Ministry of Tourism ,license number 73104705</p>
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
