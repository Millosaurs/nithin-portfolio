import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between mx-4 sm:mx-6 lg:mx-8 my-2 px-2 sm:px-0">
      <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-50 lg:h-50 -m-6 sm:-m-8 lg:-m-10 font-bold"
        />
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl">VISOLEX</h1>
      </div>
      <div>
        <Button
          variant={"ghost"}
          className="border-2 border-gray-950 text-sm sm:text-base px-3 sm:px-4"
        >
          <span className="hidden sm:inline">Contact here</span>
          <span className="inline sm:hidden">Contact</span>
        </Button>
      </div>
    </div>
  );
}
