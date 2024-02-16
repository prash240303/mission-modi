import MainLayout from "./Layout/MainLayout";
import { CarouselUI } from "../components/Home/carousel";
import Marquee from "@/components/Home/marquee";
import AboutSection from "@/components/Home/about";
import Banner from "@/components/Home/banner";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-3 ">
      <MainLayout>
        <CarouselUI />
        <Marquee />
        <AboutSection/>
       <Banner/> 
      </MainLayout>
    </main>

  );
}
