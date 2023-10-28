type errorMes = {
  children: string;
};
export default function ErrorMes({ children }: errorMes) {
  return (
    <p className="flex justify-end text-error text-right font-[200] text-[12px] leading-[24px] tracking-[2.4px]  ">
      <span className="flex  items-center mr-[4px]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
            stroke="#FF5757"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </p>
  );
}
