import Footer from "@/banner-commponents/2-Banner/Footer";
import BlogPage1 from "@/banner-commponents/Blog/Blog-1";
import BlogBanner from "@/banner-commponents/Blog/Blog-Banner";
import Navbar from "@/banner-commponents/land-about/Navbar";
import Topbar from "@/banner-commponents/land-about/Topbar";

export default function Blog(){
    return(
        <div>
            <Topbar/>
            <Navbar/>
            <BlogBanner/>
            <BlogPage1/>
            <Footer/>
        </div>
    )
}