import { Button } from "./ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "./ui/button-group";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight">
          I make <span className="text-white">STUPID COOL</span> designs!
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-2xl mx-auto leading-relaxed px-2">
          Hit me with your best ideas and I'll make them come to life with my
          COOLNESS ofc{" "}
          <span className="inline-block rotate-90 font-bold">;)</span>
        </p>

        <div className="flex justify-center pt-2 sm:pt-4">
          <ButtonGroup className="flex justify-center border-2 rounded-md  sm:w-auto max-w-sm ">
            <a href="#design">
              <Button
                variant="ghost"
                className="text-sm sm:text-base flex-1 sm:flex-none px-6 sm:px-8 py-2 sm:py-3"
              >
                Designs
              </Button>
            </a>
            <ButtonGroupSeparator />
            <a href="#about">
              <Button
                variant="ghost"
                className="text-sm sm:text-base flex-1 sm:flex-none px-6 sm:px-8 py-2 sm:py-3"
              >
                About me
              </Button>
            </a>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
