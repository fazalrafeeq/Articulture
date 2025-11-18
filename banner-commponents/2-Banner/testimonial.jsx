"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    text: `Articulat transformed our apartment into a warm, modern space that feels uniquely ours. 
    Every detail — from lighting to furniture — reflects our personality. 
    The team truly listens!. Professional, creative, and passionate`,
    name: "Kavitha Kumar",
    username: "@kavitha56",
    image: "/image/user1.png",
  },
  {
    text: `Articulat transformed our apartment into a warm, modern space that feels uniquely ours. 
    Every detail — from lighting to furniture — reflects our personality. 
    The team truly listens!. Professional, creative, and passionate`,
    name: "Rahul Raj",
    username: "@rahulraja56",
    image: "/image/user2.png",
  },
  {
    text: `Articulat transformed our apartment into a warm, modern space that feels uniquely ours. 
    Every detail — from lighting to furniture — reflects our personality. 
    The team truly listens!. Professional, creative, and passionate`,
    name: "Stephy Jo",
    username: "@kstepja56",
    image: "/image/user3.png",
  },
];

// ⭐ STAR ICON (yellow)
const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#FBBF24"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.834 1.48 8.277L12 18.896l-7.416 4.521 1.48-8.277L0 9.306l8.332-1.151z" />
  </svg>
);

export default function Testimonials() {
  const scrollRef = useRef(null);

  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-semibold mb-4">Testimonials</h2>

      {/* ⭐ MOBILE SCROLL (SM) */}
      <div className="md:hidden px-4">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} mobile />
          ))}
        </div>
      </div>

      {/* ⭐ TABLET SCROLL (MD) */}
      <div className="hidden md:block lg:hidden px-6">
        <div
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4
          "
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* ⭐ DESKTOP GRID (LG) */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:px-4 mt-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ text, name, username, image, mobile }) {
  return (
    <div
      className={`
        bg-[#F5F5F5] rounded-3xl p-10 
        flex flex-col justify-between
        snap-center
        ${mobile ? "min-w-[85%]" : "min-w-[420px] lg:min-w-0"}
      `}
    >
      {/* Quote Icon */}
      <div className="text-6xl text-gray-700 leading-none mb-6">“</div>

      {/* Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
        {text}
      </p>

      {/* User */}
      <div className="flex items-center gap-4">
        <Image
          src={image}
          width={60}
          height={60}
          className="rounded-full object-cover"
          alt={name}
        />

        <div>
          <p className="text-lg font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
      </div>

      {/* ⭐ 5 Stars Row */}
      <div className="flex items-center gap-1 mt-4">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
}
