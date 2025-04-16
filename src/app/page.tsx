import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ReasonSection  from "@/components/ReasonSection";
import Services from "@/components/Services";
import HomeService from "@/components/ui/HomeService";
import WhatweDo from "@/components/WhatweDo";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <h2 className="bg-red-300 ">HI THERE</h2>
      <h1 className="m-2 bg-red-200 text-secondar p-2 mt-12">HELLO
      <div className="flex justify-center ">
        <Button children="Estimate Project" />
        <Button children="View More" variant="outline" />
      </div>
      </h1> */}

      <HeroSection />
      <WhatweDo />
      <ReasonSection />
      <Services />

      <hr className="text-red-600 bg-red-900" />
      <div className="m-auto flex justify-center align-middle">
          <HomeService />
      </div>

    </>
  );
}
