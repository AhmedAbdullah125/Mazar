import Link from 'next/link';
import React from 'react';
import img from '/public/iPhone.png';
import bg from '/public/mecca.jpg';
import apple from '/public/apple.png';
import google from '/public/google.png';
import Image from 'next/image';
export default function AppExplore() {

    return (
        <div style={{ backgroundImage: `url(${bg.src})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
            <div className="AppExplore">
                <div className="container m-auto  genSection ">
                    <div className="img-cont">
                        <Image src={img} alt="Mazar" className="img" />
                    </div>
                    <div className="l-side" >
                        <h2 className='font-bold text-[#141414]'>Enjoy full experience with our app</h2>
                        <p className="text-2xl font-medium mb-4 text-[#5A5A5A]">Unlock the full potential of our app today! Book trips seamlessly, access engaging content, and enjoy even more features designed to make your experience smooth and enjoyable</p>
                        <Link href="/"><Image src={google} alt="Mazar" className="img" /></Link>
                        <Link href="/"><Image src={apple} alt="Mazar" className="img" /></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
