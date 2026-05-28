"use client";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { div } from "motion/react-client";

export default function About() {
  const text =
    "W DriveNow wierzymy, że każda podróż zasługuje na świetne auto. Od 2021 roku tysiące zadowolonych klientów zaufało nam w kwestii niezawodnego, przystępnego i komfortowego wynajmu samochodów.";
  const words = text.split(" ");

  const h2text = "Tworzymy niezapomniane podróże od 2021 roku";
  const h2words = h2text.split(" ");
  return (
    <div className="mx-5  mb-8 md:mx-40 md:my-15 text-black">
      <div className="lg:grid  lg:grid-cols-2 lg:gap-10  ">
        <div>
          <div className="lg:w-full mx-auto">
            <h2 className="text-5xl ">
              {h2words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
        <div className="lg:my-auto">
          <p className="text-lg mb-5 ">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 1.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 lg:mb-0"
          >
            <Button>Zarezerwuj teraz</Button>
          </motion.div>
        </div>
        <div className="w-full col-span-2">
          <Image
            src="/highway.jpg"
            alt="About Us"
            width={800}
            height={500}
            className="w-full h-64 md:h-80 lg:h-126 object-cover object-[center_80%] rounded-2xl"
          />
        </div>
      </div>
      <div className="flex w-full lg:divide-x lg:divide-gray-300 m-auto my-10 flex-col lg:flex-row">
        <div className="flex-1 ">
          <h2 className="text-6xl text-center mt-20 mb-10 font-semibold">
            100+
          </h2>
          <p className="text-lg text-center mb-10 text-gray-500">
            wypożyczone auta
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-6xl text-center mt-20 mb-10 font-semibold">
            95%
          </h2>
          <p className="text-lg text-center mb-10 text-gray-500">
            zadowolonych klientów
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-6xl text-center mt-20 mb-10 font-semibold">
            5.00
          </h2>
          <p className="text-lg text-center mb-10 text-gray-500">
            ocena usługi
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-6xl text-center mt-20 mb-10 mb-10 font-semibold">
            50+
          </h2>
          <p className="text-lg text-center mb-10 text-gray-500">
            dostępnych modeli
          </p>
        </div>
      </div>
    </div>
  );
}
