"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-16 pb-10 lg:p-1">
      <div className="max-w-[1800px] w-full mx-auto px-4 lg:px-6">

        {/* ========== TOP GRID ========== */}
        <div
          className="
            grid grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-12 lg:gap-16
          "
        >

          {/* LEFT COLUMN */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo-articulate.png"
                alt="Articulate Logo"
                width={220}
                height={60}
              />
            </div>

            <p className="text-gray-300 leading-relaxed w-[95%] mb-8">
              There are fashions in building. Behind the fashions lie
              economic and technological reasons, and these fashions
              exclude all but a few genuinely different possibilities.
            </p>

            {/* RESPONSIVE EMAIL INPUT */}
            <div className="w-full sm:w-[360px] bg-white rounded-full overflow-hidden flex items-center">
              <input
                type="text"
                placeholder="Enter email address"
                className="px-4 py-3 flex-1 text-black outline-none text-sm sm:text-base"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold">
                SEND
              </button>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="text-gray-400 space-y-4">
              <li className="hover:text-white cursor-pointer">Our team</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Portfolio</li>
              <li className="hover:text-white cursor-pointer">About us</li>
            </ul>
          </div>

          {/* USEFUL */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful</h3>
            <ul className="text-gray-400 space-y-4">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Legal & Privacy</li>
              <li className="hover:text-white cursor-pointer">Client Portal</li>
              <li className="hover:text-white cursor-pointer">FAQ’s</li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in touch</h3>

            <p className="text-gray-300 mb-4">articulate@gmail.com</p>

            <h3 className="text-lg font-semibold mb-4">Address</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              9235 Bayberry Drive<br />
              Hendersonville, NC 28792
            </p>

            <p className="text-gray-300 leading-relaxed">
              8457 Beechwood Drive<br />
              Monroe Township, NJ 08831
            </p>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © 2025 Ambiguous. All right reserved. Developed by{" "}
            <span className="text-yellow-400">Flipmaxxgloball.l.p</span>
          </p>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-md flex items-center justify-center hover:bg-green-700 cursor-pointer">
              <FaFacebookF size={20} />
            </div>

            <div className="w-12 h-12 bg-[#333] rounded-md flex items-center justify-center hover:bg-[#444] cursor-pointer">
              <FaInstagram size={20} />
            </div>

            <div className="w-12 h-12 bg-[#333] rounded-md flex items-center justify-center hover:bg-[#444] cursor-pointer">
              <FaLinkedinIn size={20} />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
