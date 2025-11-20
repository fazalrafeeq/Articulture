import Banner2 from "@/banner-commponents/2-Banner/Banner-2";
import Footer from "@/banner-commponents/2-Banner/Footer";
import LatestNews from "@/banner-commponents/2-Banner/News";
import Testimonials from "@/banner-commponents/2-Banner/testimonial";
import TeamSection from "@/banner-commponents/land-about/About-team4";
import WhereWeWork from "@/banner-commponents/land-about/Category";
import ClientsCarousel from "@/banner-commponents/land-about/ClientCard";
import Hero from "@/banner-commponents/land-about/Hero";
import AboutSection1 from "@/banner-commponents/land-about/About-1";
import ServiceSection from "@/banner-commponents/land-about/About-2-con";
import StatsSection from "@/banner-commponents/land-about/About-3";
import Navbar from "@/banner-commponents/land-about/Navbar";
import Topbar from "@/banner-commponents/land-about/Topbar";




export default function Home() {
  return (
    <>
    <Topbar/>
     <Hero/>
      <Navbar/>
       <AboutSection1/>
        <ServiceSection/>
         <StatsSection/>
          <TeamSection/>
           <ClientsCarousel/>
            <Banner2/>
             <WhereWeWork/>
              <LatestNews/>
               <Testimonials/>
                <Footer/>
          
   </>
   
  );
}
