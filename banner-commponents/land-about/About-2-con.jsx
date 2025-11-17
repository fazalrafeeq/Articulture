// components/ServicesSectionPureCSSScroll.jsx

import React from 'react';
import Image from 'next/image';

// --- Data for the cards (kept the same) ---
const services = [
    {
        title: 'Architecture',
        imageSrc: '/image/service-1.png', 
        description: 'At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.',
        highlighted: true,
    },
    {
        title: 'Interior',
        imageSrc: '/image/service-2.png', 
        description: 'At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.',
        highlighted: false,
    },
    {
        title: 'Planning',
        imageSrc: '/image/service-3.png', 
        description: 'At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.',
        highlighted: false,
    },
    {
        title: 'Drawing',
        imageSrc: '/image/service-4.png', 
        description: 'At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments.',
        highlighted: false,
    },
];

// --- Card Component (Kept the same styling logic) ---
const ServiceCard = ({ title, imageSrc, description, highlighted }) => {

    const IMAGE_SIZE = 64; 

    const baseClasses = 'p-6 sm:p-8 rounded-xl transition duration-300 h-full flex flex-col justify-between';
    
    const highlightedClasses = `
        bg-gradient-to-r from-[#3CA270] to-[#045B30]
        text-white 
        shadow-xl  
        hover:scale-[1.01] 
        cursor-default
    `;

    const regularClasses = `
        bg-white 
        text-gray-700 
        border border-gray-100 
        hover:shadow-lg 
        hover:scale-[1.01] 
        cursor-pointer
    `;

    return (
        <div 
            className={`${baseClasses} ${highlighted ? highlightedClasses : regularClasses} 
                min-w-[70vw] sm:min-w-[45vw] lg:min-w-0`} 
            // min-w-[70vw] ensures the card is wide enough for mobile scroll
        >
            <div>
                <div className="mb-4">
                    <Image 
                        src={imageSrc} 
                        alt={`${title} icon`} 
                        width={IMAGE_SIZE} 
                        height={IMAGE_SIZE}
                        className={`w-16 h-16 object-contain ${highlighted ? 'filter invert brightness-0' : ''}`}
                    />
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                    {description}
                </p>
            </div>
            
            <a href="#" className={`text-sm font-medium inline-flex items-center group mt-auto ${highlighted ? 'text-white hover:text-white/90' : 'text-green-600 hover:text-green-700'}`}>
                Read More 
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
        </div>
    );
};

// --- Main Section Component ---
export default function ServicesSectionPureCSSScroll() {
    return (
        // NOTE: No "use client" needed here
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                        Creating Spaces, Building Connections
                    </h2>
                    <p className="mt-4  text-base text-gray-500 max-w-2xl mx-auto">
                        At articulate, we believe that every space has a story waiting to be told. Our mission is to shape environments that inspire
                    </p>
                </div>
                
                {/* 1. HORIZONTAL SCROLL FOR SMALL SCREENS (sm and below) */}
                <div className="lg:hidden"> {/* Hide on large screens and up */}
                    <div className="flex gap-4 hover:scale-[1.01]  overflow-x-scroll pb-4 -mx-4 px-4"> 
                        {/* We use negative margins (-mx-4) and positive padding (px-4) 
                            to make the scroll area touch the screen edges while keeping content aligned */}
                        {services.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>

                {/* 2. GRID FOR LARGE SCREENS (lg and up) */}
                <div className="hidden gap-4 pl-7 pr-8 lg:block"> {/* Show only on large screens and up */}
                    <div className="grid grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div 
                                key={service.title} 
                                className="col-span-1 flex" 
                            >
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}