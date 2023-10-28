type input = {
  type: string;
  placeholder: string;
  classes?: string;
  some: any;
};

export default function Input({ type, placeholder, classes, some }: input) {
  let styles: string =
    "w-[100%] bg-white bg-opacity-5 pl-[8px] placeholder:color-white placeholder:opacity-20 focus:placeholder:opacity-100";
  if (classes) {
    styles = styles.concat(classes);
  }
  return (
    <input className={styles} type={type} placeholder={placeholder} {...some} />
  );
}
