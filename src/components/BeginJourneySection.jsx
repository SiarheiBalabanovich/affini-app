import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import imageFamilies from "../assets/image-families.png";
import threadPatternFamily from "../assets/thread_pattern_family.svg";
import curvedBackground from "../assets/wave_background.png";
import logoAffini from "../assets/logo.png";

function BeginJourneySection() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const el = imageRef.current;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative flex min-h-[600px] w-full items-center justify-center bg-cover bg-top md:min-h-[676px]"
      style={{ backgroundImage: `url(${curvedBackground})` }}
    >
      <img
        src={threadPatternFamily}
        alt=""
        aria-hidden="true"
        className="
          absolute z-10
          left-[55%] top-[65%]
          h-[220px] w-[220px]
          -translate-x-1/2 -translate-y-1/2
          md:left-[56%] md:top-[35%] md:h-[350px] md:w-[350px]
          lg:left-[76%] lg:top-[35%] lg:h-[600px] lg:w-[600px]
        "
      />

      <div className="relative z-20 flex w-full max-w-[1280px] flex-col items-center justify-between px-5 pt-16 md:flex-row md:pt-24 lg:pt-[100px]">
        <div className="mb-8 flex w-full flex-col items-start md:mb-0 md:-mt-[120px]">
          <img
            src={logoAffini}
            alt="Affini Logo"
            className="
              mb-10
              h-[49px] w-[152px]
              md:h-[58px] md:w-[180px]
              lg:h-[68px] lg:w-[211px]
            "
          />

          <h2
            className="
              mb-4
              font-playfair
              text-[24px] leading-[120%] text-primary
              md:text-[36px]
              lg:text-[58px]
            "
          >
            Begin Your Family’s <br /> Journey Today
          </h2>

          <p
            className="
              mb-10
              font-raleway
              text-[14px] text-primary/80
              md:text-[16px]
              lg:text-[18px]
            "
          >
            Join the families who trust Affini to keep their loved ones engaged and connected. Try free for 7 days.
          </p>

          <button
            type="button"
            className="
              h-12
              w-[280px] md:w-[320px]
              cursor-pointer
              rounded
              bg-primary
              text-[14px] text-whiteCustom
              shadow-soft
              hover:bg-primary/90
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/30
              md:text-[16px]
            "
            onClick={() =>
              document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            START FREE TRIAL
          </button>
        </div>

        <div
          className="
            flex w-full items-center justify-center
            max-w-[250px]
            overflow-hidden rounded-full
            md:max-w-[343px]
            lg:max-w-[600px]
          "
        >
          <img
            ref={imageRef}
            src={imageFamilies}
            alt="Family Journey"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default BeginJourneySection;