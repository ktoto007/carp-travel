type burgerMenu = {
  closeModal: () => void;
};
export default function BurgerMenu({ closeModal }: burgerMenu) {
  return (
    <div className="max-w-[480px] w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 left-0 z-10 backdrop-blur-25 bg-burgerMenu">
      <button
        className="absolute right-[20px] top-[43px] text-white text-[14px] font-[400] tracking-[2.4px]"
        onClick={() => closeModal()}
      >
        Close
      </button>
      <nav>
        <ul>
          <li className="text-white text-[18px] font-[400] tracking-[1.8px] mb-[48px]">
            <a href="#About" onClick={() => closeModal()}>
              About
            </a>
          </li>
          <li className="text-white text-[18px] font-[400] tracking-[1.8px] mb-[48px]">
            <a href="#Services" onClick={() => closeModal()}>
              Services
            </a>
          </li>
          <li className="text-white text-[18px] font-[400] tracking-[1.8px] mb-[48px]">
            <a href="#Career" onClick={() => closeModal()}>
              Career
            </a>
          </li>
          <li className="text-white text-[18px] font-[400] tracking-[1.8px] mb-[48px]">
            <a href="#Gallery" onClick={() => closeModal()}>
              Gallery
            </a>
          </li>
          <li className="text-white text-[18px] font-[400] tracking-[1.8px]">
            <a href="#Contacts" onClick={() => closeModal()}>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
