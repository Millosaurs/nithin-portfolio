import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import Hero from "~/components/hero";
import Design from "~/components/design";
import Footer from "~/components/footer";
import About from "~/components/about";
import BrandIdentity from "~/components/BrandIdentity";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VISOLEX" },
    {
      name: "Portfolio",
      content:
        "I am a designer and this is my portfolio. I specialize in creating visually appealing and user-friendly designs for websites and applications.",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Design />
      <BrandIdentity />
      <About />
      <Footer />
    </div>
  );
}
