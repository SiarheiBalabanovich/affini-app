import { useState, useEffect } from "react";
import logoImg from "../assets/logo.png";


function Navbar() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1221);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1221);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="relative z-20">
      {/* Banner */}
      {isBannerVisible && (
        <div
          className="bg-[#1A2935] max-w-[100%] text-[#FCFEFF] flex items-center h-[32px] relative banner-1280-fix"
          style={{
            paddingLeft:
              typeof window !== "undefined" &&
              window.innerWidth === 1440
                ? "470px"
                : window.innerWidth === 1280
                ? "80px"
                : window.innerWidth <= 390
                ? "32px"
                : "120px",
            paddingRight:
              typeof window !== "undefined" &&
              window.innerWidth === 1440
                ? "120px"
                : window.innerWidth === 1280
                ? "80px"
                : "120px",
            justifyContent:
              typeof window !== "undefined"
                ? window.innerWidth === 1440
                  ? "start"
                  : window.innerWidth <= 390
                  ? "flex-start"
                  : "center"
                : "center",
            textAlign: "left",
            whiteSpace: window.innerWidth <= 390 ? "nowrap" : "normal",
          }}
        >
          <p
            className="font-raleway xs:text-[12px] leading-[18.78px]"
            style={{
              fontSize:
                typeof window !== "undefined"
                  ? window.innerWidth <= 320
                    ? "10px"
                    : window.innerWidth <= 390
                    ? "12px"
                    : "16px"
                  : "16px",
              width: "auto",
            }}
          >
            Stay connected with your loved ones, effortlessly!
          </p>

          <button
            className="absolute text-[#FCFEFF] w-6 h-6 flex items-center justify-center"
            style={{
              right:
                typeof window !== "undefined"
                  ? window.innerWidth === 1440
                    ? "110px"
                    : window.innerWidth <= 390
                    ? "16px"
                    : "40px"
                  : "40px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={() => setIsBannerVisible(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Navbar */}
      <div className="bg-[#FFFEFC] max-w-[100%] bg-opacity-70 h-[102px] xs:h-[64px] flex justify-center relative z-30">
        <div className="max-w-[1280px] w-full flex items-center justify-between px-4">
          {/* Logo */}
          <div
            className="flex items-center"
            style={{
              paddingLeft:
                typeof window !== "undefined" &&
                ((window.innerWidth === 1024 && window.innerHeight === 1366) ||
                  (window.innerWidth === 1280 && window.innerHeight === 800))
                  ? "48px"
                  : "",
              flexShrink: 0,
            }}
          >
            <img
              src={logoImg}
                alt="Affini Logo"
              className="xs:w-[66px] xs:h-[21px] sm:w-[80px] sm:h-[25px] md:w-[108px] md:h-[35px]"
              style={{
                width:
                  typeof window !== "undefined" &&
                  window.innerWidth === 1280 && window.innerHeight === 800
                    ? "108px"
                    : "",
              }}
            />
          </div>

          {/* Menu (Desktop) */}
          {!isMobileView && (
            <nav className="flex gap-[24px] whitespace-nowrap md:ml-[55px] md:mr-[382px] nav-1280-fix">
              <a href="#" className="font-raleway font-medium text-[14px] leading-[19.88px] text-[#1A2935] hover:underline">
                HOME
              </a>
              <a href="#how-it-works" className="font-raleway font-medium text-[14px] leading-[19.88px] text-[#1A2935] hover:underline">
                HOW IT WORKS
              </a>
              <a href="#benefits" className="font-raleway font-medium text-[14px] leading-[19.88px] text-[#1A2935] hover:underline">
                BENEFITS
              </a>
              <a href="#pricing" className="font-raleway font-medium text-[14px] leading-[19.88px] text-[#1A2935] hover:underline">
                PRICING
              </a>
              <a href="#reviews" className="font-raleway font-medium text-[14px] leading-[19.88px] text-[#1A2935] hover:underline">
                REVIEWS
              </a>
              <a href="#contact-us" className="font-raleway font-medium text-[14px] leading-[19.88px] text-[#1A2935] hover:underline">
                CONTACT US
              </a>
            </nav>
          )}

          {/* Button + Burger */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Login Button */}
            <button
              className="bg-[#1A2935] text-white font-semibold font-raleway text-[16px] leading-[19.88px] rounded-[4px] w-[114px] h-[40px] flex items-center justify-center gap-[8px] login-btn-1280"
              style={{
                marginRight:
                  typeof window !== "undefined" &&
                  window.innerWidth === 1280 &&
                  window.innerHeight === 800
                    ? "80px"
                    : "0px",
                flexShrink: 0,
              }}
            >
              LOG IN
              <img
                src="/src/assets/arrow-right.svg"
                alt="Arrow"
                className="w-[20px] h-[20px]"
              />
            </button>

            {/* Burger for mobile */}
            {isMobileView && (
              <div className="flex items-center">
                <button
                  className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="w-full h-[2px] bg-[#1A2935]"></span>
                  <span className="w-full h-[2px] bg-[#1A2935]"></span>
                  <span className="w-full h-[2px] bg-[#1A2935]"></span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1280px) and (max-width: 1280px) {
          .nav-1280-fix {
            margin-right: 0 !important;
          }
          .login-btn-1280 {
            margin-right: 0 !important;
          }
          .banner-1280-fix {
            padding-left: 80px !important;
            padding-right: 80px !important;
          }
        }
      `}</style>
    </header>
  );
}

export default Navbar;