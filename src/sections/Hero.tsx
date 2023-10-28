"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Paragraf from "@/components/Paragraf";
import Span from "@/components/Span";
import Title from "@/components/Title";
import BurgerMenu from "@/components/BurgerMenu";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const body = document.body;
    const hero = document.getElementById("Hero");

    showModal
      ? hero?.classList.add("backdrop-blur-[25px]")
      : hero?.classList.remove("backdrop-blur-[25px]");

    showModal
      ? body.classList.add("overflow-hidden")
      : body.classList.remove("overflow-hidden");
  }, [showModal]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section
        id="Hero"
        className="mob:max-w-[480px] mob:bg-cover mob:bg-hero mob:px-[20px] mob:pt-[36px] pb-[56px] tab:bg-tbHero tab:w-[768px] tab:px-[32px] tab:pt-[24px] tab:pb[68px] pc:bg-pcHero pc:w-[1280px] pc:px-[104px] pc:pb-[104px]"
      >
        <Header openModal={openModal} />
        <div className="tab:inline-flex tab:flex-row-reverse tab:gap-[48px] pc:gap-[150px] pc:mb-[52px]">
          <Paragraf classes="mb-[24px] text-right tab:text-start tab:pt-[40px] pc:pt-[46px]">
            <Span classes="font-[500] text-[37px] tab:text-[67px] pc:text-[98px]">
              7
            </Span>
            <Span classes="uppercase font-[100] text-[37px] tracking-[1.665px] tab:text-[67px] tab:tracking-[8.71px] pc:text-[98px] pc-tracking-normal">
              Days
            </Span>
            <Span classes="block font-[300] text-[12px] tracking-[9.48px] tab:text-[14px] tab:tracking-[25.9px] pc:text-[16px] pc:tracking-[36.48px]">
              JOURNEY
            </Span>
          </Paragraf>

          <Title>
            <Span classes="block font-[500]">Uncover </Span>
            <Span classes="block font-[100]">Carpathian’s</Span>
            <Span classes="block font-[100]">Secrets</Span>
          </Title>
        </div>

        <div className="mt-[24px] tab:flex tab:justify-between tab:relative">
          <Span classes="block text-white font-[200] mob:mb-[24px] leading-[16px] w-[157px] text-[10px]  tab:w-[263px] tab:text-[14px] tab:tracking-[1.26px] pc:w-auto pc:text-[16px] pc:leading-[24px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </Span>
          <div className="tab:absolute tab:bottom-0 tab:right-0">
            <Paragraf classes="mob:mb-[24px] tab:w-[230px] tab:mb-[28px] pc:w-[294px]">
              <Span classes="font-[200]">
                We offer you unforgettable trips to the most beautiful parts of
                the Carpathians. Enjoy stunning views, exciting expeditions, and
                the best service!
              </Span>
            </Paragraf>

            <div className="relative m-auto w-[280px] tab:w-[230px] pc:w-[294px]">
              <button className="block relative text-white font-[700] uppercase text-[18px] bg-btn px-[64px] py-[3px] mx-auto hover:bg-btnHov z-20 leading-[48px] w-[280px] tab:w-[230px] tab:leading-normal tab:py-[12px] pc:w-[294px] pc:text-[32px] tab:py-[9px]">
                Join Now
              </button>
              <span className="w-[280px] flex justify-between absolute top-0 left-0 tab:hidden">
                <svg className="w-[42px] h-[53px]">
                  <use href="/symbol-defs.svg#mbLeft" width={42} height={53} />
                </svg>
                <svg className="w-[42px] h-[53px]">
                  <use href="/symbol-defs.svg#mbRight" width={42} height={53} />
                </svg>
              </span>

              <span className="w-[230px] flex justify-between absolute top-0 left-0 mob:hidden pc:hidden">
                <svg className="w-[35px] h-[50px]">
                  <use href="/symbol-defs.svg#tabLeft" width={35} height={50} />
                </svg>
                <svg className="w-[35px] h-[50px]">
                  <use
                    href="/symbol-defs.svg#tabRight"
                    width={35}
                    height={50}
                  />
                </svg>
              </span>

              <span className="w-[293px]  justify-between absolute top-[-3px] left-0 mob:hidden tab:hidden pc:flex ">
                <svg className="w-[44px] h-[71px]">
                  <use href="/symbol-defs.svg#tabLeft" width={44} height={71} />
                </svg>
                <svg className="w-[44px] h-[71px]">
                  <use
                    href="/symbol-defs.svg#tabRight"
                    width={44}
                    height={71}
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
      {showModal && <BurgerMenu closeModal={closeModal} />}
    </>
  );
}
