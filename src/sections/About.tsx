import Paragraf from "@/components/Paragraf";
import Span from "@/components/Span";
import Title from "@/components/Title";

export default function About() {
  return (
    <>
      <section
        id="About"
        className="px-[20px] bg-about mob:pt-[55px] mob:pb-[54px] mob:bg-cover mob:bg-center mob:max-w-[480px] tab:bg-tbAbout tab:w-[768px] tab:px-[32px] tab:py-[64px] pc:bg-pcAbout pc:w-[1280px] pc:px-[104px] pc:py-[104px]"
      >
        <div className="tab:flex tab:justify-between tab:mb-[57px] pc:justify-start pc:gap-[36px]">
          <Title>
            <Span classes="font-[100]"> Who</Span>
            <Span classes="font-[500]"> we are</Span>
          </Title>

          <div className="w-[180px] mob:mt-[8px] mob:mb-[20px] tab:w-[220px] pc:w-[292px]">
            <Paragraf classes="tab:mb-[16px] tab:pt-[16px] pc:pt-[32px]">
              <Span classes="font-[500]">a team of enthusiasts who </Span>
              <Span classes="font-[100]">
                are fully committed to the mission of creating unforgettable and
                extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </Span>
            </Paragraf>
            <Paragraf>
              <Span classes="font-[500]">We believe</Span>
              <Span classes="font-[100]">
                that nature has the power to inspire, strengthen character and
                provide new perspectives. Therefore, each of our tours is aimed
                at unlocking your potential, enriching your spiritual world and
                creating unforgettable memories.
              </Span>
            </Paragraf>
          </div>
        </div>

        <div className="tab:flex tab:justify-end tabM:gap-[23px] tabM:relative pc:flex-row-reverse pc:justify-between">
          <div className="flex flex-wrap justify-end w-[200px] mob:my-[40px] mob:ml-auto tab:w-[221px] tabM:absolute tabM:left-0 tabM:bottom-[124px]">
            <Paragraf>
              <Span classes="uppercase font-[400] w-[180px] block tab:w-[221px] pc:w-[296px]">
                From vacationers
              </Span>
            </Paragraf>
            <Paragraf classes="tab:text-right">
              <Span classes="uppercase font-[400] block tab:w-[221px] pc:w-[296px]">
                to active travelers
              </Span>
            </Paragraf>
            <Paragraf>
              <Span classes="font-[200] block tab:w-[221px] pc:w-[296px]">
                we have a tour for everyone.
              </Span>
            </Paragraf>
          </div>
          <Paragraf classes="tab:w-[463px] pc:w-[605px]">
            <Span classes="font-[500]">We use methods</Span>
            <Span classes="font-[100]">
              that are time-tested and proven. Our expert guides with in-depth
              knowledge of the Carpathian landscapes lead you safely through the
              mysteries of these mountains.
            </Span>
          </Paragraf>
        </div>
      </section>
    </>
  );
}
