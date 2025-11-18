"use client";

import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" absolute top-4 left-0 w-full flex md:top-7 justify-between items-center px-6 md:px-10 py-4 text-white z-30">

      {/* Logo — optimized for sm + md + lg */}
      <div className="relative w-32 h-10 md:w-30  md:h-12 lg:w-48 lg:h-14">
        <Image
          src="/image/logo.png"
          alt="Articulate Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Tablet + Desktop Menu (md and up) */}
      <ul className="hidden md:flex items-center gap-6 md:gap-6  lg:gap-10 text-base md:text-sm  font-medium">
        <li className="text-green-400 cursor-pointer hover:text-gray-300">Home</li>
        <Link href={`/About`}>        <li className="cursor-pointer hover:text-emerald-300 ">About us</li>
</Link>
        <li className="cursor-pointer hover:text-emerald-300">Portfolio</li>
        <li className="cursor-pointer hover:text-emerald-300">Blog</li>
        <li className="cursor-pointer hover:text-emerald-300">Contact us</li>
      </ul>

      {/* Hamburger — shown only on MOBILE (sm only) */}
      <button
        className="md:hidden text-white  text-4xl"
        onClick={() => setOpen(true)}
      >
        <HiMenu />
      </button>

      {/* Mobile Popup Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">

          <div className="w-64 h-full bg-gradient-to-b from-gray-200 to-white shadow-xl p-6 animate-mobile-slide border-l border-gray-300">

            <button
              className="text-3xl absolute top-5 right-5 text-gray-700"
              onClick={() => setOpen(false)}
            >
              <HiX />
            </button>

            <ul className="flex flex-col gap-4 mt-14 text-gray-900 font-semibold text-lg">
              <li className="pb-3 border-b border-gray-300">Home</li>
              <li className="pb-3 border-b border-gray-300">Portfolio</li>
              <li className="pb-3 border-b border-gray-300">About us</li>
              <li className="pb-3 border-b border-gray-300">Blog</li>
              <li className="pb-3 border-b border-gray-300">Contact us</li>
            </ul>

          </div>
        </div>
      )}

    </nav>
  );
}
