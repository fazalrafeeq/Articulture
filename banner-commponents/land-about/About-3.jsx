// components/StatsSection.jsx

import React from 'react';

const stats = [
    { number: '250+', label: 'Completed Projects' },
    { number: '150+', label: 'Happy Clients' },
    { number: '25+', label: 'Award  Won' },
    { number: '10+', label: 'Years Of Experince' }, // Using "Experince" as per the image
];

export default function StatsSection() {
    return (
        <section className=" p-7 py-7 -sm:py-24 bg-gray-50">
            <div className="max-w-1500  mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Content Card with Enhanced Shadow and subtle hover */}
                <div className="bg-white rounded-[40px] shadow-2xl shadow-gray-200 
                            p-8 sm:p-12 lg:p-16 transition-all duration-500 transform hover:shadow-3xl hover:shadow-gray-300">
                    
                    {/* Header Text */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-2xl  text-gray-900 tracking-tight mb-3">
                            More About Us
                        </h2>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            At articulate, we believe that every space has a story <br /> waiting to be told.
                        </p>
                    </div>

                    {/* Stats Grid: Responsive Layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 sm:text-center   sm:gap-12 lg:gap-16 text-center">
                        {stats.map((stat, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center justify-center p-2"
                            >
                                {/* Stat Number: Larger and bolder for impact */}
                                <p className="text-2xl sm:text-xl lg:text-5xl font-medium text-gray-900 mb-1 -mt-7 leading-tight">
                                    {stat.number}
                                </p>
                                {/* Label: Clear, readable text */}
                                <p className="text-sm sm:text-center  sm:font-normal text-gray-900 tracking-wide  md:font-bold  -mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
}