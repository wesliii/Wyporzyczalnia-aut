export default function Footer() {
  return (
    <div className="bg-[#1b1b1b] text-[#bbbbbb] p-10 pt-20 grid grid-cols-3 lg:grid-cols-4 gap-10 lg:px-30">
      {/* 1 */}
      {/*  */}
      <div>
        <h2 className="text-2xl pb-4">Firma</h2>
        <p className="pb-4">O nas</p>
        <p className="pb-4">Kontakt</p>
        <p className="pb-4">Blog</p>
        <p className="pb-4">Kariera</p>
      </div>
      {/* 2 */}
      <div>
        <h2 className="text-2xl pb-4">Oferta</h2>
        <p className="pb-4">Flota aut</p>
        <p className="pb-4">Cennik</p>
        <p className="pb-4">Lokalizacje</p>
        <p className="pb-4">Promocje</p>
      </div>
      {/* 3 */}
      <div>
        <h2 className="text-2xl pb-4">Wsparcie</h2>
        <p className="pb-4">FAQ</p>
        <p className="pb-4">Regulamin</p>
        <p className="pb-4">Polityka prywatności</p>
        <p className="pb-4">Kontakt</p>
      </div>
      {/* 4 subik*/}
      <div className="col-span-3 lg:col-span-1">
        <h2 className="text-2xl pb-2">Obserwuj po nowości</h2>
        <div className="relative border-2 border-[#EDECE3] rounded-2xl mt-5 p-4 ">
          <input type="text" className="text-xl focus:outline-none" />
          <button className="absolute right-0.5 bottom-0.5 bg-[#EDECE3] text-black  rounded-xl text-2xl p-3">
            Dołącz
          </button>
        </div>
      </div>
    </div>
  );
}
