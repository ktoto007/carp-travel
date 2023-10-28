"use client";
import Image from "next/image";
import Span from "@/components/Span";
import Title from "@/components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import GallerySlide from "@/components/GallerySlide";
import { Autoplay } from "swiper/modules";
const basePath = process.env.basePath || ".";

import "swiper/css";
export default function Gallery() {
  return (
    <section
      id="Gallery"
      className="px-[20px] bg-gallery mob:pt-[56px] mob:pb-[56px] mob:bg-cover mob:bg-center mob:max-w-[480px] tab:bg-tbGallery tab:w-[768px] tab:px-[32px] tab:pt-[64px] tab:pb-[55px] pc:bg-pcGallery pc:w-[1280px] pc:px-[80px] pc:pb-[104px]"
    >
      <Title classes="tabM:text-center">
        <Span classes="font-[100]"> Our</Span>
        <Span classes="font-[500]"> Gallery</Span>
      </Title>

      <ul className="mob:block ml-auto mr-auto w-[280px] hidden ">
        <li className=" mt-[24px] mb-[24px]">
          <Image
            loading="lazy"
            src={`${basePath}/mb-mountins.png`}
            width={280}
            height={187}
            alt="mountins"
          />
        </li>
        <li className=" mb-[24px]">
          <Image
            loading="lazy"
            src={`${basePath}./mb-lake.png`}
            width={280}
            height={187}
            alt="lake in forest"
          />
        </li>
        <li>
          <Image
            loading="lazy"
            src={`${basePath}/mb-houseInForest.png`}
            width={280}
            height={187}
            alt="house in Forest"
          />
        </li>
      </ul>

      <div className="mob:hidden tab:mt-[64px] pc:mt-[15px]">
        <Swiper
          effect={"coverflow"}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <GallerySlide
              imgUrl={[
                `${basePath}/sliderMountins.png`,
                `${basePath}/sliderLake.png`,
                `${basePath}/sliderHouseInForest.png`,
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <GallerySlide
              imgUrl={[
                `${basePath}/sliderLake.png`,
                `${basePath}/sliderHouseInForest.png`,
                `${basePath}/sliderMountins.png`,
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <GallerySlide
              imgUrl={[
                `${basePath}/sliderHouseInForest.png`,
                `${basePath}/sliderMountins.png`,
                `${basePath}/sliderLake.png`,
              ]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
