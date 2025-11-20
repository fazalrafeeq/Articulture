"use client"

import Footer from "@/banner-commponents/2-Banner/Footer"
import ClientsCarousel from "@/banner-commponents/land-about/ClientCard"
import Navbar from "@/banner-commponents/land-about/Navbar"
import Topbar from "@/banner-commponents/land-about/Topbar"
import PortfolioCategory from "@/banner-commponents/Protfolio/Category-2"
import PortfolioBanner from "@/banner-commponents/Protfolio/Protfolio-Ban"


export default function Portfolio(){
    return(
        <div>
            <Topbar/>
            <Navbar/>
            <PortfolioBanner/>
            <PortfolioCategory/>
            <ClientsCarousel/>
            <Footer/>

        </div>
    )
}