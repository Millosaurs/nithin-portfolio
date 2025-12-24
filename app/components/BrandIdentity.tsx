import { Link } from "react-router";

type BrandIdentityCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
};

function BrandIdentityCard({
  title,
  description,
  imageUrl,
  href,
}: BrandIdentityCardProps) {
  return (
    <Link to={href} className="block">
      <div className="relative cursor-pointer group">
        <div
          className="relative rounded-lg overflow-hidden w-full h-[400px] sm:h-[500px] lg:h-[800px] z-10 transition-all duration-300 ease-out group-hover:translate-x-[12px] group-hover:translate-y-[12px]"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-2">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-white/80">{description}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black rounded-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300 translate-x-[12px] translate-y-[12px] pointer-events-none" />
      </div>
    </Link>
  );
}

export default function BrandIdentity() {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-16 py-8">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mx-4 sm:mx-12 lg:mx-20 my-8">
        Brand Identity
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-12">
        <BrandIdentityCard
          title="Solura"
          description="A complete brand identity design project showcasing modern aesthetics and creative vision."
          imageUrl="/bi/solura/guidelines-1.png"
          href="/solura"
        />
      </div>
    </div>
  );
}
