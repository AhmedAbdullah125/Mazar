import Link from 'next/link';
import React from 'react';
import img from '/public/flexr.png';
import bg from '/public/bg.png';
import Image from 'next/image';
export default function GenSection() {

    return (
        <div style={{ backgroundImage: `url(${bg.src})`,backgroundRepeat: 'no-repeat' }}>
            <div className="genGeb">
                <div className="container m-auto  genSection ">
                    <div className="l-side" >
                        <h2 className='font-bold text-[#141414]'>Gently start your journey with us</h2>
                        <p className="text-2xl font-medium mb-4 text-[#5A5A5A]">book your trip today and let us take care of the rest!</p>
                        <Link href={'/book'} className='px-8 py-2 text-white rounded-lg bg-primaryColor inline-block w-fit'>Book now</Link>
                    </div>
                    <div className="img-cont">
                        <div className="overlay"></div>
                        <Image src={img} alt="Mazar" className="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
