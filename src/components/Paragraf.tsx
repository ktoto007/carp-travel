import React from "react";

type paragraf = {
  classes?: string;
  children: React.ReactElement | React.ReactElement[];
};

export default function Paragraf({ classes, children }: paragraf) {
  let styles: string =
    "text-white text-[14px] leading-[20px] tab:text-[16px] pc:text-[18px] pc:leading-[24px] ";
  if (classes) {
    styles = styles.concat(classes);
  }
  return <p className={styles}>{children}</p>;
}
