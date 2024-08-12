import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="min-w-full fixed bottom-0 z-30 py-3 text-xs bg-slate-800">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <h1>
            this site belongs to rizwan dont claim it your personal property
            &copy;2024
          </h1>
        </div>

        <ul className=" flex items-center gap-4 text-2xl">
          <li>
            <Link href={"/"}>
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              <FaGithubAlt />
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <FaFacebook />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
