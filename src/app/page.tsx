import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import { Testimonial } from "@/components/Testimonial";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <Testimonial/>
    <UpComingWebinar/>
    <Instructor/>
   </div>
  );
}
