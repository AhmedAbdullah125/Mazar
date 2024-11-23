'use client'


import Image from 'next/image';
import Link from 'next/link';
import heraa from '/public/heraa.png'
import mecca from '/public/mecca.jpg'
import thawr from '/public/thawr.png'
import fly from '/public/fly.png'
import mount from '/public/mount.png'
import wall from '/public/wall.png'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Paths() {
    let paths = [
        { id: 1, name: "Heraa path", img: heraa, duration: "2 hours and 30 minutes", imgs: [{ id: 1, name: "heraa mountain", img: thawr }, { id: 5, name: "Maccah", img: mecca }, { id: 2, name: "Thawr mountain", img: mount }, { id: 3, name: "Mount wall", img: wall }, { id: 4, name: "Mount From sky", img: fly }], discription: "We take you on a spiritual journey, guiding you through the holy sites starting from Arafat with three hours and 30 minutes of spiritual exploration through the holy sites starting from Arafat with three hours and 30 minutes" },
        { id: 2, name: "Heraa path", img: mecca, duration: "1 hours and 12 minutes", imgs: [{ id: 1, name: "heraa mountain", img: wall }, { id: 2, name: "Thawr mountain", img: fly }, { id: 1, name: "Maccah", img: mecca }, { id: 3, name: "Mount wall", img: thawr }, { id: 4, name: "Mount From sky", img: mount }], discription: "We take you on a spiritual journey, guiding you through the holy sites starting from Arafat with three hours and 30 minutes of spiritual exploration through the holy sites starting from Arafat with three hours and 30 minutes" },
        { id: 3, name: "Heraa path", img: wall, duration: "2 hours and 30 minutes", imgs: [{ id: 1, name: "heraa mountain", img: mount }, { id: 2, name: "Thawr mountain", img: heraa }, { id: 3, name: "Mount wall", img: fly }, { id: 1, name: "Maccah", img: mecca }, { id: 4, name: "Mount From sky", img: thawr }], discription: "We take you on a spiritual journey, guiding you through the holy sites starting from Arafat with three hours and 30 minutes of spiritual exploration through the holy sites starting from Arafat with three hours and 30 minutes" },
        { id: 4, name: "Heraa path", img: mount, duration: "2 hours and 30 minutes", imgs: [{ id: 1, name: "heraa mountain", img: fly }, { id: 2, name: "Thawr mountain", img: wall }, { id: 3, name: "Mount wall", img: mount }, { id: 4, name: "Mount From sky", img: thawr }, { id: 1, name: "Maccah", img: mecca }], discription: "We take you on a spiritual journey, guiding you through the holy sites starting from Arafat with three hours and 30 minutes of spiritual exploration through the holy sites starting from Arafat with three hours and 30 minutes" },
        { id: 5, name: "Heraa path", img: fly, duration: "2 hours and 30 minutes", imgs: [{ id: 1, name: "heraa mountain", img: thawr }, { id: 2, name: "Thawr mountain", img: mount }, { id: 3, name: "Mount wall", img: wall }, { id: 4, name: "Mount From sky", img: fly }, { id: 1, name: "Maccah", img: mecca }], discription: "We take you on a spiritual journey, guiding you through the holy sites starting from Arafat with three hours and 30 minutes of spiritual exploration through the holy sites starting from Arafat with three hours and 30 minutes" },
    ]
    return (
        <div className="paths container m-auto" id='paths'>
            <div className="title">
                <h2>Mzar Paths</h2>
                <p>Enjoy enriching trips and create everlasting memories filled with knowledge about Islamic civilization, the birthplace of revelation, and the launch of the prophetic message.</p>
            </div>
            <div className="path-swiper w-full">
                <Swiper
                    // navigation
                    // pagination={{ type: "bullets", clickable: true }}
                    spaceBetween={32}
                    slidesPerView={7.5}
                    autoplay={false}
                    loop={false}
                    modules={[Autoplay, Navigation, Pagination]}
                    breakpoints={{
                        1400: {
                            slidesPerView: 2.4,
                        },
                        1100: {
                            slidesPerView: 2.2,
                        },
                        767: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 1.5,
                            autoplay: false,
                        },
                        640: {
                            slidesPerView: 1.2,
                            autoplay: false,
                            spaceBetween: 16
                        },
                        100: {
                            slidesPerView: 1.2,
                            autoplay: false,
                            spaceBetween: 16

                        }
                    }}
                >
                    {paths.map((path) =>
                        <SwiperSlide key={path.id}>
                            <div className="path-card">
                                <div className="img-cont">
                                    <Image
                                        src={path.img}
                                        alt="Mazar"
                                        className="path-img"
                                    />
                                    <div className="duration">{path.duration}</div>
                                </div>
                                <h3>{path.name}</h3>
                                <p>{path.discription}</p>
                                <div className="small-imgs-slider w-full">
                                    <Swiper
                                        // navigation
                                        // pagination={{ type: "bullets", clickable: true }}
                                        spaceBetween={14}
                                        slidesPerView={4}
                                        autoplay={true}
                                        loop={true}
                                        modules={[Autoplay, Navigation, Pagination]}
                                        
                                        breakpoints={{
                                            
                                            640: {
                                                slidesPerView: 4,
                                                autoplay: false,
                                            },
                                            100: {
                                                slidesPerView: 3,
                                                autoplay: false,
                                            }
                                        }}
                                    >
                                        {path.imgs.map((img) =>
                                            <SwiperSlide key={path.id}>
                                                <div className="small-swiper-img-name">
                                                    <div className="samll-img-cont">
                                                        <Image
                                                            src={img.img}
                                                            alt="Mazar"
                                                        />
                                                    </div>
                                                    <h6>
                                                        {img.name}
                                                    </h6>
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                                <Link href="/path" className='view-detials'>View details </Link>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
}
