"use client";

import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="hidden sm:flex  w-full z-50 bg-gradient-to-r from-[#243342] via-[#203A43] to-[#2C5364] text-gray-200 text-sm">
      {/* Container with padding but full width */}
      <div className="w-full flex justify-between items-center px-10 py-2">

        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={14} className="text-gray-300" />
            <span className="text-gray-100">+91 9778567896</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope size={14} className="text-gray-300" />
            <span className="text-gray-100">articulate@gmail.com</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="bg-[#3D4250] hover:bg-green-800 p-1.5 rounded-sm transition-transform duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF size={12} />
          </a>
          <a
            href="#"
            className="bg-[#3D4250] hover:bg-green-700 p-1.5 rounded-sm transition"
            aria-label="Instagram"
          >
            <FaInstagram size={12} />
          </a>
          <a
            href="#"
            className="bg-[#3D4250] hover:bg-green-700 p-1.5 rounded-sm transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={12} />
          </a>
        </div>

      </div>
    </div>
  );
}
