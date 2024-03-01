import Image from "next/image";
import HeadingTitle from "../HeadingTitle";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="flex my-6 flex-col items-center gap-3">
      <HeadingTitle title="Gallery" className="text-center mx-auto" />


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-6 px-4 mt-6">
        <div className="grid gap-4">
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
          </div>
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
          </div>
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
          </div>
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
          </div>
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
          </div>
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
          </div>
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
          </div>
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
          </div>
          <div>
            <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='md:mt-12 mt-6 md:flex items-center justify-center w-fit mx-auto space-x-2'>
        <Link
          href="/gallery" 
          className="w-full bg-jse-primary-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}

export default Gallery;