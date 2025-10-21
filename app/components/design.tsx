import { useState } from "react";
import { X } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  imgUrl?: string;
};

type CardData = {
  title: string;
  description: string;
  imgUrl?: string;
};

const cardData: CardData[] = [
  {
    title: "Design One",
    description: "This is a description for design one.",
    imgUrl: "/pc/Coca_Cola.png",
  },
  {
    title: "Design Two",
    description: "This is a description for design two.",
    imgUrl: "/pc/Bare_Anatomy.png",
  },
  {
    title: "Design Three",
    description: "This is a description for design three.",
    imgUrl: "/pc/Cold_Magic.png",
  },
  {
    title: "Design Four",
    description: "This is a description for design four.",
    imgUrl: "/pc/Dorito.jpg",
  },
  {
    title: "Design Five",
    description: "This is a description for design five.",
    imgUrl: "/pc/Heineken.png",
  },
  {
    title: "Design Six",
    description: "This is a description for design six.",
    imgUrl: "/pc/Iced_Coffee.png",
  },
  {
    title: "Design Seven",
    description: "This is a description for design seven.",
    imgUrl: "/pc/KFC_Ad.jpg",
  },
  {
    title: "Design Eight",
    description: "This is a description for design eight.",
    imgUrl: "/pc/Nike_Ad.jpg",
  },
  {
    title: "Design Nine",
    description: "This is a description for design nine.",
    imgUrl: "/pc/Nutella.png",
  },
  {
    title: "Design Ten",
    description: "This is a description for design ten.",
    imgUrl: "/pc/Pizza_Ad.jpg",
  },
  {
    title: "Design Eleven",
    description: "This is a description for design eleven.",
    imgUrl: "/pc/Starbucks.jpg",
  },
  {
    title: "Design Twelve",
    description: "This is a description for design twelve.",
    imgUrl: "/pc/wildstone.png",
  },
];

const acData: CardData[] = [
  {
    title: "Advertising Campaign",
    description: "This is a description for advertising campaign.",
    imgUrl: "/ac/Insta1.png",
  },
  {
    title: "Advertising Campaign",
    description: "This is a description for advertising campaign.",
    imgUrl: "/ac/Insta3.png",
  },
  {
    title: "Advertising Campaign",
    description: "This is a description for advertising campaign.",
    imgUrl: "/ac/MC.png",
  },
  {
    title: "Advertising Campaign",
    description: "This is a description for advertising campaign.",
    imgUrl: "/ac/MP.png",
  },
];

const pData: CardData[] = [
  {
    title: "Posters",
    description: "This is a description for posters.",
    imgUrl: "/p/1.jpg",
  },
  {
    title: "Posters",
    description: "This is a description for posters.",
    imgUrl: "/p/2.jpg",
  },
  {
    title: "Posters",
    description: "This is a description for posters.",
    imgUrl: "/p/3.png",
  },
  {
    title: "Posters",
    description: "This is a description for posters.",
    imgUrl: "/p/4.jpg",
  },
  {
    title: "Posters",
    description: "This is a description for posters.",
    imgUrl: "/p/5.png",
  },
  {
    title: "Posters",
    description: "This is a description for posters.",
    imgUrl: "/p/6.png",
  },
];

const caData: CardData[] = [
  {
    title: "Cover art",
    description: "This is a description for cover art.",
    imgUrl: "/ca/1.png",
  },
  {
    title: "Cover art",
    description: "This is a description for cover art.",
    imgUrl: "/ca/2.jpg",
  },
  {
    title: "Cover art",
    description: "This is a description for cover art.",
    imgUrl: "/ca/3.jpg",
  },
  {
    title: "Cover art",
    description: "This is a description for cover art.",
    imgUrl: "/ca/4.png",
  },
  {
    title: "Cover art",
    description: "This is a description for cover art.",
    imgUrl: "/ca/5.jpg",
  },
];

function Card({ imgUrl }: CardProps) {
  return (
    <div className="relative cursor-pointer h-full">
      <img
        src={imgUrl}
        alt="Design"
        className="relative rounded-lg overflow-hidden object-cover object-center w-full h-full z-10 transition-all duration-300 ease-out hover:translate-x-[12px] hover:translate-y-[12px]"
      />
      <div className="absolute inset-0 bg-black rounded-lg opacity-100 hover:opacity-0 transition-opacity duration-300 translate-x-[12px] translate-y-[12px] pointer-events-none" />
    </div>
  );
}

function Card2({ imgUrl }: CardProps) {
  return (
    <div className="relative cursor-pointer h-full">
      <img
        src={imgUrl}
        alt="Design"
        className="relative rounded-lg overflow-hidden object-cover object-center w-full h-full z-10 transition-all duration-300 ease-out hover:translate-x-[12px] hover:translate-y-[12px] aspect-square"
      />
      <div className="absolute inset-0 bg-black rounded-lg opacity-100 hover:opacity-0 transition-opacity duration-300 translate-x-[12px] translate-y-[12px] pointer-events-none" />
    </div>
  );
}

function BannerCard({ imgUrl, alt }: { imgUrl: string; alt: string }) {
  return (
    <div className="relative cursor-pointer h-full">
      <img
        src={imgUrl}
        alt={alt}
        className="relative rounded-lg overflow-hidden object-fit object-center w-full h-full z-10 transition-all duration-300 ease-out hover:translate-x-[12px] hover:translate-y-[12px]"
      />
      <div className="absolute inset-0 bg-black rounded-lg opacity-100 hover:opacity-0 transition-opacity duration-300 translate-x-[12px] translate-y-[12px] pointer-events-none" />
    </div>
  );
}

export default function Design() {
  return (
    <div id="design" className="mx-4 sm:mx-8 lg:mx-16 py-8 min-h-screen">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif">
        My Portfolio
      </h1>
      <p className="text-base sm:text-lg py-2 mb-8 underline px-2">
        Here is the collection of my designs
      </p>

      {/* Product Creative's Section - Keeping original masonry layout */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mx-4 sm:mx-12 lg:mx-20 my-8">
        Product Creative's
      </h1>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 sm:gap-8 lg:gap-12 space-y-4 sm:space-y-6">
        {cardData.map((item, idx) => (
          <div key={idx} className="break-inside-avoid">
            <Card {...item} />
          </div>
        ))}
      </div>

      {/* Advertising Campaign Section - Responsive Grid Layout */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mx-4 sm:mx-12 lg:mx-20 my-8">
        Advertising campaign
      </h1>

      {/* Mobile & Tablet: Simple masonry layout */}
      <div className="block lg:hidden columns-1 sm:columns-2 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
        <div className="break-inside-avoid">
          <BannerCard imgUrl="/ac/Leaderboard.png" alt="Billboard" />
        </div>
        {acData.map((item, idx) => (
          <div key={idx} className="break-inside-avoid">
            <Card {...item} />
          </div>
        ))}
        <div className="break-inside-avoid">
          <BannerCard imgUrl="/ac/Billboard.png" alt="Leaderboard" />
        </div>
        <div className="break-inside-avoid">
          <BannerCard imgUrl="/ac/RP.png" alt="RP Banner" />
        </div>
        <div className="break-inside-avoid">
          <BannerCard imgUrl="/ac/Billboard.png" alt="Leaderboard" />
        </div>
        <div className="break-inside-avoid">
          <BannerCard imgUrl="/ac/Billboard.png" alt="Leaderboard" />
        </div>
      </div>

      {/* Desktop: Original grid layout */}
      <div className="hidden lg:grid grid-cols-12 auto-rows-[100px] gap-4">
        {/* Billboard - wide banner (16:9 or wider) */}
        <div className="col-span-12 row-span-2">
          <BannerCard imgUrl="/ac/Leaderboard.png" alt="Billboard" />
        </div>
        {/* First portrait card - 9:16 aspect */}
        <div className="col-span-3 row-span-8">
          <Card {...acData[0]} />
        </div>
        {/* Second portrait card - 9:16 */}
        <div className="col-span-3 row-span-8">
          <Card {...acData[1]} />
        </div>
        {/* Third portrait card - 9:16 */}
        <div className="col-span-3 row-span-8">
          <Card {...acData[2]} />
        </div>
        {/* Fourth portrait card - 9:16 */}
        <div className="col-span-3 row-span-8">
          <Card {...acData[3]} />
        </div>
        {/* Leaderboard - wide banner */}
        <div className="col-span-8 row-span-2">
          <BannerCard imgUrl="/ac/Billboard.png" alt="Leaderboard" />
        </div>
        <div className="col-span-4 row-span-6">
          <BannerCard imgUrl="/ac/RP.png" alt="RP Banner" />
        </div>
        <div className="col-span-8 row-span-2">
          <BannerCard imgUrl="/ac/Billboard.png" alt="Leaderboard" />
        </div>
        <div className="col-span-8 row-span-2">
          <BannerCard imgUrl="/ac/Billboard.png" alt="Leaderboard" />
        </div>
      </div>

      {/*Posters */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mx-4 sm:mx-12 lg:mx-20 my-8 pt-12 sm:pt-16 lg:pt-20">
        Posters
      </h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-8 lg:gap-12 space-y-4 sm:space-y-6">
        {pData.map((item, idx) => (
          <div key={idx} className="break-inside-avoid">
            <Card {...item} />
          </div>
        ))}
      </div>

      {/*Cover art */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mx-4 sm:mx-12 lg:mx-20 my-8 pt-12 sm:pt-16 lg:pt-20">
        Cover Art
      </h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-8 lg:gap-12 space-y-4 sm:space-y-6">
        {caData.map((item, idx) => (
          <div key={idx} className="break-inside-avoid">
            <Card2 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
