import checkboxIcon from "../assets/checkbox.svg";
import mainImage from "../assets/full_image_hero.png";
import imageHeroMobile from "../assets/full_image_hero_mobile.png";

function HeroSection() {
  const features = [
    "Always there to chat",
    "Adapts to their schedule",
    "Thoughtful conversations",
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-lightBlue">
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-4 pt-5 pb-10 md:pb-20 lg:min-h-[720px] lg:flex-row lg:items-center lg:px-10 lg:py-20 lg2:px-0">
        <div className="relative -mx-4 w-[calc(100%+2rem)] lg:hidden">
          <img
            src={imageHeroMobile}
            alt="Affini mobile messaging preview"
            className="mt-[-115px] -mb-[30px] w-full object-cover"
        />
        </div>

        <div className="relative z-10 flex w-full max-w-[500px] flex-col items-start">
          <div className="mb-4 mt-10 inline-flex max-w-[245px] items-center gap-2.5 bg-whiteCustom p-1 font-raleway text-[12px] font-semibold uppercase leading-5 tracking-[0.06em] text-primary lg2:mt-[120px] lg2:max-w-[425px] lg2:text-[20px] lg2:leading-6">
            Connecting families through AI
          </div>

          <h1 className="mb-4 font-playfair text-[24px] font-normal leading-[28px] tracking-[-0.03em] text-primary sm:text-[28px] sm:leading-8 lg2:text-[52px] lg2:leading-[67.2px]">
            Care for your parents <br />
            through simple text <br />
            messages – No apps needed
          </h1>

          <p className="mb-6 font-raleway text-[12px] leading-[18px] text-primary/70 sm:text-[14px] sm:leading-[22px] lg2:mb-8 lg2:text-[20px] lg2:leading-[26px]">
            Keep your parents engaged with daily conversations, check-ins, and companionship.
            Works with their regular phone. No complicated setup.
          </p>

          <div className="mb-6 flex flex-col items-start gap-4 lg2:mb-8 lg2:flex-row lg2:items-center lg2:gap-10">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 lg2:gap-4">
                <img
                  src={checkboxIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0"
                />
                <p className="whitespace-nowrap font-raleway text-[14px] font-normal leading-5 text-primary lg2:text-[16px] lg2:leading-6">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-4 lg2:flex-row lg2:gap-10">
            <button
              type="button"
              className="h-12 w-full rounded bg-primary px-2.5 font-raleway text-[14px] font-semibold text-whiteCustom shadow-soft transition hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/30 sm:text-[16px] lg2:w-[320px]"
              onClick={() => scrollToSection("contact-us")}
            >
              START FREE TRIAL
            </button>

            <button
              type="button"
              className="h-12 w-full rounded bg-whiteCustom px-2.5 font-raleway text-[14px] font-semibold text-primary shadow-soft transition hover:bg-whiteCustom/80 focus-visible:ring-2 focus-visible:ring-primary/30 sm:text-[16px] lg2:w-[320px]"
              onClick={() => scrollToSection("how-it-works")}
            >
              SEE HOW IT WORKS
            </button>
          </div>
        </div>
      </div>

      <img
        src={mainImage}
        alt="Affini messaging experience preview"
        className="pointer-events-none absolute right-0 top-[-145px] z-[1] hidden h-[1000px] max-w-none object-contain lg:block lg2:top-[-145px]"
      />
    </section>
  );
}

export default HeroSection;
