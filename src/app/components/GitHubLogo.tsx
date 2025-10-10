import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

export const GitHubLogo = (props: Props) => {
  const { alt, srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image alt={alt} src={srcLight} className="not-dark:hidden" {...rest} />
      <Image
        alt={alt}
        src={srcDark}
        className="clear-both dark:hidden"
        {...rest}
      />
    </>
  );
};
