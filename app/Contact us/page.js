import Footer from "@/banner-commponents/2-Banner/Footer";
import ContactSection from "@/banner-commponents/Contact/contact";
import ContactsBanner from "@/banner-commponents/Contact/contacts-banner";
import MapSection from "@/banner-commponents/Contact/Map";
import Navbar from "@/banner-commponents/land-about/Navbar";
import Topbar from "@/banner-commponents/land-about/Topbar";
import { Divide } from "lucide-react";

export default function Contacts(){
    return(
        <div>
            <Topbar/>
            <Navbar/>
            <ContactsBanner/>
            <ContactSection/>
            <MapSection/>
            <Footer/>
        </div>
    )
}