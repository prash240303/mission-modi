import Image from "next/image";

const MarqueeContent = [
  "देशवासियों को नव वर्ष 2024 की मिशन मोदी राष्ट्रीय संघ की ओर से हार्दिक शुभकामनाएं lll",
  "देशवासियों को नव वर्ष 2024 की मिशन मोदी राष्ट्रीय संघ की ओर से हार्दिक शुभकामनाएं lll",
  "देशवासियों को नव वर्ष 2024 की मिशन मोदी राष्ट्रीय संघ की ओर से हार्दिक शुभकामनाएं lll",
  "देशवासियों को नव वर्ष 2024 की मिशन मोदी राष्ट्रीय संघ की ओर से हार्दिक शुभकामनाएं lll",
];

const Marquee = () => {
  return (
    <div className="overflow-hidden w-screen bg-jse-primary-600">
      <div className="marquee w-full text-white items-center gap-x-6 flex  whitespace-nowrap py-2 text-xl leading-relaxed ">
        {MarqueeContent.map((content, index) => (
          <div key={index} className="px-4  flex gap-4">
            <span> {content} </span>
            <Image src="/bjp.svg" alt="" width={50} height={50} />

          </div>
        ))}
      </div>
    </div>

  );
}

export default Marquee;