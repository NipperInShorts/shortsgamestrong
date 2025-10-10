export type OptionalLinks = {
  link: string;
  title: string;
};

export type AppShowCaseProps = {
  description: string;
  hoverLink: string;
  imageSrc: string;
  optionalLinks?: OptionalLinks[];
  title: string;
};
