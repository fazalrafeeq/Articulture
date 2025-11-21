export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Get in touch</p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            We are always ready to help you and answer your questions
          </h2>

          <p className="text-gray-500 max-w-lg mb-10">
            At articulate, we believe that every space has a story waiting to be told. 
            Our mission is to shape environments that inspire
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">articulate@gmail.com</p>

              <h4 className="font-semibold mt-6 mb-2">Phone</h4>
              <p className="text-gray-600">+91 9488888888</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-gray-600">
                9235 Bayberry Drive <br />
                Hendersonville, NC 28792
              </p>

              <p className="text-gray-600 mt-4">
                8457 Beechwood Drive <br />
                Monroe Township, NJ 08831
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white text-xl cursor-pointer">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl cursor-pointer">
              <i className="fab fa-behance"></i>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 text-white text-xl cursor-pointer">
              <i className="fab fa-facebook-f"></i>
            </div>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="bg-[#f7f7f7] rounded-3xl p-6 sm:p-10">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

          <form className="space-y-6">
            {/* Input */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-400 outline-none py-3 focus:border-black transition"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Phone no."
                className="w-full bg-transparent border-b border-gray-400 outline-none py-3 focus:border-black transition"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-400 outline-none py-3 focus:border-black transition"
              />
            </div>

            <div>
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full bg-transparent border-b border-gray-400 outline-none py-3 focus:border-black transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#2d8c5f] text-white px-8 py-3 rounded-full hover:bg-[#24714c] transition shadow-md"
            >
              Sent a Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
