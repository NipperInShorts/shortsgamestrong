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
    <div className="group transition-colors gap-2 rounded-2xl hover:bg-purple-100 sm:flex-row dark:hover:bg-slate-800 p-2">
      <a href={hoverLink} className="flex flex-col sm:flex-row items-center">
        <Image
          alt={`${title} marketing image`}
          className="h-28 w-28 transition-transform duration-300 group-hover:scale-105 p-[10px] rounded-[24px]"
          src={imageSrc}
          width={1024}
          height={1024}
        />
        <div className="flex max-w-lg flex-col text-center sm:text-left">
          <h3 className="font-black text-xl transition-colors group-hover:text-black/70 dark:text-white dark:group-hover:text-white/70">
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </a>
      {optionalLinks?.length ? (
        <div className="group/links flex flex-row text-xs my-1 sm:my-0 justify-center sm:justify-start">
          {optionalLinks.map((link, index) => {
            if (index > 0) {
              return (
                <div
                  className="flex flex-row items-center"
                  key={`${link}-${index}`}>
                  <div
                    key={`pipe-${index}`}
                    className="w-3.5 flex justify-center transition-transform duration-300">
                    <div className="w-0.5 h-4 self-center transition-transform duration-300 bg-slate-400 group-hover:bg-slate-700 dark:bg-slate-300 group-hover:dark:bg-slate-200" />
                  </div>
                  <a
                    key={link.link}
                    href={link.link}
                    className="p-2 transition-transform duration-300 hover:scale-115">
                    <span className="underline-animation">{link.title}</span>
                  </a>
                </div>
              );
            } else {
              return (
                <a
                  key={link.link}
                  href={link.link}
                  className="p-2 transition-transform duration-300 hover:scale-115">
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
