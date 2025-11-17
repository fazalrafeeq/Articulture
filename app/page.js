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
   </>
   
  );
}
