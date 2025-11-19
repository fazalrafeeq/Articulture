"use client";

import Image from "next/image";

const data = [
  {
    name: "Kavitha Kumar",
    user: "@kavitha56",
    img: "/image/user1.png",
    text: "Articulat transformed our apartment... passionate",
  },
  {
    name: "Rahul Raj",
    user: "@rahulraja56",
    img: "/image/user2.png",
    text: "Articulat transformed our apartment... passionate",
  },
  {
    name: "Stephy Jo",
    user: "@kstepja56",
    img: "/image/user3.png",
    text: "Articulat transformed our apartment... passionate",
  },
];

const Star = () => (
  <svg fill="#FBBF24" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 .6l3.7 7.6 8.3 1.1-6 5.8 1.5 8.3L12 18.9 4.6 23.4l1.5-8.3L0 9.3l8.3-1.1z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-semibold mb-10">Testimonials</h2>

      {/* ONE MAP */}
      <div
        className="
          flex lg:grid lg:grid-cols-3
          gap-6 lg:gap-10
          overflow-x-auto lg:overflow-hidden
          snap-x snap-mandatory lg:snap-none
          px-4 lg:px-20
        "
      >
        {data.map((t, i) => (
          <Card key={i} {...t} />
        ))}
      </div>
    </section>
  );
}

function Card({ text, name, user, img }) {
  return (
    <div
      className="
        bg-[#F5F5F5] p-10 rounded-3xl snap-center shadow
        min-w-[85%]  
        sm:w-[80%]     /* mobile */
        md:min-w-[55%]    /* FIXED → tablet smaller */
        lg:min-w-[95%]        /* large grid */
      "
    >
      <div className="text-6xl text-gray-600 mb-6">“</div>

      <p className="italic text-gray-700 mb-8">{text}</p>

      <div className="flex items-center gap-4">
        <Image src={img} width={60} height={60} alt="" className="rounded-full" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{user}</p>
        </div>
      </div>

      <div className="flex gap-1 mt-4">
        <Star /><Star /><Star /><Star /><Star />
      </div>
    </div>
  );
}

