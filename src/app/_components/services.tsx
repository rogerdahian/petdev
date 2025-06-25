"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada(higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações.",
  },
  {
    title: "Consulta Veterinaria",
    description:
      "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Olá vi no site sobre Consulta veterinaria e gostaria de mais informações.",
  },
  {
    title: "Táxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets no petshop, clinicas veterinarias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre Taxi Pet e gostaria de mais informações.",
  },
  {
    title: "Hotel para pets",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
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
    <section className="bg-white py-16">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <h2 className="mb-12 text-4xl font-bold">Serviços</h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_calc(100%/3)]"
                  >
                    <article className="flex h-full flex-col space-y-4 rounded-2xl bg-[#1e293b] p-6 text-white">
                      <div className="flex flex-1 items-start justify-between">
                        <div className="flex gap-3">
                          <span className="text-3xl">{item.icon}</span>

                          <div>
                            <h3 className="my-1 text-xl font-bold">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 select-none">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                        <div className="flex items-center gap-1.5 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{item.duration}</span>
                        </div>
                        <a
                          href={`https://wa.me/5548374478323?text=Olá isso é um teste apenas, possivel de colocar qualquer contato`}
                          target="_blank"
                          className="flex items-center justify-center gap-2 rounded-md p-1 px-4 duration-300 hover:bg-green-500"
                          rel="noreferrer"
                        >
                          <WhatsappLogoIcon className="h-5 w-5" />
                          Entrar em contato
                        </a>
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
