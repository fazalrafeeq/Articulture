// components/AboutSection.jsx
import Image from 'next/image';

const AboutSection = () => {
    // Define the fixed dimensions using Tailwind's arbitrary value syntax
 // 1. Put the 'md:' prefix INSIDE the variable for proper template literal injection 
 // 2. This ensures the 3-column grid (md:grid-cols-3) can still align them properly.
 const FIXED_DIMENSIONS_MD = 'md:w-[200px] md:h-[400px]'; 
 const FIXED_DIMENSIONS_LG = 'lg:w-[200px] lg:h-[565px]';
 const FIXED_DIMENSIONS_XL = 'xl:w-[235px] lg:h-[565px]'; // Ensure LG also has its prefix

 return (
  // Outer container: Centers the content and adds viewport padding
  <div className="flex justify-center p-4 sm:p-8 lg:p-12 bg-gray-50">
   
   {/* Outer Card Container: The main white content block */}
   {/* Increased max-w for better layout at large sizes, as 350px is very small */}
   <div className="max-w-8xl w-full bg-white rounded-xl shadow-2xl p-6 lg:p-10">
    
    {/* Main Content Layout: Stacks on SM, splits 1/3 (text) and 2/3 (images) on LG */}
    <div className="flex flex-col lg:flex-row gap-10">
     
     {/* A. Text/Profile Column (Left Side) */}
     <div className={`w-full lg:w-1/3 flex flex-col justify-between p-1 md:min-h-[400px]`}> 
      <div>
       <p className="text-sm uppercase font-medium text-gray-600 mb-2">About us</p>
       <h2 className="text-4xl   font-bold text-gray-900 mb-6 leading-tight">
        Creating Spaces, Building Connections
       </h2>
       <p className="text-gray-700  mb-16">
        At Articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments that inspire, comfort, and connect — turning walls and materials into experiences that speak to the people who inhabit them.
       </p>
       
       <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 mb-8">
        Learn More
       </button>
      </div>
      
     {/* Cole Palmer Testimonial */}
      <div className="mt-1 pt-1 border-t border-gray-100"> 
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
         <Image src="/image/abt-1-icon-1.png" alt="Cole Palmer" width={48} height={48} className="object-cover" />
        </div>
        <div>
         <p className="font-bold text-gray-900">Cole Palmer</p>
         <p className="text-sm text-gray-500">Sr Architect</p>
        </div>
       </div>
       <blockquote className=" italic  py-2">
        "We envision a world where every space we create enhances the quality of life for its occupants while contributing positively to the environment."
       </blockquote>
      </div>
     </div>

     {/* B. IMAGES COLUMN (Right Side) */}
     {/* Removed md:h-1/2 as this conflicts with the fixed height on the images */}
     <div className="w-full  lg:w-2/3">
      {/* The wrapper for the scrolling images: Retaining your MD grid logic */}
      <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 pb-4 
              md:grid md:grid-cols-3 md:gap-1 md:overflow-x-hidden md:space-x-0  ">
       
       {/* 1. First Image (Living Room) - Carousel/Fixed Size */}
       {/* Cleaned up conflicting md:w-auto and md:w-0.5. Using the variable for MD/LG dimensions. */}
       <div className={`flex-shrink-0 w-4/5 md:col-span-1 
               h-96 ${FIXED_DIMENSIONS_MD} ${FIXED_DIMENSIONS_LG}  ${FIXED_DIMENSIONS_XL} relative rounded-lg overflow-hidden snap-center`}>
         <Image 
           src="/image/abt-1.png" 
           alt="Modern Living Room" 
           fill
           className="object-cover transition duration-500 hover:scale-105"
         />
       </div>
       
       {/* 2. Second Image (Kitchen) - Carousel/Fixed Size */}
       {/* Cleaned up conflicting md:w-auto. Using the variable for MD/LG dimensions. */}
       <div className={`flex-shrink-0 w-4/5 sm:w-11/12 md:col-span-1 
               h-96 ${FIXED_DIMENSIONS_MD} ${FIXED_DIMENSIONS_LG} ${FIXED_DIMENSIONS_XL} relative rounded-lg overflow-hidden snap-center`}> 
         <Image 
           src="/image/abt-2.png" 
           alt="Modern Kitchen" 
           fill
           className="object-cover transition duration-500 hover:scale-105"
         />
       </div>
       
       {/* 3. Third Image (Den/Library) - Carousel/Fixed Size */}
       {/* Cleaned up conflicting md:w-auto. Using the variable for MD/LG dimensions. */}
       <div className={`flex-shrink-0 w-4/5 sm:w-11/12 md:col-span-1 
               h-96 ${FIXED_DIMENSIONS_MD} ${FIXED_DIMENSIONS_LG} ${FIXED_DIMENSIONS_XL} relative rounded-lg overflow-hidden snap-center`}> 
         <Image 
           src="/image/abt-3.png" 
           alt="Cozy Den" 
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