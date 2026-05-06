import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import imageFamilies from '../assets/image-families.png';
import threadPatternFamily from '../assets/thread_pattern_family.svg';
import curvedBackground from '../assets/wave_background.png';
import logoAffini from '../assets/logo.png';


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
  }, imageRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      className="relative flex items-center justify-center w-full min-h-[600px] md:min-h-[676px] bg-cover bg-top"
      style={{ backgroundImage: `url(${curvedBackground})` }}
    >
      <img
        src={threadPatternFamily}
        alt=""
        aria-hidden="true"
        className="
          absolute z-10
          w-[220px] h-[220px]
          top-[65%] left-[55%]
          md:w-[350px] md:h-[350px] md:top-[35%] md:left-[56%]
          lg:w-[600px] lg:h-[600px] lg:top-[35%] lg:left-[76%]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-[1280px] px-5 pt-16 md:pt-24 lg:pt-[100px]">
        
        <div className="flex flex-col items-start w-full mb-8 md:mb-0 md:-mt-[120px]">
          
          <img
            src={logoAffini}
            alt="Affini Logo"
            className="
              mb-10
              w-[152px] h-[49px]
              md:w-[180px] md:h-[58px]
              lg:w-[211px] lg:h-[68px]
            "
          />

          <h2 className="
            font-playfair
            text-primary
            text-[24px]
            md:text-[36px]
            lg:text-[58px]
            leading-[120%]
            mb-4
          ">
            Begin Your Family’s <br /> Journey Today
          </h2>

          <p className="
            font-raleway
            text-primary/80
            text-[14px]
            md:text-[16px]
            lg:text-[18px]
            mb-10
          ">
            Join the families who trust Affini to keep their loved ones engaged and connected. Try free for 7 days.
          </p>

          <button
            type="button"
            className="
              bg-primary text-whiteCustom
              text-[14px] md:text-[16px]
              w-[280px] md:w-[320px]
              h-[48px]
              rounded
              shadow-soft
              cursor-pointer
              hover:bg-primary/90
              focus-visible:ring-2 focus-visible:ring-primary/30
            "
            onClick={() =>
              document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            START FREE TRIAL
          </button>
        </div>

        <div className="
          flex items-center justify-center
          w-full
          max-w-[250px]
          md:max-w-[343px]
          lg:max-w-[600px]
          rounded-full overflow-hidden
        ">
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
