"use client";
import Paragraf from "@/components/Paragraf";
import Span from "@/components/Span";
import Title from "@/components/Title";
import CareerForm from "@/components/forms/CareerForm";

export default function Career() {
  return (
    <section
      id="Career"
      className="px-[20px] py-[56px] bg-career bg-top  mob:bg-repeat-y  mob:max-w-[480px] tab:bg-tbCareer tab:w-[768px] tab:px-[32px] tab:py-[51px] pc:bg-pcCareer pc:w-[1280px] pc:px-[104px] pc:py-[104px]"
    >
      <div className="mob:mb-[36px] tab:flex tab:justify-between tab:items-center ">
        <Title>
          <Span classes="font-[100]">chose </Span>
          <Span classes="font-[500]">us</Span>
        </Title>

        <Paragraf classes="font-[200] w-[179px] mobml-auto mob:mt-[24px] tab:w-[267px] tab:text[13px] pc:w-[293px] pc:text-[18px] pc:leading-[24px]">
          <Span classes="font-[200]">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </Span>
        </Paragraf>
      </div>
      <div className="flex mob:flex-col mob:gap-[112px] tab:gap[20px] pc:gap-[24px]">
        <div className="">
          <h3 className="text-[30px] font-[200] uppercase text-white mb-[36px] ml-[100px] tab:mb-[56px]">
            Why Us?
          </h3>
          <ul className="mob:w-[181px] tabM:w-[221px]">
            <li className="text-right mb-[16px] pc:flex pc:gap-[24px]">
              <Paragraf classes="mb-[8px] tab:text-[16px] pc:text-[18px] pc:leading-[24px] pc:w-[272px] ">
                <Span classes="font-[400] ">Professional development</Span>
              </Paragraf>
              <Paragraf classes="pc:text-left pc:w-[285px]">
                <Span classes="font-[200] text-[12px] pc:leading-[24px] ">
                  We offer growth opportunities and a creative environment to
                  nurture your talents.
                </Span>
              </Paragraf>
            </li>

            <li className="text-right mb-[16px] pc:flex pc:gap-[24px] ">
              <Paragraf classes="mb-[8px] tab:text-[16px] pc:text-[18px] pc:leading-[24px] pc:w-[272px]">
                <Span classes="font-[400]">Teamwork</Span>
              </Paragraf>
              <Paragraf classes="pc:text-left pc:w-[285px]">
                <Span classes="font-[200] text-[12px] pc:leading-[24px] ">
                  Join our close-knit family, where support and inspiration
                  abound.
                </Span>
              </Paragraf>
            </li>

            <li className="text-right mb-[16px] pc:flex pc:gap-[24px]">
              <Paragraf classes="mb-[8px] tab:text-[16px] pc:text-[18px] pc:leading-[24px] pc:w-[272px]">
                <Span classes="font-[400]">Stimulating work environment</Span>
              </Paragraf>
              <Paragraf classes="pc:text-left pc:w-[285px]">
                <Span classes="font-[200] text-[12px] pc:leading-[24px] ">
                  Flexibility and remote options for a comfortable experience.
                </Span>
              </Paragraf>
            </li>

            <li className="text-right mb-[16px] pc:flex pc:gap-[24px]">
              <Paragraf classes="mb-[8px] tab:text-[16px] pc:text-[18px] pc:leading-[24px] pc:w-[272px]">
                <Span classes="font-[400]">Exciting challenges</Span>
              </Paragraf>
              <Paragraf classes="pc:text-left pc:w-[285px]">
                <Span classes="font-[200] text-[12px] pc:leading-[24px] ">
                  Unleash your potential through unforgettable projects
                  showcasing Carpathian beauty.
                </Span>
              </Paragraf>
            </li>
          </ul>
        </div>

        <CareerForm />
      </div>
    </section>
  );
}
