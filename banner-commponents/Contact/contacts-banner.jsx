"use client";
import Image from "next/image";

export default function ContactsBanner() {
  return (
    <section className="relative w-full h-[30vh] md:h-[70vh] lg:h-[55vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/contacts-banner.png"
        alt="Contacts  banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text */}
      <div className="absolute inset-0 flex  items-center justify-center">
        <h1 className="text-white  text-1xl sm:text-4xl md:text-6xl font-semibold tracking-wide">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
