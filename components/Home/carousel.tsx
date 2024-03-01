"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


const ImagePaths = [
  {
    src: "/images/careusal1.png",
    alt: "Image 1"
  },
  {
    src: "/images/careusal2.png",
    alt: "Image 2"
  },
  {
    src: "/images/temp.jpg",
    alt: "Image 3"
  },

]


export function CarouselUI() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
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
      <CarouselContent className="w-screen">
        {ImagePaths.map((item, index) => (
          <CarouselItem key={index}>
            <div className="w-full" >
              {/* <span className="text-4xl font-semibold">{index + 1} { item.alt} {item.src} </span> */}
              <Image src={item.src} className="w-full object-fill h-screen" alt={item.alt} width={2000} height={2000} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute  left-6 top-1/2" />
      <CarouselNext className="absolute  right-6 top-1/2" />
    </Carousel>
  )
}