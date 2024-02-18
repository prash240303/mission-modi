import exp from "constants";
import Image from "next/image";
import HeadingTitle from "../HeadingTitle";


const Mission = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden ">
        <div className="absolute w-full overflow-hidden inset-0 z-0">
          <Image src="/images/temp.jpg" alt="About" layout="fill" objectFit="cover" />
        </div>
        <div className="relative flex md:flex-row flex-col md:gap-2 gap-6 items-center justify-center px-6  bg-black bg-opacity-50 md:pl-12 pl-4   py-12  ">
          <div className="text-white w-full  pr-4 md:text-base text-sm md:w-2/5">
            <HeadingTitle title="What we believe ?" className="text-white " />
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam. . Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </div>
          <div className="text-white w-full  pr-4 md:text-base text-sm md:w-2/5">
            <HeadingTitle title="What we believe ?" className="text-white " />
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam. . Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam.. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
          </div>
          <div className="text-white w-full  pr-4 md:text-base text-sm md:w-2/5">
            <HeadingTitle title="What we believe ?" className="text-white " />
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam. . Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam.. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
