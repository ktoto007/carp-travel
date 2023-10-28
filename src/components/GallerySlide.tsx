import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import Image from "next/image";

type slyde = {
  imgUrl: string[];
};
export default function GallerySlide({ imgUrl }: slyde) {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiper = useSwiper();

  let currentW: number = 415;
  let currentH: number = 294;
  let smallW: number = 121;
  let smallH: number = 87;

  if (windowWidth >= 1279) {
    currentW = 606;
    currentH = 429;
    smallW = 313;
    smallH = 225;
  }

  return (
    <ul className="flex gap-[24px]">
      <li className="flex items-center flex-wrap justify-end content-end gap-y-[47px] pc:gap-y-[30px]">
        <Image
          loading="lazy"
          src={imgUrl[0]}
          width={smallW}
          height={smallH}
          alt=""
        />
        <button
          className="text-[33px] font-[100] text-white"
          onClick={() => swiper.slidePrev()}
        >
          Back
        </button>
      </li>
      <li>
        <Image
          loading="lazy"
          src={imgUrl[1]}
          width={currentW}
          height={currentH}
          alt=""
        />
      </li>
      <li className="flex items-center flex-wrap justify-start content-end gap-y-[47px] pc:gap-y-[30px]">
        <Image
          loading="lazy"
          src={imgUrl[2]}
          width={smallW}
          height={smallH}
          alt=""
        />
        <button
          className="text-[33px] font-[100] text-white"
          onClick={() => swiper.slideNext()}
        >
          Next
        </button>
      </li>
    </ul>
  );
}
