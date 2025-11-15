import Hero from "@/banner-commponents/Hero";
import AboutSection1 from "@/banner-commponents/land-about/About-1";
import Navbar from "@/Nav-components/Navbar";
import Topbar from "@/T-bar-components/Topbar";



export default function Home() {
  return (
    <>
    <Topbar/>
     <Hero/>
      <Navbar/>
       <AboutSection1/>
   </>
   
  );
}
