import Image from "next/image";
import { AppShowCaseProps } from "../types";

export function AppShowcase({
  description,
  hoverLink,
  imageSrc,
  optionalLinks,
  title,
}: AppShowCaseProps) {
  return (
    <div className="group gap-2 rounded-2xl p-2 transition-colors hover:bg-purple-100 sm:flex-row dark:hover:bg-slate-800">
      <a href={hoverLink} className="flex flex-col items-center sm:flex-row">
        <Image
          alt={`${title} marketing image`}
          className="h-28 w-28 rounded-[24px] p-[10px] transition-transform duration-300 group-hover:scale-105"
          src={imageSrc}
          width={1024}
          height={1024}
        />
        <div className="flex max-w-lg flex-col text-center sm:text-left">
          <h3 className="text-xl font-black transition-colors group-hover:text-black/70 dark:text-white dark:group-hover:text-white/70">
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </a>
      {optionalLinks?.length ? (
        <div className="group/links my-1 flex flex-row justify-center text-xs sm:my-0 sm:justify-start">
          {optionalLinks.map((link, index) => {
            if (index > 0) {
              return (
                <div
                  className="flex flex-row items-center"
                  key={`${link}-${index}`}
                >
                  <div
                    key={`pipe-${index}`}
                    className="flex w-3.5 justify-center transition-transform duration-300"
                  >
                    <div className="h-4 w-0.5 self-center bg-slate-400 transition-transform duration-300 group-hover:bg-slate-700 dark:bg-slate-300 group-hover:dark:bg-slate-200" />
                  </div>
                  <a
                    key={link.link}
                    href={link.link}
                    className="p-2 transition-transform duration-300 hover:scale-115"
                  >
                    <span className="underline-animation">{link.title}</span>
                  </a>
                </div>
              );
            } else {
              return (
                <a
                  key={link.link}
                  href={link.link}
                  className="p-2 transition-transform duration-300 hover:scale-115"
                >
                  <span className="underline-animation">{link.title}</span>
                </a>
              );
            }
          })}
        </div>
      ) : null}
    </div>
  );
}
