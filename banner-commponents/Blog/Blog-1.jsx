"use client";

import Image from "next/image";

const posts = [
  {
    title: "Style by emily henderson",
    date: "10/02/2025",
    img: "/image/blog-1.png",
    desc: "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.",
  },
  {
    title: "Laurel home (by laurel bern)",
    date: "10/02/2025",
    img: "/image/blog-page-2.png",
    desc: "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.",
  },
  {
    title: "Modern Kitchen Ideas",
    date: "10/02/2025",
    img: "/image/blog-page-3.png",
    desc: "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.",
  },
  {
    title: "Luxury Living Room",
    date: "10/02/2025",
    img: "/image/blog-2-4.png",
    desc: "At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.",
  },
];

const recentPosts = [
  "/image/blog-sm-1.png",
  "/image/blog-sm-2.png",
  "/image/blog-sm-3.png",
  "/image/blog-sm-4.png",
  "/image/blog-sm-5.png",
];

export default function BlogPage1() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 lg:flex gap-10">

      {/* LEFT CONTENT */}
      <div className="flex-1">

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {posts.map((post, i) => (
            <div key={i}>
              {/* CARD IMAGE */}
              <div className="rounded-3xl overflow-hidden relative h-72 md:h-70">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {/* DATE BADGE */}
                <span className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                  {post.date}
                </span>
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold mt-6 mb-3">
                {post.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-4">
                {post.desc}
              </p>

              {/* READ MORE */}
              <button className="text-green-600 font-medium flex items-center gap-2 hover:underline">
                Read More →
              </button>
            </div>
          ))}

        </div>
      </div>


      {/* RIGHT SIDEBAR */}
      <div className="w-full  lg:w-[350px] mt-10 lg:mt-0">

        {/* SEARCH CARD */}
        <div className="bg-white rounded-3xl shadow p-6 mb-10">
          <h3 className="text-xl font-semibold mb-4">Search Here</h3>
          <div className="flex items-center  bg-gray-100 rounded-xs  ">
            <input
              
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-5 flex-1 text-gray-700"
            />
            <div className="bg-green-600 text-white  p-2   cursor-pointer">
              🔍
            </div>
          </div>
        </div>

        {/* RECENT POSTS */}
        <div className="bg-white rounded-3xl  shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Post</h3>

          <div className="space-y-5">

            {recentPosts.map((img, i) => (
              <div className="flex gap-4 h-26 items-center" key={i}>
                <div className="w-28 h-22 rounded-xs overflow-hidden relative">
                  <Image src={img} alt="recent" fill className="object-cover" />
                </div>
                <p className="text-gray-600 text-sm">
                  At articulate, we believe that every space.
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

    </main>
  );
}
