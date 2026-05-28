"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdHomeFilled } from "react-icons/md";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

export default function WhyUs() {
  const content = [
    {
      icon: <MdHomeFilled size={30} />,
      title: "Elastyczny i prosty odbiór",
      desc: "Odbierz auto w jednym z naszych punktów — na lotnisku, w centrum miasta lub z dostawą pod hotel. Szybkie formalności, zero ukrytych opłat.",
    },
    {
      icon: <BsFillTicketPerforatedFill size={30} />,
      title: "Rezerwacja w 2 minuty",
      desc: "Zarezerwuj online w kilka kliknięć. Wybierz auto, daty i dodatki — i ruszaj w drogę.",
    },
    {
      icon: <BsFillBookmarkCheckFill size={30} />,
      title: "Sprawdzona i zadbana flota",
      desc: "Każde auto jest regularnie serwisowane, w pełni ubezpieczone i dokładnie czyszczone przed każdym wynajmem. Twoje bezpieczeństwo to nasz priorytet.",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 my-10 md:mx-40 md:my-15 text-black">
      <div className="h-full flex flex-col">
        <h3 className="text-[#999] text-xl mb-5">Dlaczego my?</h3>
        <h2 className="text-5xl font-medium mb-10">
          Twój zaufany partner w każdej podróży
        </h2>
        <div className="mt-auto">
          <Image
            src="/whyusbg.jpg"
            alt="Why Us"
            width={500}
            height={300}
            className="w-full lg:w-[90%] rounded-2xl "
          />
        </div>
      </div>
      <div className="w-full justify-between">
        {content.map((item, i) => (
          <motion.div
            key={i}
            className="border-1 p-5 rounded-2xl mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className=" bg-[#E2DEB7] p-3 rounded-lg mb-5 w-max">
              {item.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <h3 className="text-xl font-medium mb-3">{item.desc}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
