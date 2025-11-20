export default function TeamSection() {
  const team = [
    {
      name: "Adem James",
      role: "Architect",
      image:  "/image/team-sec-1.png" ,
    },
    {
      name: "Austin Butle",
      role: "Architect",
      image: "/image/tm sec 2.png",
    },
    {
      name: "Jennifer Burnett",
      role: "Architect",
      image: "/image/tm-sec-3.png",
    },
    {
      name: "Florence Pugh",
      role: "Architect",
      image: "/image/tm-sec-4.png",
    },
  ];

  return (
    <section className="py-20 p-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-2xl font-semibold text-gray-900">
              The People Who Make It Happen
            </h2>
            <p className="mt-4 md:text-xs text-gray-600 max-w-xl">
              At articulate, we believe that every space has a story waiting to be told.
              Our mission is to shape environments.
            </p>
          </div>

          <button className="mt-6 md:mt-10 md:px-20 bg-green-700 text-xs text-white px-10 py-2  rounded-full shadow hover:bg-green-800 transition">
           <p> Learn More</p>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group transition-transform duration-300"
            >
              {/* Image Card Hover */}
              <div
                className="rounded-3xl shadow-md overflow-hidden bg-[#EAE8E8] 
                           transform transition-all duration-300 
                           group-hover:shadow-xl group-hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover 
                             transition-transform duration-500 
                             group-hover:scale-105"
                />
              </div>

              {/* Text Hover */}
              <h3
                className="text-xl font-semibold text-black mt-4 
                           group-hover:text-green-700 transition"
              >
                {member.name}
              </h3>

              <p
                className="text-gray-800 text-lg 
                           group-hover:text-green-700 transition"
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
