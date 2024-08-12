import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="min-w-full bg-blue-950 fixed top-0 z-30">
      <nav className=" max-w-6xl mx-auto flex items-center h-[60px]">
        <div className="w-1/2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </div>

        <ul className="w-2/4 flex items-center gap-4 uppercase">
          <li>
            <Link href={"/"}> Home</Link>
          </li>
          <li>
            <Link href={"/about"}> about</Link>
          </li>
          <li>
            <Link href={"/blog"}> blog</Link>
          </li>
          <li>
            <Link href={"/contact"}> contact</Link>
          </li>
          <li>
            <Link href={"/portfolio"}> portfolio</Link>
          </li>
          <li>
            <Link href={"/dashboard"}> dashboard</Link>
          </li>
          <li>
            <Link href={"/dashboard/login"}>
              <button className=" p-2 rounded-lg uppercase bg-blue-700">
                login
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
