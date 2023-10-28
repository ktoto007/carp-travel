import Image from "next/image";
import Paragraf from "./Paragraf";
import Span from "./Span";
import Title from "./Title";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";

type slide = {
  num: string;
  imgUrl: string;
  textCall: string;
  description: string;
  id: number;
  bgUrl: string;
};

const menu: string[] = [
  "ATVs Traveling",
  "Rock climbing",
  " Hot air ballooning",
  "Skydiving",
  " Rafting",
];

function imgSize(width: number): string {
  if (width > 1279) {
    return "pc";
  }
  if (width > 779) {
    return "tb";
  }

  return "mb";
}

export default function ServisesSlide({
  num,
  imgUrl,
  textCall,
  description,
  id,
  bgUrl,
}: slide) {
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
  const img = `./${imgSize(windowWidth)}-${imgUrl}`;

  const swiper = useSwiper();
  const styles = `px-[20px] mob:pt-[54px] mob:pb-[56px] mob:max-w-[480px] mob:min-h-[851px] mob:bg-cover ${bgUrl} tab:min-h-[621px] tab:w-[768px] tab:px-[32px]   tab:py-[24px] pc:min-h-[779px]  pc:w-[1280px] pc:px-[104px] pc:py-[89px]`;
  return (
    <section className={styles}>
      <div className="mb-[24px] tab:flex tab:items-center tabM:justify-between pc:gap-[162px]">
        <Title>
          <Span classes="font-[100]">We </Span>
          <Span classes="font-[500]">offer</Span>
        </Title>
        <Paragraf classes="text-[43px] mob:mt-[24px] mob:text-right mob:tracking-[1.6px] tab:text-[67px] tabM:leading-[78px]  pc:text-[98px] ">
          <Span classes="font-[100]">{num}</Span>
          <Span classes="font-[100] opacity-20">05</Span>
        </Paragraf>
      </div>

      <div className="tab:flex tab:gap-[20px]">
        {windowWidth > 1279 && (
          <Image
            loading="lazy"
            src={img}
            width={607}
            height={409}
            alt={textCall}
          />
        )}
        {windowWidth > 767 && windowWidth < 1280 && (
          <Image
            loading="lazy"
            src={img}
            width={463}
            height={370}
            alt={textCall}
          />
        )}
        {windowWidth < 768 && (
          <Image
            loading="lazy"
            src={img}
            width={330}
            height={240}
            alt={textCall}
          />
        )}

        <div className="mob:mt-[12px] pc:flex  pc:flex-wrap">
          <div className="tab:flex tabM:flex-col-reverse pc:flex-row-reverse">
            <Paragraf classes="mb-[24px] mob:text-right ">
              <Span classes="font-[200] text-[12px] leading-[24px] tracking-[2.4px] ">
                {textCall}
              </Span>
            </Paragraf>

            <ul className="tab:mb-[25px]">
              {menu.map((el: string, ind: number) => {
                let styles: string =
                  "text-[20px] text-white font-[200] opacity-50 uppercase leading-[17px] hover:opacity-100  tab:text-[22px] tab:leading-[18px] pc:text-[28px] pc:leading-[24px]";

                if (ind === id) {
                  styles = styles.replace("font-[200] ", "font-[500]");
                  styles = styles.replace("opacity-100", "");
                }

                return (
                  <li
                    key={ind}
                    className={ind < menu.length - 1 ? "mb-[16px]" : ""}
                  >
                    <button
                      className={styles}
                      onClick={() => {
                        swiper.slideTo(ind);
                      }}
                    >
                      {ind === id ? (
                        <p className="flex  tab:w-[254px] pc:w-[318px]">
                          <span className="flex items-center mr-[8px]">
                            <svg className="w-[10px] h-[10px]">
                              <use
                                href="./symbol-defs.svg#listRhombus"
                                width={8}
                                height={8}
                              ></use>
                            </svg>
                          </span>
                          {el}
                        </p>
                      ) : (
                        el
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <Paragraf classes="mob:mt-auto tab:w-[220px] pc:w-[293px] pc:ml-auto">
            <Span classes="font-[200] tab:font-[13px] pc:font-[18px]  pc:leading-[24px]">
              {description}
            </Span>
          </Paragraf>
        </div>
      </div>
    </section>
  );
}
