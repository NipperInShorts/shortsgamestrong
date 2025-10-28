import { AppShowcase } from "./components/AppShowcase";
import { apps } from "./appList";
import { socialLinks } from "./socialLinks";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <main className="row-start-2 flex flex-col gap-[32px] sm:items-start">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="mb-1 text-xl font-medium md:text-2xl">
            Hi, I&#39;m Justin Nipper
          </h1>
          <p className="my-2 text-center">
            Developer and engineering leader who builds mobile apps and video
            games.
          </p>
          <p className="my-2">Want to work together?</p>
          <a
            href="mailto:nipper@shortsgamestrong.com"
            className="my-2 rounded-lg bg-purple-800 px-6 py-3 text-lg font-medium text-white hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 focus:outline-none dark:border-purple-700 dark:bg-purple-800 dark:hover:bg-purple-700 dark:focus:ring-purple-700"
          >
            Contact Me
          </a>
          <h2 className="mt-4 mb-1 text-xl font-medium md:text-2xl">
            Some things I&#39;ve built
          </h2>
          <p className="my-2">Apps for Apple platforms</p>
          <div className="flex flex-col gap-4">
            {apps.map((app) => (
              <AppShowcase
                key={app.hoverLink}
                description={app.description}
                hoverLink={app.hoverLink}
                imageSrc={app.imageSrc}
                title={app.title}
                optionalLinks={app.optionalLinks}
              />
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 dark:invert"
          >
            <span
              className={`flex h-full w-full items-center justify-center transition-transform duration-200 ease-out`}
            >
              {icon}
            </span>
          </a>
        ))}
      </footer>
    </div>
  );
}
