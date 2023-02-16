import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <span>Logo</span>
        </Link>
        <h1>Shorts Game Strong</h1>
      </div>
      <div>
        <Link
          className="px-5 py-3 text-sm md:text-base bg-brand-dark text-brand-primary flex items-center rounded-full text-center"
          href={"/"}
        >
          Something else neat
        </Link>
      </div>
    </header>
  );
}
