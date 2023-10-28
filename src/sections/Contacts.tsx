"use client";
import Span from "@/components/Span";
import Title from "@/components/Title";
import ContactForm from "@/components/forms/ContactForm";

export default function Contacts() {
  return (
    <section
      id="Contacts"
      className="px-[20px] mob:pt-[55px] mob:pb-[54px] mob:max-w-[480px] mob:bg-contacts mob:bg-cover tab:bg-tbContacts tab:w-[768px] tab:px-[32px] tab:py-[43px] pc:bg-pcContacts pc:w-[1280px] pc:px-[104px] pc:py-[95px]"
    >
      <Title>
        <Span classes="font-[100]"> Contact</Span>
        <Span classes="font-[500]"> Us</Span>
      </Title>

      <div className="mt-[36px] pc:flex pc:justify-between">
        <div className="tab:flex tabM:gap-[90px] tabM:ml-[34px] tabM:mb-[64px] pc:gap-[124px] pc:inline-flex pc:flex-col ">
          <div>
            <div className="flex gap-[20px] mob:justify-end tabM:justify-end mb-[24px] pc:mb-[64px]">
              <ul className="tab:pl-[30px] pc:pl-[34px]">
                <li>
                  <a
                    className="text-white text-[14px] font-[400] leading-[24px] tab:text-[16px] pc:text-[18px]"
                    href="tel:  +38 (098) 12 34 567"
                  >
                    +38 (098) 12 34 567
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-[14px] font-[400] leading-[24px] tab:text-[16px] pc:text-[18px]"
                    href="tel: +38 (073) 12 34 567"
                  >
                    +38 (073) 12 34 567
                  </a>
                </li>
              </ul>
              <Span classes="font-[200] text-[12px] leading-[20px] text-white">
                Phone number
              </Span>
            </div>
            <div className="flex gap-[20px] mb-[24px] ">
              <a
                className="text-white text-[14px] font-[400] leading-[24px] tab:text-[16px] pc:text-[18px]"
                href="mailto: support@carptravel.com"
              >
                support@carptravel.com
              </a>
              <Span classes="font-[200] text-[12px] leading-[20px]  text-white">
                E-mail
              </Span>
            </div>
          </div>
          <div className="flex gap-[20px]  mob:flex-row-reverse tab:justify-end tabM:flex-row-reverse">
            <ul>
              <li>
                <a
                  className="text-white text-[14px] font-[400] leading-[24px] tab:text-[16px] pc:tab:text-[18px] hover:underline"
                  href=""
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[14px] font-[400] leading-[24px] tab:text-[16px] pc:tab:text-[18px] hover:underline"
                  href=""
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[14px] font-[400] leading-[24px] tab:text-[16px] pc:tab:text-[18px] hover:underline"
                  href=""
                >
                  youtube
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[14px] font-[400] leading-[24px] tab:text-[16px] pc:tab:text-[18px] hover:underline"
                  href=""
                >
                  tiktok
                </a>
              </li>
            </ul>
            <Span classes="font-[200] text-[12px] leading-[20px]  text-white">
              Follow us
            </Span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
