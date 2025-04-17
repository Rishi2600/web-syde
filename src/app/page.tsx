import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import ReasonSection  from "@/components/ReasonSection";
import ScrollItem from "@/components/ScrollItem";
import Services from "@/components/Services";
import HomeService from "@/components/ui/HomeService";
import ProjectBanner from "@/components/ui/ProjectBanner";
import WhatweDo from "@/components/WhatweDo";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatweDo />
      <ReasonSection />
      <Services />
      <div className="m-auto flex justify-center align-middle">
          {/* <HomeService title={"Hello"} description={"have something"} image={"/websites-n-platforms.webp"} /> */}
      </div>
      <ProjectBanner />
      <ProjectSection />
      {/* <ScrollItem /> */}
      <Footer />
    </>
  );
}
