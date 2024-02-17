import exp from "constants";
import Image from "next/image";
import HeadingTitle from "../HeadingTitle";


const AboutSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden ">
        <div className="absolute w-full overflow-hidden inset-0 z-0">
          <Image src="/images/temp.jpg" alt="About" layout="fill" objectFit="cover" />
        </div>
        <div className="relative flex  bg-black bg-opacity-50 md:pl-12 pl-4   pt-12 md:pb-0 pb-12  ">
          <div className="flex flex-col">
            <HeadingTitle title="What we believe ?" className="text-white " />
            <div className="text-white w-full  pr-4 md:text-base text-sm md:w-2/4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam. . Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam.. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
            </div>
          </div>
          <Image src={"/images/modi.png"} alt="About" width={500} height={500} className="rounded-lg w-96 h-96 mt-8 md:inline-block hidden" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
