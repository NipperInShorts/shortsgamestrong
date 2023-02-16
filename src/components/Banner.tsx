function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">
          Nipper. <span className="whitespace-nowrap">In Shorts.</span>
        </h1>
        <h2 className="mt-2">
          Welcome.{" "}
          <span className="underline decoration-4 decoration-brand-primary">
            Lets get weird.
          </span>
        </h2>
      </div>
      <div>
        <p className="mt-5 md:mt-2 text-gray-400">What is up</p>
      </div>
    </div>
  );
}

export default Banner;
