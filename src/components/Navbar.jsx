import { useEffect, useState } from "react";
import logoImg from "../assets/logo.png";
import arrowRight from "../assets/arrow-right.svg";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "BENEFITS", href: "#benefits" },
  { label: "PRICING", href: "#pricing" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CONTACT US", href: "#contact-us" },
];

function Navbar() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-20">
      {isBannerVisible && (
        <div className="relative flex h-8 items-center bg-primary px-8 text-whiteCustom sm:justify-center sm:px-10 lg:px-20">
          <p className="font-raleway text-[10px] leading-[18px] min-[321px]:text-[12px] md:text-[16px]">
            Stay connected with your loved ones, effortlessly!
          </p>

          <button
            type="button"
            aria-label="Close banner"
            className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-whiteCustom hover:opacity-80 focus-visible:ring-2 focus-visible:ring-whiteCustom/50 md:right-10"
            onClick={() => setIsBannerVisible(false)}
          >
            ✕
          </button>
        </div>
      )}

      <div className="relative z-30 flex h-16 justify-center bg-whiteCustom/70 lg:h-[102px]">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-4 lg:px-10 xl:px-0">
          <a href="#" aria-label="Affini home" className="flex shrink-0 items-center">
            <img
              src={logoImg}
              alt="Affini Logo"
              className="h-auto w-[66px] sm:w-[80px] md:w-[108px]"
            />
          </a>

          <nav
            className="hidden items-center gap-6 whitespace-nowrap xl:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="font-raleway text-[14px] font-medium leading-[19.88px] text-primary hover:underline focus-visible:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              className="flex h-10 w-[114px] items-center justify-center gap-2 rounded bg-primary font-raleway text-[16px] font-semibold leading-[19.88px] text-whiteCustom transition hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              LOG IN
              <img
                src={arrowRight}
                alt=""
                aria-hidden="true"
                className="h-5 w-5"
              />
            </button>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="flex h-6 w-6 flex-col items-center justify-center gap-1 xl:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
            >
              <span className="h-[2px] w-full bg-primary" />
              <span className="h-[2px] w-full bg-primary" />
              <span className="h-[2px] w-full bg-primary" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-40 w-full bg-whiteCustom px-4 py-6 shadow-soft xl:hidden">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    className="font-raleway text-[14px] font-medium text-primary hover:underline focus-visible:underline"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;