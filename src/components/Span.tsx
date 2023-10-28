type span = {
  classes: string;
  children: string;
};

export default function Span({ classes, children }: span) {
  return <span className={classes}>{children}</span>;
}
