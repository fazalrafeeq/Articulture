"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  { title: "Hospitality", image: "/image/hospital-1.png" },
  { title: "Healthcare", image: "/image/health-2.png" },
  { title: "Residence", image: "/image/residence-3.png" },
  { title: "Corporate", image: "/image/health-2.png" },
];

export default function WhereWeWork() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isMobile =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleTap = (i) => {
    if (!isMobile) return;
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="py-16">
      <h2 className="text-center lg:text-4xl text-2xl font-semibold">
        Where We Work
      </h2>

      <p className="text-center text-gray-500 max-w-2xl mx-auto p-6">
        At articulate, we believe that every space has a story waiting to be told.
        Our mission is to shape environments that inspire.
      </p>

      {/* ---- SMALL & TABLET: Horizontal Scroll ---- */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide px-4 mt-10">
        <div className="flex gap-6 w-max">
          {categories.map((cat, i) => (
            <CategoryCard
              key={i}
              item={cat}
              index={i}
              isActive={activeIndex === i}
              handleTap={handleTap}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* ---- LARGE SCREEN GRID ---- */}
      <div className="hidden lg:grid grid-cols-4 gap-8 mt-16 px-12">
        {categories.map((cat, i) => (
          <CategoryCard
            key={i}
            item={cat}
            index={i}
            isActive={activeIndex === i}
            handleTap={handleTap}
            isMobile={false}
          />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ item, index, isActive, handleTap, isMobile }) {
  return (
    <div
      onClick={() => handleTap(index)}
      className="cursor-pointer group flex flex-col items-center transition-all duration-500"
    >
      <div
        className={`
          rounded-[35px] overflow-hidden bg-gray-100 shadow-md
          transition-all duration-500

          w-[260px] h-[330px]
          md:w-[260px] md:h-[360px]
          lg:w-full lg:h-[380px]

          ${!isMobile && "group-hover:scale-[1.04] group-hover:shadow-xl"}
          ${isActive && "scale-[1.05] shadow-xl"}
        `}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={900}
          height={900}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isActive ? "scale(1.1)" : "scale(1)" }}
        />
      </div>

      <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
    </div>
  );
}
