import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
export function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-black mx-5  mb-8 md:mx-40 md:my-15">
        <div className="flex flex-col justify-end h-full lg:min-h-[120px]">
          <h1 className="text-2xl font-medium md:text-6xl w-[80%] mb-auto">
            Wyjątkowe auta na każdą podróż
          </h1>
        </div>

        <div>
          <p className="text-sm md:text-lg mb-10 ">
            Odkryj flotę luksusowych, ekonomicznych i przystępnych cenowo aut.
            Czy planujesz wyjazd służbowy, rodzinne wakacje czy spontaniczną
            podróż.
          </p>
          <Link href="/#cars">
            <Button className="cursor-pointer">Przeglądaj</Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full h-[50vh] lg:h-[80vh]">
        {" "}
        {/* Tutaj ustawiasz dowolną wysokość */}
        <Image
          src="/rentalbg.jpg"
          alt="Hero Image"
          fill
          className="object-cover" // Zdjęcie wypełni obszar bez rozciągania
          priority
        />
      </div>
    </div>
  );
}
