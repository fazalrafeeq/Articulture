import Banner2 from "@/banner-commponents/2-Banner/Banner-2";
import Footer from "@/banner-commponents/2-Banner/Footer";
import LatestNews from "@/banner-commponents/2-Banner/News";
import Testimonials from "@/banner-commponents/2-Banner/testimonial";
import TeamSection from "@/banner-commponents/About-team4";
import WhereWeWork from "@/banner-commponents/Category";
import ClientsCarousel from "@/banner-commponents/ClientCard";
import Hero from "@/banner-commponents/Hero";
import AboutSection1 from "@/banner-commponents/land-about/About-1";
import ServiceSection from "@/banner-commponents/land-about/About-2-con";
import StatsSection from "@/banner-commponents/land-about/About-3";
import Navbar from "@/Nav-components/Navbar";
import Topbar from "@/T-bar-components/Topbar";




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
