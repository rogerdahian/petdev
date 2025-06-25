import React from "react";
import Image from "next/image";
import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import natural from "../../../public/natural.png";
import whiskas from "../../../public/whiskas.png";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Royal Canin", logo: royal },
];

export function Footer() {
  return (
    <section className="bg-[#E84C3D] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="mb-8 text-center text-3xl font-semibold">
            Marcas que trabalhamos
          </h4>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            {brands.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white p-4"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                  data-aos="zoom-in"
                />
              </div>
            ))}
          </div>
        </div>
        <footer className="mt-5 mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 text-2xl font-semibold">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.{" "}
            </p>
            <a
              href={`https://wa.me/5548374478323?text=Olá isso é um teste apenas, possivel de colocar qualquer contato`}
              target="_blank"
              className="rounded-md bg-green-600 px-4 py-2 font-semibold text-white duration-300 hover:bg-green-500"
              rel="noreferrer"
            >
              Contato via Whatsapp
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-semibold">Contato</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (XX) 123456789 </p>
            <p>Rua X, centro, São Paulo | SP</p>
          </div>

          <div>
            <h3 className="mb-2 text-2xl font-semibold">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="#">
                <FacebookLogoIcon className="h-8 w-8 text-white/80" />
              </a>
              <a href="#">
                <InstagramLogoIcon className="h-8 w-8 text-white/80" />
              </a>
              <a href="#">
                <YoutubeLogoIcon className="h-8 w-8 text-white/80" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
