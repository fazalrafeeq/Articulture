import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <Image
        src="/image/background-img.png"
        alt="Office"
        fill
        className="object-cover brightness-50"
        priority
      />

      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>

      <div className="relative text-center text-white lg:top-10 max-w-lg md:max-w-3xl lg:max-w-5xl w-full px-2 sm:px-4 md:px-6">

        <h1 className="text-3xl font-bold leading-snug 
                       sm:text-4xl sm:leading-tight 
                       md:text-5xl md:leading-tight 
                       lg:text-6xl lg:leading-snug">
          Sculpting Your Dream Space
        </h1>

        <p className="text-sm mt-3 mb-6 text-gray-200 
                      sm:text-base sm:mt-4 sm:mb-8 
                      md:text-lg">
          From bold architectural lines to refined interior details, we bring your vision
          to life with thoughtful design and flawless execution.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

          <button
            className="
              bg-gradient-to-r from-[#3CA270] to-[#41AC76]
              font-medium text-white
              px-8 py-3 rounded-full
              transition-all duration-300
              hover:from-[#337C56] hover:to-[#33734F]
              text-base w-full sm:w-auto
            "
          >
            Let's Talk
          </button>

          <button
            className="
              border border-white text-white font-medium 
              px-8 py-3 rounded-full 
              hover:bg-white hover:text-black 
              transition-all duration-300 
              text-base w-full sm:w-auto
            "
          >
            Featured
          </button>

        </div>
      </div>
    </section>
  );
}
