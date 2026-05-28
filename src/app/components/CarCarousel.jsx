"use client";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    loc: "Warszawa Centrum",
    price: "299 zł",
    tag: "Elektryczny",
    tagColor: "#16a34a",
    meta: "5 os. / Automat",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
  },
  {
    id: 2,
    name: "BMW 5 Series",
    loc: "Kraków Lotnisko",
    price: "349 zł",
    tag: "Premium",
    tagColor: "#2563eb",
    meta: "5 os. / Automat",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
  },
  {
    id: 3,
    name: "VW Tiguan",
    loc: "Gdańsk Centrum",
    price: "219 zł",
    tag: "SUV",
    tagColor: "#ea580c",
    meta: "7 os. / Automat",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    id: 4,
    name: "Mercedes C-Class",
    loc: "Wrocław Lotnisko",
    price: "389 zł",
    tag: "Luksus",
    tagColor: "#7c3aed",
    meta: "5 os. / Automat",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
  },
  {
    id: 5,
    name: "Toyota Corolla",
    loc: "Poznań Centrum",
    price: "139 zł",
    tag: "Ekonomiczny",
    tagColor: "#d97706",
    meta: "5 os. / Manual",
    img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80",
  },
];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

export default function CarCarousel() {
  const isMobile = useIsMobile();
  const visibleCount = isMobile ? 1 : 3;
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const total = cars.length;

  const extended = [...cars, ...cars];

  const getOffset = () => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.children[0];
    if (!card) return 0;
    const gap = isMobile ? 12 : 16;
    return current * (card.offsetWidth + gap);
  };

  const slide = (dir) => {
    setCurrent((prev) => (((prev + dir) % total) + total) % total);
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${getOffset()}px)`;
    }
  }, [current, isMobile]);

  const imgHeight = isMobile ? 220 : 260;

  return (
    <section style={s.section} className="mx-5 lg:mx-40 mt-20">
      <p style={s.label}>ODKRYJ</p>
      <div style={s.header}>
        <h2 style={s.title}>Znajdź swoje idealne auto</h2>
        <Button>Zobacz wszystkie</Button>
      </div>

      <div style={s.outer}>
        <div
          ref={trackRef}
          style={{
            ...s.track,
            gap: isMobile ? 12 : 16,
            transition: "transform 0.42s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {extended.map((car, i) => (
            <div
              key={`${car.id}-${i}`}
              style={{
                ...s.card,
                flex: isMobile
                  ? "0 0 88%"
                  : `0 0 calc(${100 / visibleCount}% - ${Math.ceil((16 * (visibleCount - 1)) / visibleCount)}px)`,
              }}
            >
              <div style={{ ...s.imgWrap, height: imgHeight }}>
                <img src={car.img} alt={car.name} style={s.img} />
                <span style={s.badgeLeft}>{car.meta}</span>
                <span style={{ ...s.badgeRight, background: car.tagColor }}>
                  {car.tag}
                </span>
              </div>

              <div style={s.body}>
                <p style={s.carName}>{car.name}</p>
                <p style={s.loc}>{car.loc}</p>
                <div style={s.footer}>
                  <span style={s.price}>
                    {car.price}
                    <span style={s.perDay}>/dzień</span>
                  </span>
                  <button style={s.btn}>Rezerwuj</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={s.nav}>
        <button
          style={s.navBtn}
          onClick={() => slide(-1)}
          aria-label="Poprzedni"
        >
          <MdArrowBackIosNew color="black" />
        </button>
        <div style={s.dots}>
          {cars.map((_, i) => (
            <div
              key={i}
              style={{
                ...s.dot,
                background: i === current ? "#111" : "#ddd",
                width: i === current ? 20 : 6,
              }}
            />
          ))}
        </div>
        <button style={s.navBtn} onClick={() => slide(1)} aria-label="Następny">
          <MdArrowForwardIos color="black" />
        </button>
      </div>
    </section>
  );
}

const s = {
  section: {
    fontFamily: "sans-serif",
  },
  label: {
    fontSize: 15,
    letterSpacing: "0.12em",
    color: "#999",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  header: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: { fontSize: 35, fontWeight: 600, color: "#111", margin: 0 },
  viewAll: { fontSize: 13, color: "#666", textDecoration: "none" },
  outer: { overflow: "hidden", width: "100%" },
  track: { display: "flex", willChange: "transform" },
  card: {
    borderRadius: 16,
    overflow: "hidden",
    background: "#fff",
    flexShrink: 0,
    border: "1px solid #eee",
  },
  imgWrap: { position: "relative", overflow: "hidden" },
  img: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  badgeLeft: {
    position: "absolute",
    top: 12,
    left: 12,
    fontSize: 18,
    fontWeight: 500,
    padding: "4px 10px",
    borderRadius: 99,
    background: "rgba(255,255,255,0.92)",
    color: "#111",
  },
  badgeRight: {
    position: "absolute",
    top: 12,
    right: 12,
    fontSize: 18,
    fontWeight: 500,
    padding: "4px 10px",
    borderRadius: 99,
    color: "#fff",
  },
  body: { padding: "14px 16px 16px" },
  carName: { fontSize: 22, fontWeight: 600, color: "#111", margin: "0 0 4px" },
  loc: { fontSize: 15, color: "#888", margin: "0 0 12px" },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTop: "1px solid #f0f0f0",
  },
  price: { fontSize: 30, fontWeight: 600, color: "#111" },
  perDay: { fontSize: 20, fontWeight: 400, color: "#999", marginLeft: 2 },
  btn: {
    fontSize: 20,
    padding: "7px 18px",
    borderRadius: 99,
    background: "#111",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 24,
  },
  navBtn: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "1px solid #ddd",
    background: "#fff",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dots: { display: "flex", gap: 6, alignItems: "center" },
  dot: { height: 6, borderRadius: 99, transition: "all 0.3s ease" },
};
