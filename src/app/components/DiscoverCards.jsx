import Image from "next/image";
import Button from "./Button";
export default function DiscoverCards() {
  return (
    <>
      <div className="text-black mx-5 mb-8 my-10 md:mx-40 md:my-15 grid grid-cols-1 lg:grid-cols-2">
        <div className=" ">
          <h3 className="text-2xl mb-5">Odkrywaj</h3>
          <h2 className="text-4xl mb-5 text-left ">
            Znajdź swoje idealne auto
          </h2>
        </div>
        <div className="lg:ml-auto lg:mt-auto">
          <Button>Zobacz więcej</Button>
        </div>
        <div></div>
      </div>
    </>
  );
}
