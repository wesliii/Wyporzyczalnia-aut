import About from "../components/About";
import BlogArticle from "../components/BlogArticle";
import CarCarousel from "../components/CarCarousel";
import Cta from "../components/Cta";
import Discover from "../components/Discover";
import DiscoverCards from "../components/DiscoverCards";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import Opinions from "../components/Opinions";
import WhyUs from "../components/WhyUs";

export default function MainPage({ blogs }) {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <Hero />{" "}
      </section>
      <section id="discover">
        <Discover />
      </section>
      <section id="cars">
        <CarCarousel />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="opinions">
        <Opinions />
      </section>
      <section id="blog">
        <BlogArticle blogs={blogs} />
      </section>
      <section id="cta">
        <Cta />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
