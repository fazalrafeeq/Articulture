"use client";

import { useEffect, useRef, useState } from "react";

const clients = [
  { id: 1, imageBlack: "/image/client-1.png", imageWhite: "/image/client-1-2.png" },
  { id: 2, imageBlack: "/image/client-2.png", imageWhite: "/image/client-2-2.png" },
  { id: 3, imageBlack: "/image/client-3.png", imageWhite: "/image/client-3-2.png" },
  { id: 4, imageBlack: "/image/client-4.png", imageWhite: "/image/client-4-2.png" },
  { id: 5, imageBlack: "/image/client-5.png", imageWhite: "/image/client-5-2.png" },
  { id: 6, imageBlack: "/image/client-1.png", imageWhite: "/image/client-1-2.png" },
  { id: 7, imageBlack: "/image/client-2.png", imageWhite: "/image/client-2-2.png" },
  { id: 8, imageBlack: "/image/client-3.png", imageWhite: "/image/client-3-2.png" },
  { id: 9, imageBlack: "/image/client-4.png", imageWhite: "/image/client-4-2.png" },
  { id: 10, imageBlack: "/image/client-5.png", imageWhite: "/image/client-5-2.png" },
  { id: 11, imageBlack: "/image/client-1.png", imageWhite: "/image/client-1-2.png" },
  { id: 12, imageBlack: "/image/client-2.png", imageWhite: "/image/client-2-2.png" },
];

export default function ClientsCarousel() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const pauseRef = useRef(false); // 🔥 pause state

  // 🔥 Smooth infinite auto-scroll + pause on hover
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let frame;
    const speed = 0.7;

    const smoothScroll = () => {
      if (!pauseRef.current) {
        slider.scrollLeft += speed;

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(smoothScroll);
    };

    frame = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="w-full py-12">
      <h2 className="text-center text-3xl font-semibold">Clients Who Trust Our Vision</h2>
      <p className="text-center text-gray-600 mt-2">
        At articulate, we believe that every space has a story waiting to be told.
      </p>

      <div
        ref={sliderRef}
        className="
          mt-10 overflow-x-auto scrollbar-hide px-4
          flex flex-nowrap gap-4
          lg:grid lg:grid-cols-2 lg:grid-flow-col lg:auto-cols-[240px]
        "
        onMouseEnter={() => (pauseRef.current = true)}   // ⏸ pause
        onMouseLeave={() => (pauseRef.current = false)}  // ▶ resume
      >
        {[...clients, ...clients].map((c, index) => (
          <ClientCard
            key={index}
            index={index}
            item={c}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
}

function ClientCard({ item, index, activeIndex, setActiveIndex }) {
  const isMobile = typeof window !== "undefined" && "ontouchstart" in window;
  const isActive = activeIndex === index;

  const handleTap = () => {
    if (isMobile) {
      if (isActive) setActiveIndex(null);
      else setActiveIndex(index);
    }
  };

  return (
    <div
      onClick={handleTap}
      className={`
        group
        min-w-[240px] h-[180px]
        rounded-lg shadow-sm cursor-pointer
        flex flex-col items-center justify-center
        bg-[#EBE9E9]
        transition-all duration-500 ease-in-out

        ${!isMobile && "hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] hover:bg-green-600"}
        ${isActive && "scale-105 shadow-[0_0_25px_rgba(34,197,94,0.7)] bg-green-600"}
      `}
    >
      <div className="relative w-28 h-28 flex items-center justify-center">
        <img
          src={item.imageBlack}
          className={`
            absolute inset-0 w-full h-full object-contain
            transition-opacity duration-500
            ${isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
          `}
        />

        <img
          src={item.imageWhite}
          className={`
            absolute inset-0 w-full h-full object-contain
            transition-opacity duration-500
            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        />
      </div>
    </div>
  );
}
