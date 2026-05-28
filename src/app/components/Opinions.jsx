"use client";
import { delay } from "motion";
import { Autoplay } from "swiper/modules";
import { FaTwitter } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaParagraph } from "react-icons/fa";
import Image from "next/image";
export default function Opinions() {
  const reviews = [
    {
      name: "Andrzej Piaseczny",
      shorttitle: "Pełen profesjonalizm i świetny kontakt",
      desc: "Profesjonalna obsługa od pierwszego kontaktu aż po realizację. Wszystko zostało dokładnie wyjaśnione, a instalacja przebiegła sprawnie i bez problemów. Zdecydowanie polecam.",
      profession: "CEO",
      avatar: "/os1.jpg",
    },
    {
      name: "Angela Borowicz",
      shorttitle: "Realne oszczędności i nowoczesne rozwiązania",
      desc: "Świetne podejście do klienta i pełne wsparcie na każdym etapie. Dzięki nim zaoszczędziliśmy na rachunkach i zyskaliśmy nowoczesne rozwiązanie na lata.",
      profession: "Menager",
      avatar: "/os2.jpg",
    },
    {
      name: "Tomasz Zieliński",
      shorttitle: "Szybka realizacja i świetna komunikacja",
      desc: "Bardzo dobra komunikacja i szybka realizacja. Widać doświadczenie i znajomość branży. Wszystko działa bez zarzutu.",
      profession: "As. Menager",
      avatar: "/os3.jpg",
    },
    {
      name: "Andrzej Piaseczny",
      shorttitle: "Firma godna zaufania",
      desc: "Profesjonalna obsługa od pierwszego kontaktu aż po realizację. Wszystko zostało dokładnie wyjaśnione, a instalacja przebiegła sprawnie i bez problemów. Zdecydowanie polecam.",
      profession: "Lokalny sprzedawca",
      avatar: "/os4.jpg",
    },
    {
      name: "Angela Borowicz",
      shorttitle: "Najlepsza decyzja dla naszego domu",
      desc: "Świetne podejście do klienta i pełne wsparcie na każdym etapie. Dzięki nim zaoszczędziliśmy na rachunkach i zyskaliśmy nowoczesne rozwiązanie na lata.",
      profession: "Gospodarstwo R.",
      avatar: "/os5.jpg",
    },
    {
      name: "Tomasz Zieliński",
      shorttitle: "Wszystko działa perfekcyjnie",
      desc: "Bardzo dobra komunikacja i szybka realizacja. Widać doświadczenie i znajomość branży. Wszystko działa bez zarzutu.",
      profession: "Piekarz",
      avatar: "/os6.jpg",
    },
  ];
  return (
    <div className="text-black mx-5  mb-8 md:mx-40 md:my-15">
      <h1 className="text-5xl font-semibold mb-2 ">Wybrani przez klientów,</h1>
      <h2 className="text-5xl font-semibold mb-7 text-[#c0c0c0]">
        doceniani przez ekspertów
      </h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        }}
        className=" mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-120 p-10 bg-[#f3f2e8] justify-between rounded-2xl flex flex-col ">
              <div>
                <div className=" flex">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={70}
                    height={70}
                    className="rounded-full mr-5 w-15 h-15 object-cover"
                  />

                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm">{review.profession}</p>
                  </div>
                  <div className="ml-auto">
                    <div className=" text-2xl bg-[#f7f7f7] p-3 rounded-2xl">
                      <FaTwitter />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-10">
                  "{review.shorttitle}"
                </h3>
                <p className="text-xl mt-3">{review.desc}</p>
              </div>
              <div className=" flex items-center">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <TiStar key={i} size={30} className="text-yellow-400" />
                  ))}
                <p className="ml-auto"> 09/30/2026</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
