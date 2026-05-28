"use client";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const text =
  "Odkryj flotę luksusowych, ekonomicznych i przystępnych cenowo aut. Czy planujesz wyjazd służbowy, rodzinne wakacje czy spontaniczną podróż — mamy idealne auto właśnie dla Ciebie.";
export default function Discover() {
  const words = text.split(" ");
  return (
    <div className="h-full mx-5  mb-8 md:mx-40 md:my-15 grid grid-cols-1 lg:grid-cols-[55%_40%] gap-[5%] text-black">
      <div className="flex flex-col h-full min-h-[400px]">
        <h3 className="text-4xl mb-10 font-medium"> Odkryj naszą flotę </h3>

        <h2 className="text-3xl leading-relaxed">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <div className="mt-auto">
          <Link href="/#cars">
            <Button className="text-2xl cursor-pointer">Przeglądaj</Button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/discoverbg.jpg"
          alt="Discover Image"
          width={500}
          height={300}
          className="object-cover rounded-lg w-full"
        />
      </div>
    </div>
  );
}
