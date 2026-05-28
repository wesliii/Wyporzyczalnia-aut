import Button from "./Button";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="relative min-h-[50vh] mx-5 lg:mx-40 rounded-2xl overflow-hidden mb-10">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/ctabaner.jpg"
        alt="background"
        fill
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* TOP CONTENT */}
      <div className="relative z-10 text-center text-white p-10 mx-auto my-10 lg:m-20">
        <p className="text-sm lg:text-base">
          Stworzone dla nowoczesnych kierowców
        </p>

        <h1 className="text-4xl lg:text-7xl font-semibold mt-5 leading-tight">
          Podróżuj bez ograniczeń,
          <br />
          dokładnie tak jak chcesz
        </h1>

        <div className="flex flex-wrap gap-4 justify-center mt-8 text-sm lg:text-lg">
          <p>✔ Samochody premium</p>
          <p>✔ Elastyczny wynajem</p>
          <p>✔ Wsparcie 24/7</p>
        </div>
      </div>

      {/* WHITE CTA CARD */}
      <div className="relative z-10 text-black p-8 lg:p-12 bg-white mx-5 lg:mx-20 mb-10 rounded-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 shadow-2xl">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold leading-tight">
            Wybierz swoje wymarzone auto.
            <br />
            Jedź bez ograniczeń.
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-5 lg:mt-0">
          <button className="border-1 py-4 px-6 rounded-3xl transition-transform duration-300 hover:scale-110">
            Odkryj samochody
          </button>
          <button className="text-white bg-black  py-4 px-6 rounded-3xl transition-transform duration-300 hover:scale-110">
            Zarezerwuj teraz
          </button>
        </div>
      </div>
    </div>
  );
}
