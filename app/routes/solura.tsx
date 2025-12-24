import NavBar from "~/components/NavBar";
import Footer from "~/components/footer";
import type { Route } from "./+types/solura";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Solura - Brand Identity | VISOLEX" },
    {
      name: "description",
      content: "Solura brand identity design project showcasing modern aesthetics and creative vision.",
    },
  ];
}

export default function Solura() {
  const images = Array.from({ length: 11 }, (_, i) => `/bi/solura/guidelines-${i + 1}.png`);

  return (
    <div className="bg-[#f2f2f2]">
      <NavBar />
      <div className="mx-4 sm:mx-8 lg:mx-16 py-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mt-8 mb-4">
            Solura
          </h1>
          <p className="text-base sm:text-lg mb-12 text-zinc-600">
            Brand Identity Guidelines
          </p>
          
          <div className="flex flex-col gap-8">
            {images.map((src, index) => (
              <div key={index} className="w-full shadow-sm">
                <img 
                  src={src} 
                  alt={`Solura Brand Guidelines Page ${index + 1}`}
                  className="w-full h-auto object-contain rounded-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
