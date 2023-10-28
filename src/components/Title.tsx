import React from "react";

type title = {
  children: React.ReactElement[];
  classes?: string;
};
export default function Title({ children, classes }: title) {
  let styles =
    "uppercase  text-white leading-normal text-[40px]  tracking-[-1.6px] leading-[56px] tab:text-[67px] tab:tracking-[-2.68px] pc:text-[98px] pc:tracking-[-3.92px] ";
  if (classes) {
    styles = styles.concat(classes);
  }
  return <h2 className={styles}>{children}</h2>;
}
