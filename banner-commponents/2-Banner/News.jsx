"use client";

import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "Style by emily henderson",
    image: "/image/blog-1.png",
    date: "10/02/2025",
    description:
      "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.",
  },
  {
    id: 2,
    title: "Laurel home (by laurel bern)",
    image: "/image/blog-2.png",
    date: "10/02/2025",
    description:
      "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.",
  },
  {
    id: 3,
    title: "Style by emily henderson",
    image: "/image/blog-3.png",
    date: "10/02/2025",
    description:
      "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.",
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-semibold">
          Latest News And Update
        </h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          At articulate, we believe that every space has a story waiting to be told. 
          Our mission is to shape environments that inspire
        </p>

        {/* SMALL SCREEN: Horizontal scrolling list */}
        <div className="mt-12 md:hidden">
          <div className="flex gap-6 overflow-x-auto px-2 pb-4 snap-x snap-mandatory">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="min-w-[85%] bg-white rounded-xl snap-center"
              >
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* MEDIUM + LARGE SCREEN: 3 column grid */}
        <div className="hidden md:grid grid-cols-3 gap-10 mt-12">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function NewsCard({ item }) {
  return (
    <div className="group rounded-3xl cursor-pointer transition-all duration-500">
      {/* Image */}
      <div className="relative w-full h-64 md:h-72 rounded-3xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-500"
        />

        {/* Date Badge */}
        <div className="absolute bottom-4 left-4 bg-green-600 text-white px-5 py-1 rounded-full text-sm font-medium">
          {item.date}
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-semibold text-gray-900">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-600 leading-relaxed">
        {item.description}
      </p>

      {/* Read More */}
      <a
        href="#"
        className="mt-4 inline-flex items-center text-green-600 font-medium group-hover:text-green-700 transition"
      >
        Read More
        <span className="ml-1 group-hover:translate-x-1 transition">→</span>
      </a>
    </div>
  );
}
