import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { NavbarProps } from "sanity";

export default function StudioNavBar(props: NavbarProps) {
  return (
    <div>
      <Link
        href={"/"}
        className="text-[var(--brand-primary)] flex items-center"
      >
        Back to Site
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
