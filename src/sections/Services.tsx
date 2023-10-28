"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import ServisesSlide from "@/components/ServisesSlide";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Services() {
  return (
    <Swiper
      id="Services"
      effect={"fade"}
      modules={[EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>
        <ServisesSlide
          num="01/"
          imgUrl="slideOne.png"
          textCall="Feel the adrenaline rush"
          description="Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains."
          id={0}
          bgUrl="bg-One tab:bg-tbOne pc:bg-pcOne"
        />
      </SwiperSlide>

      <SwiperSlide>
        <ServisesSlide
          num="02/"
          imgUrl="slideTwo.png"
          textCall="Destroy your limitations"
          description="Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks."
          id={1}
          bgUrl="bg-Two tab:bg-tbTwo pc:bg-pcTwo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ServisesSlide
          num="03/"
          imgUrl="slideThree.png"
          textCall="Get Inspired"
          description="Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless."
          id={2}
          bgUrl="bg-Three tab:bg-tbThree pc:bg-pcThree"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ServisesSlide
          num="04/"
          imgUrl="slideFour.png"
          textCall="Overcome your fears"
          description="Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever."
          id={3}
          bgUrl="bg-Four tab:bg-tbFour pc:bg-pcFour"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ServisesSlide
          num="05/"
          imgUrl="slideFive.png"
          textCall="Trust the flow"
          description="Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains."
          id={4}
          bgUrl="bg-Five tab:bg-tbFive pc:bg-pcFive"
        />
      </SwiperSlide>
    </Swiper>
  );
}
