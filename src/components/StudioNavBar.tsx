import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { NavbarProps } from "sanity";

export default function StudioNavBar(props: NavbarProps) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          href={"/"}
          className="text-[var(--brand-primary)] flex items-center"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 test-[var(--brand-primary)] mr-2" />
          Back to Site
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
