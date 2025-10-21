export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight">
          About <span className="text-white">ME</span>
        </h2>

        <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed px-2">
            I'm a designer who believes that{" "}
            <span className="text-white font-semibold">
              cool doesn't have to be complicated
            </span>
            . My work is all about pushing boundaries while keeping things fun
            and functional.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed px-2">
            From{" "}
            <span className="text-white font-semibold">wild interfaces</span> to{" "}
            <span className="text-white font-semibold">sleek minimalism</span>,
            I love creating experiences that make people stop and say "whoa,
            that's different."
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed px-2">
            When I'm not designing, you'll find me exploring new trends,
            experimenting with weird ideas, and always asking "but what if we
            tried it <span className="italic">this</span> way?"
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
          <div className="border-2 rounded-md px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base">
            UI/UX Design
          </div>
          <div className="border-2 rounded-md px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base">
            Brand Identity
          </div>
          <div className="border-2 rounded-md px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base">
            Creative Direction
          </div>
          <div className="border-2 rounded-md px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base">
            Visual Design
          </div>
        </div>
      </div>
    </div>
  );
}
