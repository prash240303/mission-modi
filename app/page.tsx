import MainLayout from "./Layout/MainLayout";
import { CarouselUI } from "../components/Home/carousel";
import Marquee from "@/components/Home/marquee";
import AboutSection from "@/components/Home/about";
import Banner from "@/components/Home/banner";
import Mission from "@/components/Home/mission";
import NewsSection from "@/components/Home/newssection";
import Gallery from "@/components/Home/gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-3 ">
      <MainLayout>
        <CarouselUI />
        {/* <Marquee /> */}
        <AboutSection />
        <Banner />
        <Mission/>
        <NewsSection/>
        <Gallery/>
      </MainLayout>
    </main>

  );
}
