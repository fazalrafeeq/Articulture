// components/AboutSection.jsx
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="flex justify-center p-4 sm:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-8xl w-full bg-white rounded-xl shadow-2xl p-6 lg:p-10">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between p-1 md:min-h-[400px]">
            <div>
              <p className="text-sm uppercase font-medium text-gray-600 mb-2">
                About us
              </p>

              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Creating Spaces, Building Connections
              </h2>

              <p className="text-gray-700 mb-16">
                At Articulate, we believe every space has a story waiting to be
                told. Our mission is to shape environments that inspire,
                comfort, and connect — turning walls and materials into
                experiences that speak to the people who inhabit them.
              </p>

              <button className="   bg-gradient-to-r from-[#3CA270] to-[#163C29]  hover:from-[#163C29] hover:to-[#33734F] text-white font-semibold py-2 px-12 rounded-full transition duration-300 mb-8">
                Learn More
              </button>
            </div>

            {/* PROFILE */}
            <div className="mt-1 pt-1 border-t border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
                  <Image
                    src="/image/abt-1-icon-1.png"
                    alt="Cole Palmer"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-sm text-gray-900">Cole Palmer</p>
                  <p className="text-sm text-gray-500">Sr Architect</p>
                </div>
              </div>

              <blockquote className="italic py-2 text-gray-400 font-light text-xm">
                "We envision a world where <br /> every space
                 we create <br /> enhances the
                quality of life for <br /> its occupants while  <br />contributing positively
                to the environment."
              </blockquote>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="w-full lg:w-2/3">
            <div
              className="
                flex overflow-x-scroll snap-x snap-mandatory space-x-4 pb-4
                md:grid md:grid-cols-3 md:gap-3 md:space-x-0 md:overflow-x-hidden
              "
            >

              {/* IMAGE 1 */}
              <div
                className="
                  snap-center rounded-lg overflow-hidden relative
                  w-[80%] h-[320px]
                  md:w-full md:h-[400px]
                  lg:w-full lg:h-[750px]
                  xl:w-full xl:h-[600px]
                "
              >
                <Image
                  src="/image/abt-1.png"
                  alt="About Image 1"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* IMAGE 2 */}
              <div
                className="
                  snap-center rounded-lg overflow-hidden relative
                  w-[80%] h-[320px]
                  md:w-full md:h-[400px]
                  lg:w-full lg:h-[750px]
                  xl:w-full xl:h-[600px]
                "
              >
                <Image
                  src="/image/abt-2.png"
                  alt="About Image 2"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* IMAGE 3 */}
              <div
                className="
                  snap-center rounded-lg overflow-hidden relative
                  w-[80%] h-[320px]
                  md:w-full md:h-[400px]
                  lg:w-full lg:h-[750px]
                  xl:w-full xl:h-[600px]
                "
              >
                <Image
                  src="/image/abt-3.png"
                  alt="About Image 3"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
