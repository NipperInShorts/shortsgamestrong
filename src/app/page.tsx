import { AppShowcase } from "./components/AppShowcase";
import { apps } from "./appList";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl mb-1 font-medium">
            Justin Nipper
          </h1>
          <p className="my-2">
            I&#39;m a developer and engineering leader who builds mobile apps
            and video games.
          </p>
          <h2 className="mt-4 text-xl md:text-2xl mb-1 font-medium">
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
