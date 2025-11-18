// components/ServicesSectionPureCSSScroll.jsx

import React from "react";
import Image from "next/image";

// --- UPDATED DATA (two images: normal + hover) ---
const services = [
  {
    title: "Architecture",
    imageNormal: "/image/im5.png",
    imageHover: "/image/service-1-white.png",
    description:
      "At articulate, we believe that every space has a story waiting to be told.",
  },
  {
    title: "Interior",
    imageNormal: "/image/service-2.png",
    imageHover: "/image/service-2-white.png",
    description:
      "At articulate, we believe that every space has a story waiting to be told.",
  },
  {
    title: "Planning",
    imageNormal: "/image/service-3.png",
    imageHover: "/image/service-3-white.png",
    description:
      "At articulate, we believe that every space has a story waiting to be told.",
  },
  {
    title: "Drawing",
    imageNormal: "/image/service-4.png",
    imageHover: "/image/service-4-white.png",
    description:
      "At articulate, we believe that every space has a story waiting to be told.",
  },
];

// 🔥 Hover Image Swap Component 
function HoverImage({ normal, hover }) {
  return (
    <div className="relative w-16 h-16 group">
      {/* Default Image */}
      <Image
        src={normal}
        alt="service-img"
        fill
        className="object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
      />

      {/* Hover White Image */}
      <Image
        src={hover}
        alt="service-img-hover"
        fill
        className="object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      />
    </div>
  );
}

// --- SERVICE CARD WITH GREEN GRADIENT HOVER ---
const ServiceCard = ({ title, imageNormal, imageHover, description }) => {
  return (
    <div
      className="
        group 
        bg-white border border-gray-200 rounded-xl
        p-6 sm:p-8
        transition-all duration-500
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]
        hover:bg-gradient-to-r hover:from-[#3CA270] hover:to-[#045B30]
        flex flex-col justify-between
        min-w-[70vw] sm:min-w-[45vw] lg:min-w-0
      "
    >
      <div>
        {/* IMAGE SWAP */}
        <div className="mb-4">
          <HoverImage normal={imageNormal} hover={imageHover} />
        </div>

        <h3
          className="
            text-xl font-semibold mb-3 
            text-gray-900 
            group-hover:text-white
            transition-colors duration-500
          "
        >
          {title}
        </h3>

        <p
          className="
            text-sm leading-relaxed mb-4 
            text-gray-500 
            group-hover:text-white/90
            transition-colors duration-500
          "
        >
          {description}
        </p>
      </div>

      <a
        href="#"
        className="
          text-sm font-medium inline-flex items-center
          text-green-600 
          group-hover:text-white
          transition-colors duration-500
        "
      >
        Read More{" "}
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </div>
  );
};

// --- MAIN SECTION ---
export default function ServicesSectionPureCSSScroll() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Creating Spaces, Building Connections
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            At articulate, we believe that every space has a story waiting to be told.
          </p>
        </div>

        {/* MOBILE SCROLL */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-scroll pb-4 -mx-4 px-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
