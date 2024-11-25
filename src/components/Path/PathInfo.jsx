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
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Cable, Milk, Wifi } from 'lucide-react';
export default function PathInfo() {
  let path = { id: 1, name: "heraa path", imgs: [{ id: 1, img: img1, name: "مسجد" }, { id: 2, img: img2, name: "طريق" }, { id: 3, img: img3, name: "متحف" }, { id: 4, img: img4, name: "معرض" }, { id: 5, img: img5, name: "جبل" }, { id: 6, img: img6, name: "مسجد" }] };
  let facilities = [{ id: 1, name: "Wifi", data: <Wifi color="#0361B5" /> }, { id: 2, name: 'Water', data: <Milk color="#0361B5" /> }, { id: 3, name: "Charging cables", data: <Cable color="#0361B5" /> }]
  let activities = [{ id: 1, img: img1, name: "مسجد" }, { id: 2, img: img2, name: "طريق" }, { id: 3, img: img3, name: "متحف" }, { id: 4, img: img4, name: "معرض" }, { id: 5, img: img5, name: "جبل" },]
  const NewsSwiperRef = useRef(null);
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  return (
    <div className='container m-auto path'>
      <div className="pathHead">
        <h1>{path.name} </h1>
        <Link href="/book" className='book-link' >Book now</Link>
      </div>
      <div className="pathdata">
        <div className="imgs w-full">
          <div className="imgs-grid">
            {
              path.imgs.map((img, index) =>
                <div className="img-cont" key={index}>
                  {
                    index == 2 ?
                      <Image src={img.img} alt="Mazar" />
                      :
                      <a href={img.img.src} data-fancybox="post">
                        <figure>
                          <Image src={img.img} alt="Mazar" />
                        </figure>
                      </a>

                  }
                  {
                    index == 2 ?
                      <div className="rest"><a href={img.img.src} data-fancybox="post">+{path.imgs.length - 2}</a></div>
                      : null
                  }
                </div>
              )
            }
          </div>
        </div>
        <div className="places w-full">
          <h4>During the trip </h4>
          <p>See the trip content and places you will visit</p>
          <div className="places-grid">
            {
              path.imgs.map((img, index) =>
                <div className="place-cont" key={index}>
                  <Image src={img.img} alt="Mazar" />
                  <p>{img.name}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className="facilities-duration">
        <div className="facilities w-full">
          <h3>Facilities</h3>
          <div className="facilities-cont">
            {
              facilities.map((facility, index) =>
                <div className="facility-cont" key={index}>
                  {facility.data}
                  <p>{facility.name}</p>
                </div>
              )
            }
          </div>
        </div>
        <div className="duration w-full">
          <div className="hh">
            <p className='trip-duration-head'>Trip duration:</p>
            <p className='trip-duration-title'>2 Hours and 30 minutes</p>
          </div>
          <div className="trip-data">
            <h4>Best time to visit </h4>
            <p>From 8:00 am to 3:00pm</p>
          </div>
        </div>
      </div>
      <div className="activities">
        <h5>Activities</h5>
        <p>See enjoyment in your spiritual journey</p>
        <div className="activities-grid">
          {
            activities.map((activity, index) =>
              <div className="activity-cont" key={index}>
                <Image src={activity.img} alt="Mazar" />
                <p>{activity.name}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
