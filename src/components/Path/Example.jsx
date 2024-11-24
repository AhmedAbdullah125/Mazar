'use client'
import React, { useRef } from "react";
import img1 from '/public/heraa.png';
import img2 from '/public/mecca.jpg';
import img3 from '/public/thawr.png';
import img4 from '/public/fly.png';
import img5 from '/public/mount.png';
import img6 from '/public/wall.png';
import img7 from '/public/mount.png';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Image from "next/image";


export default function Video() {
  let viids = [
    { id: 1, LazyLoadImage: img1 },
    { id: 2, LazyLoadImage: img2 },
    { id: 3, LazyLoadImage: img3 },
    { id: 4, LazyLoadImage: img4 },
    { id: 5, LazyLoadImage: img5 },
    { id: 6, LazyLoadImage: img6 },
    { id: 7, LazyLoadImage: img7 },
  ];
  const NewsSwiperRef = useRef(null);
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  // new Fancybox(
  //   [
  //     {
  //       src: "<p>Lorem ipsum dolor sit amet.</p>",
  //       type: "html",
  //     },
  //   ],
  //   {
  //     // Your custom options
  //   }
  // );
  // Fancybox.fromNodes(
  //   Array.from(document.querySelectorAll('[data-fancybox="gallery"]')),
  //   {
  //     // Your custom options
  //   }
  // );
  return (
    <section class="video-section" id="videos">
      <div class="container">
        <div class="video-cont">
          <div class="about-content">
            <div class="video-content">
              <h3 class="store-title">شاهد المقاطع</h3>
              <p class="about-pargh">
                الملاعب يقدم لملاك الملاعب والأكاديميات العديد من الخدمات
                المميزة، مثل تسويقهم لمئات الآلاف من اللاعبين، وتسهيل
              </p>
            </div>
          </div>
          <div class="parent-cont parent-cont1">
            <div class="parent_slide">
              <div class="block1">
                <div class="slide">
                  <a href={img1.src} data-fancybox="post">
                    <figure>
                     <Image src={img1} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img5.src} data-fancybox="post">
                    <figure>
                     <Image src={img5} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img2.src} data-fancybox="post">
                    {" "}
                    <figure>
                      {" "}
                     <Image src={img2} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img6.src} data-fancybox="post">
                    <figure>
                     <Image src={img6} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img6.src} data-fancybox="post">
                    <figure>
                     <Image src={img6} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img6.src} data-fancybox="post">
                    <figure>
                     <Image src={img6} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img7.src} data-fancybox="post">
                    <figure>
                     <Image src={img7} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img3.src} data-fancybox="post">
                    <figure>
                     <Image src={img3} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img4.src} data-fancybox="post">
                    <figure>
                     <Image src={img4} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img4.src} data-fancybox="post">
                    <figure>
                     <Image src={img4} alt="videos" />
                    </figure>
                  </a>
                </div>
               
                <div class="slide">
                  <a href={img1.src} data-fancybox="post">
                    <figure>
                     <Image src={img1} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img5.src} data-fancybox="post">
                    <figure>
                     <Image src={img5} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img2.src} data-fancybox="post">
                    {" "}
                    <figure>
                      {" "}
                     <Image src={img2} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img6.src} data-fancybox="post">
                    <figure>
                     <Image src={img6} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img6.src} data-fancybox="post">
                    <figure>
                     <Image src={img6} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img6.src} data-fancybox="post">
                    <figure>
                     <Image src={img6} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img7.src} data-fancybox="post">
                    <figure>
                     <Image src={img7} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img3.src} data-fancybox="post">
                    <figure>
                     <Image src={img3} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img4.src} data-fancybox="post">
                    <figure>
                     <Image src={img4} alt="videos" />
                    </figure>
                  </a>
                </div>
                <div class="slide">
                  <a href={img4.src} data-fancybox="post">
                    <figure>
                     <Image src={img4} alt="videos" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="parent-cont parent-cont2">
            <div className="parent_slide">
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}