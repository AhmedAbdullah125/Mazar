'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pause, Play } from 'lucide-react';
import NumberTicker from '../ui/number-ticker';
// import vid from '../../assets/images/home/vid.mp4'
export default function About() {

    let [play, setPlay] = useState(false);
    return (
        <section className="about-section">
            <div className="container m-auto">
                <div className="about-cont">
                    <div className="media">
                        <div className="vid w-full">
                            <video className='vid-player' muted autoPlay="">
                                <source src='https://www.w3schools.com/html/mov_bbb.mp4' type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                            {/* <video className='vid-player' muted>
                                <source src="/public/vid.mp4" type="video/mp4" />
                                <source src="/static/media/vid1.6a518edcaf4c6383cdf7.mp4" type="video/ogg"></source>

                            </video> 
                            <video >
                                {/* <source
                                    src="./public/vid.mp4"
                                    type="video/mp4"
                                /> *
                                <source
                                    src={require("../../assets/images/home/vid.mp4")}
                                    type="video/ogg"
                                />
                                Your browser does not support the video tag.
                            </video> */}
                            <div className={`${play ? "" : "bg-black/10"} play-btn`} >
                                {
                                    play ?
                                        <Pause size={36} color="#ffffff" className='pause-bttn' onClick={() => {
                                            document.querySelector('.vid-player').pause();
                                            setPlay(false)
                                        }} />
                                        :
                                        <Play size={36} color="#ffffff" className='play-bttn' onClick={() => {
                                            document.querySelector('.vid-player').play();
                                            setPlay(true)
                                        }} />
                                }
                            </div>
                        </div>
                        <div className="text w-full">
                            <h2>About MZAR</h2>
                            <p>
                                In the heart of every Muslim beats the honor and passion for serving the guests of the Merciful (Allah), who travel from all corners of the earth to the holy lands to perform the Hajj and Umrah pilgrimages.

                                Striving to facilitate this spiritual journey has always been an act of worship through which servers draw closer to God, responding to the call of the heavens with deeds that embody benevolence and care.

                                From this principle, the idea of the Mazar application was born. It is designed to be a companion for every visitor, a digital platform that offers enriching and informative journeys to visit the most important religious, historical, cultural, and tourist sites with ease and convenience.

                                The electronic application allows its users to schedule their visit, choose the date and time, and select the mode of transportation from multiple options.

                                Our ideas are inspired by Saudi Arabia’s Vision 2030 and its goals in the Guest of the Merciful Program to enhance the experience.
                            </p>

                        </div>
                    </div>
                    <div className="analysis">
                        <h3>Our numbers </h3>
                        <div className="counters">
                            <div className="counter">
                                <h4>Served</h4>
                                <p className="whitespace-pre-wrap text-6xl font-semibold tracking-tighter text-secColor dark:text-white">
                                    + <NumberTicker value={1000} />
                                </p>
                                <h5>Guests</h5>
                            </div>
                            <div className="counter">
                                <h4>Spent</h4>
                                <p className="whitespace-pre-wrap text-6xl font-semibold tracking-tighter text-secColor dark:text-white">
                                    + <NumberTicker value={3500} />
                                </p>
                                <h5>Hours of trips</h5>
                            </div>
                            <div className="counter">
                                <h4>Over</h4>
                                <p className="whitespace-pre-wrap text-6xl font-semibold tracking-tighter text-secColor dark:text-white">
                                    + <NumberTicker value={4000} />
                                </p>
                                <h5>Satisfied client</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
