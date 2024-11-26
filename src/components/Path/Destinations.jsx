'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '/public/heraa.png';
import img2 from '/public/mecca.jpg';
import img3 from '/public/thawr.png';
import img4 from '/public/fly.png';
import img5 from '/public/mount.png';
import img6 from '/public/wall.png';
import { title } from 'process';
export default function PathInfo() {
    let [more, setMore] = useState(false);
    let destinations = [
        { id: 1, img: img1, name: "Mount Thawr", title: "Stay Duration: 20 minutes", p: "Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit." },
        { id: 2, img: img2, name: "Mount Thawr", title: "Stay Duration: 20 minutes", p: "Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit." },
        { id: 3, img: img3, name: "Mount Thawr", title: "Stay Duration: 20 minutes", p: "Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit." },
        { id: 4, img: img4, name: "Mount Thawr", title: "Stay Duration: 20 minutes", p: "Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit." },
        { id: 5, img: img5, name: "Mount Thawr", title: "Stay Duration: 20 minutes", p: "Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit." },
        { id: 6, img: img6, name: "Mount Thawr", title: "Stay Duration: 20 minutes", p: "Mount Thawr is the mountain that shelters the cave where the Messenger of Allah, peace and blessings be upon him, and his companion took refuge on their migration journey to Medina. It stands as a witness to the great migration story in our Islamic history, along with other stories we share with you during the visit." },
    ]
    let [destinationsCopy, setDestinationsCopy] = useState(destinations.slice(0, 4));
    // setDestinationsCopy(destinations.slice(0, 4));
    // if (destinations.length > 4) {
    // }
    // else {
    //     setDestinationsCopy([...destinations]);
    // }

    return (
        <div className="destinations container m-auto">
            <div className="destinations-drid">
                {
                    destinationsCopy.map((item) =>
                        <div className="destination">
                            <div className="img-cont">
                                <Image src={item.img} alt="Mazar"></Image>
                            </div>
                            <div className="text">
                                <h2>{item.name}</h2>
                                <h3>{item.title}</h3>
                                <p>{item.p}</p>

                            </div>
                        </div>
                    )
                }
                {/* <div className="destination">
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
                </div> */}
                <h2 className='show-more' style={{ display: destinations.length > destinationsCopy.length ? 'block' : 'none' }} onClick={() => setDestinationsCopy([...destinations])}>Show More</h2>
            </div>

            <div className="ready">
                <h2>Ready to start your journey now </h2>
                <p>contact us and book your trip </p>
                <Link href={'/book'}>Book now</Link>
            </div>
        </div>
    );
}
