import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-900 mt-20">
      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-4">
          Let's create something <span className="text-white">AWESOME</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mb-8">
          Ready to bring your vision to life? Let's collaborate and make magic
          happen!
        </p>
        <Button
          variant={"ghost"}
          className="border-2 border-gray-950 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
        >
          Get in Touch
        </Button>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 -m-6 sm:-m-8"
            />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl">
              VISOLEX
            </h2>
          </div>

          {/* Social Links or Additional Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Behance
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()} VISOLEX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
