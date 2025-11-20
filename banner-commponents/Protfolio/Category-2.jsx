"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  { title: "Residential", image: "/image/prt-1-resid.png" },
  { title: "Hospitality", image: "/image/prt-2-hosp1.png" },
  { title: "Commercial", image: "/image/prt-3-commercia.png" },
  { title: "Hospitality", image: "/image/prt-4-hosp2.png" },
  { title: "Hospital", image: "/image/prt-5-hosp3.png" },
  { title: "Retail", image: "/image/prt-6-retai.png" },
  { title: "Education", image: "/image/prt-7-edu.png" },
  { title: "Entertainment", image: "/image/prt-8-entmnt.png" },
];

export default function PortfolioCategory() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isMobile =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleTap = (i) => {
    if (!isMobile) return;
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="w-full px-10 py-12">
      <div
        className="
          flex gap-6 overflow-x-auto sm:overflow-x-auto 
          md:grid md:grid-cols-2 lg:grid-cols-4
          md:overflow-x-hidden gap-y-12 gap-x-6
        "
      >
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTap(index)}
            className="
              flex-shrink-0 cursor-pointer 
              w-[280px] md:w-full
              bg-white rounded-3xl overflow-hidden shadow-md 
              relative group transition-all duration-500
            "
          >
            {/* Image Box */}
            <div
              className={`
                w-full h-[330px] md:h-[360px] lg:h-[420px] 
                relative rounded-3xl 
                transition-all duration-500
                ${!isMobile && "group-hover:scale-[1.03]"}
                ${activeIndex === index && "scale-[1.05] shadow-xl"}
              `}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`
                  object-cover rounded-3xl transition-transform duration-500
                  ${!isMobile && "group-hover:scale-110"}
                `}
                style={{
                  transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              />
            </div>

            {/* FIXED SIZE BADGE BUTTON */}
            <div className="absolute bottom-4 left-4">
              <span className="
                bg-green-600 text-white 
                w-32 text-center 
                py-2 rounded-full 
                text-sm font-medium shadow-md block
              ">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
