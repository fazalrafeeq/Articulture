"use client"

import Footer from "@/banner-commponents/2-Banner/Footer"
import LatestNews from "@/banner-commponents/2-Banner/News"
import Testimonials from "@/banner-commponents/2-Banner/testimonial"
import TeamSection from "@/banner-commponents/land-about/About-team4"
import AboutBanner from "@/banner-commponents/About/About-Banner"
import ServiceSection from "@/banner-commponents/About/Abt-Service"
import WhereWeWork from "@/banner-commponents/land-about/Category"
import ClientsCarousel from "@/banner-commponents/land-about/ClientCard"
import Navbar from "@/banner-commponents/land-about/Navbar"
import Topbar from "@/banner-commponents/land-about/Topbar"
import AboutSection2 from "@/banner-commponents/About/abt-section-2"

export default function Aboutus(){
    return(
       <div>
        <Topbar/>
        <Navbar/>
        <AboutBanner/>
        <AboutSection2/>
        <ServiceSection/>
        <TeamSection/>
        <ClientsCarousel/>
        <WhereWeWork/>
        <LatestNews/>
        <Testimonials/>
        <Footer/>

       </div>
    )
}