'use client'
import Image from 'next/image';
import Link from 'next/link';
import hero from '/public/hero.jpg'
import iPhones from '/public/iPhones.png'
import translate from '/public/translate.png'
import pin from '/public/pin.png'
import { AudioLines } from 'lucide-react';
import { motion } from 'framer-motion';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"
export default function Hero() {

    return (
        <div className="hero" style={{ backgroundImage: `url(${hero.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="relative">
                <div className=" bg-black/50 overlay" >
                    <div className="welcome container m-auto">
                        <div className="hero-text">
                            <h1>Explore <span>Mecca</span> with us !</h1>
                            <p>Explore Mecca with us !</p>
                            <Link href="/#paths" className='hero-book-btn'>Boook Now</Link>
                        </div>
                        <div className="iPhones">
                            <Image src={iPhones} alt="Mazar" className="iphones-img" />
                        </div>
                    </div>
                    <div className="features container m-auto">

                        <motion.div
                          initial={{ opacity: 0, y: -100 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .2,
                          }}
                          viewport={{ once: true }}
                          className="feature"
                          >
                            <AudioLines size={48}  color="#025AB4"/>
                            <p>Intelligent voice guidance</p>
                        </motion.div>
                        <motion.animatediv
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: .3,
                        }}
                        viewport={{ once: true }}
                        className="feature">
                            <Image src={translate} alt="Mazar" className=" h-12" />
                            <p>Intelligent voice guidance</p>
                        </motion.animatediv>
                        <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: .9,
                        }}
                        className="feature">
                            <Image src={pin} alt="Mazar" className=" h-12" />
                            <p>Intelligent voice guidance</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
