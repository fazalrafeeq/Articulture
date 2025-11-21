"use client";

import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Active link color logic
  const linkStyle = (path) => {
    return pathname === path
      ? "text-green-400"
      : "hover:text-emerald-300";
  };

  return (
    <nav className="absolute top-4 left-0 w-full flex md:top-7 justify-between items-center px-6 md:px-10 py-4 text-white z-30">

      {/* Logo */}
      <div className="relative w-32 h-10 md:w-30 md:h-12 lg:w-48 lg:h-14">
        <Image
          src="/image/logo.png"
          alt="Articulate Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-base font-medium">
        <Link href="/">
          <li className={`cursor-pointer ${linkStyle("/")}`}>Home</li>
        </Link>

        <Link href="/About">
          <li className={`cursor-pointer ${linkStyle("/About")}`}>
            About us
          </li>
        </Link>

        <Link href="/Portfolio">
          <li className={`cursor-pointer ${linkStyle("/Portfolio")}`}>
            Portfolio
          </li>
        </Link>

        <Link href="/Blog">
          <li className={`cursor-pointer ${linkStyle("/Blog")}`}>
            Blog
          </li>
        </Link>

        <Link href="/Contact">
          <li className={`cursor-pointer ${linkStyle("/Contact")}`}>
            Contact us
          </li>
        </Link>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-4xl"
        onClick={() => setOpen(true)}
      >
        <HiMenu />
      </button>

      {/* Mobile Popup Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">

          <div className="w-64 h-full bg-gradient-to-b from-gray-200 to-white shadow-xl p-6 animate-mobile-slide border-l border-gray-300">

            {/* Close Button */}
            <button
              className="text-3xl absolute top-5 right-5 text-gray-700"
              onClick={() => setOpen(false)}
            >
              <HiX />
            </button>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col gap-5 mt-14 text-gray-900 font-semibold text-lg">

              <Link href="/" onClick={() => setOpen(false)}>
                <li className={linkStyle("/")}>Home</li>
              </Link>

              <Link href="/About" onClick={() => setOpen(false)}>
                <li className={linkStyle("/About")}>About us</li>
              </Link>

              <Link href="/Portfolio" onClick={() => setOpen(false)}>
                <li className={linkStyle("/Portfolio")}>Portfolio</li>
              </Link>

              <Link href="/Blog" onClick={() => setOpen(false)}>
                <li className={linkStyle("/Blog")}>Blog</li>
              </Link>

              <Link href="/Contact" onClick={() => setOpen(false)}>
                <li className={linkStyle("/Contact")}>Contact us</li>
              </Link>

            </ul>

          </div>
        </div>
      )}

    </nav>
  );
}
