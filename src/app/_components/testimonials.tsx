"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.jpg";

const testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto, reiciendis eius quibusdam excepturi ipsum iure dignissimos, velit porro voluptate explicabo, eveniet ab in totam. Earum fugit odio cupiditate laboriosam?",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor2,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto, reiciendis eius quibusdam excepturi ipsum iure dignissimos, velit porro voluptate explicabo, eveniet ab in totam. Earum fugit odio cupiditate laboriosam?",
    author: "Rafael",
    role: "Tutor do Thor(Bulldog Francês)",
    image: tutor1,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto, reiciendis eius quibusdam excepturi ipsum iure dignissimos, velit porro voluptate explicabo, eveniet ab in totam. Earum fugit odio cupiditate laboriosam?",
    author: "Camila Fernandes",
    role: "Tutora de Mel e do Max",
    image: tutor2,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  // /
  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  // //

  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="mb-12 text-center text-4xl font-bold">
            Depoimentos dos nossos clientes
          </h2>

          <div className="relative mx-auto max-w-4xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div key={index} className="min-w-0 flex-[0_0_100%] px-3">
                    <article className="flex h-full flex-col space-y-4 rounded-2xl bg-[#1e293b] p-6 text-white">
                      <div className="flex flex-col items-center space-y-4 text-center select-none">
                        <div className="relative h-24 w-24">
                          <Image
                            src={item.image}
                            alt={item.author}
                            fill
                            sizes="96px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <p className="text-gray-200 select-none">
                          {item.content}
                        </p>

                        <div>
                          <p className="font-bold">{item.author}</p>
                          <p className="text-sm text-gray-400">{item.role}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <ChevronLeft
                onClick={scrollPrev}
                className="h-6 w-6 text-gray-600"
              />
            </button>
            <button className="absolute top-1/2 right-3 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <ChevronRight
                onClick={scrollNext}
                className="h-6 w-6 text-gray-600"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
