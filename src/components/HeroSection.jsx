import { useState, useEffect } from "react";
import checkboxIcon from "../assets/checkbox.svg";
import mainImage from "../assets/full_image_hero.png";
import imageHero1Mobile from "../assets/full_image_hero_mobile.png";

function HeroSection() {
  const [activeButton, setActiveButton] = useState("trial");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isSpecialResolution =
    windowSize.width === 1024 &&
    (windowSize.height === 1366 || windowSize.height === 768);

  const textContainerMaxWidth = isSpecialResolution ? "420px" : "500px";
  const textContainerPaddingLeft =
    isSpecialResolution || (windowSize.width === 1280 && windowSize.height === 800)
      ? "48px"
      : "";
  const heroImageTop = isSpecialResolution ? "-100px" : "-145px";
  const heroImageHeight = isSpecialResolution ? "800px" : "1000px";

  return (
    <section id="home" className="bg-[#DCEFFF] w-full relative lg2:pr-0">
      <div
        className="px-0 pt-[20px] pb-[140px] xs:pb-[36px] flex flex-col lg:flex-row justify-between items-start w-full relative"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="relative w-full lg:hidden">
          <img
            src={imageHero1Mobile}
            alt="Mobile Hero"
            className="w-full object-contain -mb-[115px] mt-[-160px] xs:mt-[-115px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div
          className="relative z-10 flex flex-col justify-center px-4 lg:px-0 text-left"
          style={{
            maxWidth: textContainerMaxWidth,
            paddingLeft: textContainerPaddingLeft,
          }}
        >
          <div
            className="bg-[#FCFEFF] text-[#1A2935] font-raleway font-semibold text-[12px] lg2:text-[20px] leading-[20px] lg2:leading-[24px] tracking-[0.06em] uppercase flex items-center max-w-[245px] lg2:max-w-[425px] mb-4"
            style={{ padding: "4px", gap: "10px", marginTop: "120px" }}
          >
            CONNECTING FAMILIES THROUGH AI
          </div>

          <h1 className="font-playfair text-[#1A2935] font-normal text-[24px] sm:text-[28px] lg2:text-[52px] leading-[28px] sm:leading-[32px] lg2:leading-[67.2px] tracking-[-0.03em] mb-4 text-wrap break-words">
            Care for your parents <br />
            through simple text <br />
            messages – No apps needed
          </h1>

          <p className="font-raleway text-[#1A2935B3] text-[12px] sm:text-[14px] lg2:text-[20px] leading-[18px] sm:leading-[22px] lg2:leading-[26px] mb-8 xs:mb-6">
            Keep your parents engaged with daily conversations, check-ins, and companionship.
            Works with their regular phone. No complicated setup.
          </p>

          <div className="flex flex-col lg2:flex-row items-start lg2:items-center gap-4 lg2:gap-10 mb-8 xs:mb-6 lg2:justify-start lg2:w-full lg2:ml-[0px]">
            <div className="flex items-center gap-2 lg2:flex-row lg2:gap-4">
              <img src={checkboxIcon} alt="Checkbox" className="w-[24px] h-[24px] flex-shrink-0" />
              <p className="text-[#1A2935] font-raleway font-normal text-[14px] lg2:text-[16px] leading-[20px] lg2:leading-[24px] whitespace-nowrap">
                Always there to chat
              </p>
            </div>
            <div className="flex items-center gap-2 lg2:flex-row lg2:gap-4">
              <img src={checkboxIcon} alt="Checkbox" className="w-[24px] h-[24px] flex-shrink-0" />
              <p className="text-[#1A2935] font-raleway font-normal text-[14px] lg2:text-[16px] leading-[20px] lg2:leading-[24px] whitespace-nowrap">
                Adapts to their schedule
              </p>
            </div>
            <div className="flex items-center gap-2 lg2:flex-row lg2:gap-4">
              <img src={checkboxIcon} alt="Checkbox" className="w-[24px] h-[24px] flex-shrink-0" />
              <p className="text-[#1A2935] font-raleway font-normal text-[14px] lg2:text-[16px] leading-[20px] lg2:leading-[24px] whitespace-nowrap">
                Thoughtful conversations
              </p>
            </div>
          </div>
          <div className="flex flex-col lg2:flex-row gap-4 lg2:gap-10 w-full">
            <button
              className={`h-[48px] rounded-[4px] font-raleway font-semibold text-[14px] sm:text-[16px] px-[10px] transition-all duration-300 shadow-lg ${
                activeButton === "trial" ? "bg-[#1A2935] text-[#FCFEFF]" : "bg-white text-[#1A2935]"
              }`}
              style={{
                boxShadow: "-2px 8px 8px rgba(0, 0, 0, 0.08)",
                width: windowSize.width === 1440 ? "320px" : "auto",
              }}
              onClick={() => setActiveButton("trial")}
              onMouseEnter={() => setActiveButton("trial")}
            >
              START FREE TRIAL
            </button>

            <button
              className={`h-[48px] rounded-[4px] font-raleway font-semibold text-[14px] sm:text-[16px] px-[10px] transition-all duration-300 shadow-lg ${
                activeButton === "how-it-works" ? "bg-[#1A2935] text-[#FCFEFF]" : "bg-white text-[#1A2935]"
              }`}
              style={{
                boxShadow: "-2px 8px 8px rgba(0, 0, 0, 0.08)",
                width: windowSize.width === 1440 ? "320px" : "auto",
              }}
              onClick={() => setActiveButton("how-it-works")}
              onMouseEnter={() => setActiveButton("how-it-works")}
            >
              SEE HOW IT WORKS
            </button>
          </div>
        </div>
      </div>

      <img
        src={mainImage}
        alt="Main"
        className="hidden lg:block absolute max-w-none"
        style={{
          top: heroImageTop,
          right: "0",
          height: heroImageHeight,
          zIndex: 1,
        }}
      />
    </section>
  );
}

export default HeroSection;