"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Hospitality",
    image: "/image/hospital-1.png",
  },
  {
    title: "Healthcare",
    image: "/image/health-2.png",
  },
  {
    title: "Residence",
    image: "/image/residence-3.png",
  },
  {
    title: "Corporate",
    image: "/image/health-2.png",
  },
];

export default function WhereWeWork() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isMobile =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleTap = (i) => {
    if (!isMobile) return; // desktop hover only

    if (activeIndex === i) setActiveIndex(null);
    else setActiveIndex(i);
  };

  return (
    <section className="py-10">
      <h2 className="text-center lg:text-4xl text-2xl  font-semibold">
        Where We Work
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto p-7 ">
        At articulate, we believe that every space has a story waiting to be 
        told. Our mission is to shape environments that inspire.
      </p>

      {/* ---------------- SMALL SCREEN: HORIZONTAL CAROUSEL ---------------- */}
      <div className="mt-12 lg:hidden overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-6 w-max">
          {categories.map((c, i) => (
            <CategoryCard
              key={i}
              item={c}
              index={i}
              isActive={activeIndex === i}
              handleTap={handleTap}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* ---------------- LARGE SCREENS: GRID ---------------- */}
      <div className="hidden lg:grid grid-cols-4 gap-5 mt-12 px-5">
        {categories.map((c, i) => (
          <CategoryCard
            key={i}
            item={c}
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
      className={`
        group cursor-pointer
        transition-all duration-500
        flex flex-col items-center
      `}
    >
      <div
        className={`
          rounded-[40px] overflow-hidden
          w-[250px] h-[300px]
          lg:w-[245px] lg:h-[380px] sm:w-[230px] sm:h-[350px] md:w-[230px] md:h-[400px]  xl:w-[300px] xl:h-[380px]
          shadow-md bg-gray-100
          transition-all duration-500

          /* Desktop hover */
          ${
            !isMobile &&
            "group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
          }

          /* Mobile tap */
          ${
            isActive &&
            "scale-105 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
          }
        `}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={700}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
            "
          style={{
            transform: isActive ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>

      <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
    </div>
  );
}
