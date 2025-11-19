"use client";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Concept Development",
    desc: "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments At articulate, we believe that every.",
    icon: "/image/ser-icon1.png",
  },
  {
    id: "02",
    title: "Design Planning",
    desc: "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments At articulate, we believe that every.",
    icon: "/image/ser-icon2.png",
  },
  {
    id: "03",
    title: "Execution & Implementation",
    desc: "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments At articulate, we believe that every.",
    icon: "/image/ser-icon3.png",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Clients Who Trust Our Vision
        </h1>
        <p className="text-gray-600 text-lg">
          At articulate, we believe that every space has a story waiting to be told.
          Our mission is to shape environments that inspire
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white shadow-xl rounded-2xl p-10 border border-gray-100 hover:shadow-2xl transition-shadow"
          >
            {/* Icon */}
            <div className="mb-6">
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Number */}
            <span className="absolute top-8 right-10 text-gray-400 text-sm font-medium">
              {service.id}
            </span>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4 leading-tight">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
