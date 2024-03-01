"use client";
import NewsCard from "@/components/ui/newsCard";
import MainLayout from "../Layout/MainLayout";
import HeadingTitle from "@/components/HeadingTitle";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const sampleDate = new Date();

const newsData = [
  {
    imglink: "/images/temp.jpg",
    heading: "6th Mega Blood Donation and eye checkup Camp",
    desc: "The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well.",
    location: "Jalandhar"
  },
  {
    imglink: "/images/temp.jpg",
    heading: "5th Mega Blood Donation and eye checkup Camp",
    desc: "The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well.",
    location: "Jalandhar"
  },
  {
    imglink: "/images/temp.jpg",
    heading: "4th Mega Blood Donation and eye checkup Camp",
    desc: "The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well.",
    location: "Jalandhar"
  },
  {
    imglink: "/images/temp.jpg",
    heading: "3th Mega Blood Donation and eye checkup Camp",
    desc: "The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well.",
    location: "Jalandhar"
  },
  {
    imglink: "/images/temp.jpg",
    heading: "2th Mega Blood Donation and eye checkup Camp",
    desc: "The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well.",
    location: "Jalandhar"
  },
  {
    imglink: "/images/temp.jpg",
    heading: "1th Mega Blood Donation and eye checkup Camp",
    desc: "The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well.",
    location: "Jalandhar"
  },
  {
    imglink: "/images/temp.jpg",
    heading: "6th Mega Blood Donation and eye checkup Camp",
    desc: "The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well.",
    location: "Jalandhar"
  },
  // Add more news data objects here as needed
];





export default function News() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <MainLayout>
      <h1>News</h1>
      <p>Welcome to the news page!</p>
      <div className="flex flex-col items-center gap-6 my-12 px-12">
        <HeadingTitle title="Mission Modi Latest News" className="text-center mx-auto" />
        {/* <div className="flex flex-col gap-4 items-start justify-center my-6">
          <h2 className="font-semibold text-2xl">Latest News</h2>
          <div className="overflow-x-scroll w-[90vw] gap-4 flex">
              {newsData.map((news, index) => (
                <NewsCard 
                  key={index}
                  imglink={news.imglink} 
                  heading={news.heading} 
                  date={sampleDate} 
                  desc={news.desc} 
                  location={news.location} 
                />
              ))}
          </div>
        </div> */}
      
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-screen h-full p-2">
            {newsData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="w-full flex gap-4">
                  <NewsCard
                    key={index}
                    imglink={item.imglink}
                    heading={item.heading}
                    date={sampleDate}
                    desc={item.desc}
                    location={item.location}
                  // Add other props for the NewsCard component
                  />
                  <NewsCard
                    key={index}
                    imglink={item.imglink}
                    heading={item.heading}
                    date={sampleDate}
                    desc={item.desc}
                    location={item.location}
                  // Add other props for the NewsCard component
                  />
                  <NewsCard
                    key={index}
                    imglink={item.imglink}
                    heading={item.heading}
                    date={sampleDate}
                    desc={item.desc}
                    location={item.location}
                  // Add other props for the NewsCard component
                  />
                  <NewsCard
                    key={index}
                    imglink={item.imglink}
                    heading={item.heading}
                    date={sampleDate}
                    desc={item.desc}
                    location={item.location}
                  // Add other props for the NewsCard component
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-6 top-1/2" />
          <CarouselNext className="absolute right-6 top-1/2" />
        </Carousel>
 


      </div>
    </MainLayout>
  );
}

