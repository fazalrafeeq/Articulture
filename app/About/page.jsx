"use client"

import Footer from "@/banner-commponents/2-Banner/Footer"
import LatestNews from "@/banner-commponents/2-Banner/News"
import Testimonials from "@/banner-commponents/2-Banner/testimonial"
import TeamSection from "@/banner-commponents/About-team4"
import AboutBanner from "@/banner-commponents/About/About-Banner"
import ServiceSection from "@/banner-commponents/About/Abt-Service"
import WhereWeWork from "@/banner-commponents/Category"
import ClientsCarousel from "@/banner-commponents/ClientCard"
import AboutSection from "@/banner-commponents/land-about/About-1"
import Navbar from "@/Nav-components/Navbar"
import Topbar from "@/T-bar-components/Topbar"

export default function Aboutus(){
    return(
       <div>
        <Topbar/>
        <Navbar/>
        <AboutBanner/>
        <AboutSection/>
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