import Image from "next/image";
import Gallery from "./gallery/page";
import MainLayout from "./Layout/MainLayout";
import AboutUs from "./about-us/page";
import ContactUs from "./contact-us/page";
import News from "./news/page";
import { Carousel } from "@/components/ui/carousel";
import { CarouselUI } from "../components/Home/careusel";
import Marquee from "@/components/Home/marquee";


export default function Home() {
  return (
    <main className="flex flex-col items-center gap-3 ">
      <MainLayout>
        <CarouselUI />
        <Marquee />
      </MainLayout>
    </main>

  );
}
