'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '/public/heraa.png';
import img2 from '/public/mecca.jpg';
import img3 from '/public/thawr.png';
import img4 from '/public/fly.png';
import img5 from '/public/mount.png';
import img6 from '/public/wall.png';
export default function PathInfo() {

    return (
        <div className="destinations container m-auto">
            <div className="destinations-drid">
                <div className="destination">
                    <div className="img-cont">
                        <Image src={img1} alt="Mazar"></Image>
                    </div>
                    <div className="text">
                        <h2>Mount Thawr</h2>
                        <h3>Stay Duration: 20 minutes</h3>
                        <p>Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit.</p>

                    </div>
                </div>
                <div className="destination">
                    <div className="img-cont">
                        <Image src={img1} alt="Mazar"></Image>
                    </div>
                    <div className="text">
                        <h2>Mount Thawr</h2>
                        <h3>Stay Duration: 20 minutes</h3>
                        <p>Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit.</p>

                    </div>
                </div>
                <div className="destination">
                    <div className="img-cont">
                        <Image src={img1} alt="Mazar"></Image>
                    </div>
                    <div className="text">
                        <h2>Mount Thawr</h2>
                        <h3>Stay Duration: 20 minutes</h3>
                        <p>Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit.</p>

                    </div>
                </div>
                <div className="destination">
                    <div className="img-cont">
                        <Image src={img1} alt="Mazar"></Image>
                    </div>
                    <div className="text">
                        <h2>Mount Thawr</h2>
                        <h3>Stay Duration: 20 minutes</h3>
                        <p>Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit.</p>

                    </div>
                </div>
            </div>
        </div>
    );
}
