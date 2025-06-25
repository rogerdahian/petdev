import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#E84C3D] text-white">
      <div>
        <Image
          src={dogImg}
          alt="foto de cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-35 md:hidden"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-16 pb-16 md:pb-0">
        <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1
              className="text-3xl leading-10 font-bold md:text-4xl lg:text-5xl"
              data-aos="fade-down"
              data-aos-delay="50"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p
              className="lg:text-lg"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <div>
              <a
                href={`https://wa.me/5548374478323?text=Olá isso é um teste apenas, possivel de colocar qualquer contato`}
                target="_blank"
                className="flex w-fit items-center justify-center gap-2 rounded-md bg-green-500 px-5 py-2 font-semibold"
                rel="noreferrer"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <WhatsappLogoIcon className="h-5 w-5" />
                Contato via Whatsapp
              </a>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm">
                <b className="rounded-md bg-black px-2 py-1 text-white">5%</b>{" "}
                de desconto na primeira compra.
              </p>

              <div className="mt-4 flex">
                <div className="hidden w-32 lg:block">
                  <Image
                    src={catImg}
                    alt="foto de gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden h-full md:block">
            <Image
              src={dogImg}
              alt="foto do dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
