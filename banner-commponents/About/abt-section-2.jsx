// components/AboutSection.jsx
import Image from "next/image";

const AboutSection2 = () => {
  return (
    <div className="flex justify-center p-4 sm:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-8xl w-full bg-white rounded-xl shadow-2xl p-6 lg:p-10">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE — CLEAN, NO BUTTON, NO LOGO */}
          <div className="w-full lg:w-1/3 flex flex-col justify-start p-1">

            <p className="text-sm uppercase font-medium text-gray-600 mb-2">
              About us
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Creating Spaces, Building Connections
            </h2>

            {/* Short description */}
            <p className="text-gray-700 mb-6">
              We design meaningful spaces that reflect purpose,
              elevate everyday living, and create lasting impact for
              the people who experience them.

            </p>


            <p className="text-gray-700 mb-6">
                
              At articulate, we believe that every space has a story waiting to be told.
               Our mission is to shape environments that inspire, comfort,
               and connect  turning walls and materials into experiences that speak to the people who inhabit them.
                At articulate, we believe that every space has a story waiting to be told.
            </p>
            <p className="text-gray-700 mb-6">
                  At articulate, we believe that every space has a story waiting to be told.
               Our mission is to shape environments that inspire, comfort,
               and connect  turning walls and materials into experiences that speak to the people who inhabit them.
            </p>
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
                  lg:w-full lg:h-[700px]
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
                  lg:w-full lg:h-[700px]
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
                  lg:w-full lg:h-[700px]
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

export default AboutSection2;
