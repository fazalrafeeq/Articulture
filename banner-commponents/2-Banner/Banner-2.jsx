export default function Banner2() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-10">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[50px] overflow-hidden">

        {/* Background Image */}
        <img 
          src="/image/Banner-2.png"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />

        {/* Background Overlay (optional subtle dark effect) */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Center Text */}
        <div className="
          absolute inset-0
          flex items-center justify-center
          px-6 text-center
        ">
          <p className="  
            text-white text-xl md:text-2xl lg:text-3xl 
             italic font-medium leading-relaxed
          ">
            From bold architectural lines to refined interior details,<br />
            we bring your vision to life with thoughtful design and<br />
            flawless execution.
          </p>
        </div>

      </div>
    </section>
  );
}
