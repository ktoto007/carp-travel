"use client";
import Image from "next/image";

type header = {
  openModal: () => void;
};
export default function Header({ openModal }: header) {
  const logoUrl = `/Logo.png`;
  return (
    <div className="flex justify-between mb-[36px] tab:mb-[44px] pc:mb-[58px]">
      <Image src={logoUrl} width={61} height={34} alt="Logotype carp travel" />
      <button
        className="text-white text-[14px]  font-[400] tracking-[2.4px] tab:hidden"
        type="button"
        onClick={() => openModal()}
      >
        Menu
      </button>
      <nav className="hidden tab:block">
        <ul className="flex gap-[24px] pc:gap-[56px]">
          <li className="text-white text-[14px] font-[400] tracking-[1.4px] ">
            <a href="#About">About</a>
          </li>
          <li className="text-white text-[14px] font-[400] tracking-[1.4px] ">
            <a href="#Services">Services</a>
          </li>
          <li className="text-white text-[14px] font-[400] tracking-[1.4px] ">
            <a href="#Career">Career</a>
          </li>
          <li className="text-white text-[14px] font-[400] tracking-[1.4px] ">
            <a href="#Gallery">Gallery</a>
          </li>
          <li className="text-white text-[14px] font-[400] tracking-[1.4px]">
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
