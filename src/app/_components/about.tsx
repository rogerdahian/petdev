import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import React from "react";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
              <Image
                src={about1Img}
                alt="foto de cachorro"
                fill
                quality={100}
                className="object-cover duration-300 hover:scale-110"
                priority
              />
            </div>

            <div className="absolute right-4 -bottom-8 h-40 w-40 overflow-hidden rounded-lg border-4 border-white">
              <Image
                src={about2Img}
                alt="foto de cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="mt-10 space-y-6"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Until one has loved an animal, a part of one´s soul remains
              unawakened. We believe in it and we believe in easy access to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and secure checkout you´re in good hands.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href={`https://wa.me/5548374478323?text=Olá isso é um teste apenas, possivel de colocar qualquer contato`}
                target="_blank"
                className="flex w-fit items-center justify-center gap-2 rounded-md bg-[#E84C3D] px-4 py-2 text-white"
                rel="noreferrer"
              >
                <WhatsappLogoIcon className="h-5 w-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className="flex w-fit items-center justify-center gap-2 rounded-md px-4 py-2"
              >
                <MapPin className="h-5 w-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
