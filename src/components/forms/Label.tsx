import React from "react";

type paragraf = {
  label: string;
  classes?: string;
  children: React.ReactElement;
};
export default function Label({ label, classes, children }: paragraf) {
  let styles: string =
    "block text-white font-[200] text-[12px] leading-[24px] tracking-[2.4px] ";
  if (classes) {
    styles = styles.concat(classes);
  }
  return (
    <label className={styles}>
      {label}
      {children}
    </label>
  );
}
