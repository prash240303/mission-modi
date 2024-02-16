import Image from "next/image";
import HeadingTitle from "../HeadingTitle";


const Banner = () => {
  return (
    <section className="relative w-full">
      <div className="relative  w-full md:h-[200vh] h-fit overflow-hidden ">
        <div className="absolute w-full overflow-hidden top-0 inset-0 z-0">
          <Image src="/images/banner.png" alt="About" height={8000} width={8000} objectFit="cover" className="w-screen aspect-auto" />
        </div>
        <div className="relative flex ">
          <div className="flex flex-col items-center md:mt-12 mt-4">
            <h2 className="md:text-7xl text-2xl md:w-2/5 w-3/6  text-center font-serif font-bold text-jse-primary-500 ">
              “Aayiye milkar
              kre Naveen Bharat ka aarambh Modi Ji ke saath”
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;