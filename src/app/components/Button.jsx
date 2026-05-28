export default function Button({ children, className }) {
  return (
    <button className="px-5 py-3 rounded-xl bg-black text-white transition-transform duration-300 hover:scale-110 ">
      {children}
    </button>
  );
}
