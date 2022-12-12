import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLInks from "./NavLInks";
import SearchBox from "./SearchBox";
function Header() {
  return (
    <header>
      {/**mt-5**/}
      <div className="grid grid-cols-3 p-10 items-center ">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{" "}
            <span className="underline decoration-6 decoration-orange-400">
              News
            </span>{" "}
            App
          </h1>{" "}
        </Link>
        <div>
          {/**Dark mode button */}
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800 ">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLInks />
      {/**search bar */}
      <SearchBox />
    </header>
  );
}

export default Header;
