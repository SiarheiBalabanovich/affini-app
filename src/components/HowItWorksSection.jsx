import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import step1Image from "../assets/step1_img.png";
import step2Image from "../assets/step2_img.png";
import step3Image from "../assets/step3_img.png";
import simpleSetupIcon from "../assets/button_simple_setup.svg";
import iconCardStep from "../assets/icon_card_step.svg";

gsap.registerPlugin(ScrollTrigger);

function HowItWorksSection() {
  const sectionRef = useRef(null);

  const steps = [
    {
      title: "Quick Setup",
      description:
        "Two minutes to get started. Your loved one gets a dedicated number - no apps or downloads needed.",
      image: step1Image,
    },
    {
      title: "Daily Chats",
      description:
        "Our AI companion reaches out with friendly messages throughout the day, following your loved one’s preferred schedule.",
      image: step2Image,
    },
    {
      title: "Family Updates",
      description:
        "Check your easy-to-use dashboard for chat highlights and daily activities. Get important updates while maintaining privacy.",
      image: step3Image,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".howitworks-card");

      if (!cards.length) return;

      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-whiteCustom px-4 py-20 md:px-10 lg:px-16 lg:pt-[166px] lg:pb-[60px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-row items-center justify-between gap-4 mb-12">
          <h2 className="font-playfair text-[24px] leading-8 tracking-[0.02em] text-primary md:text-[48px] md:leading-[120%] lg:text-[64px]">
            How It Works
          </h2>

          <button
            type="button"
            className="flex items-center gap-2 font-raleway text-[14px] leading-[130%] text-primary md:text-[18px]"
          >
            <img
              src={simpleSetupIcon}
              alt=""
              aria-hidden="true"
              className="h-[61px] w-[38px]"
            />
            Simple Setup
          </button>
        </div>

        <div className="max-w-[600px] font-raleway text-[16px] leading-[150%] text-primary/70 md:text-[20px] lg:ml-[500px]">
          <p className="mb-5">Simple steps to keep your family connected.</p>
          <p>We make it easy to stay close while supporting independence.</p>
        </div>

        {/* Slider for mobile/tablet */}
        <div className="mt-10 block lg:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView="auto"
            grabCursor
            className="w-full"
          >
            {steps.map((step) => (
              <SwiperSlide
                key={step.title}
                className="
                  !w-[240px]
                  flex h-auto min-h-[400px] flex-col
                  rounded-[0_200px_200px_200px]
                  bg-softGreen
                  p-4
                  shadow-soft
                "
              >
                <div className="flex flex-grow flex-col">
                  <img
                    src={iconCardStep}
                    alt=""
                    aria-hidden="true"
                    className="mb-4 h-6 w-6"
                  />

                  <h3 className="mb-2 font-playfair text-[18px] leading-[120%] text-primary">
                    {step.title}
                  </h3>

                  <p className="mb-4 flex-grow font-raleway text-[14px] leading-[150%] text-primary/70">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto flex justify-center">
                  <img
                    src={step.image}
                    alt={`${step.title} illustration`}
                    className="mx-auto w-[154px] object-contain pb-2"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop cards */}
        <div className="mt-[60px] hidden justify-center gap-8 lg:flex lg:flex-nowrap">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="
                howitworks-card
                flex min-h-[500px] w-[32%] max-w-[410px] flex-col justify-between
                rounded-[0_150px_150px_150px]
                bg-softGreen
                p-8
                shadow-soft
              "
            >
              <div>
                <img
                  src={iconCardStep}
                  alt=""
                  aria-hidden="true"
                  className="mb-6 h-6 w-6"
                />

                <h3 className="mb-4 font-playfair text-[24px] leading-[120%] text-primary">
                  {step.title}
                </h3>

                <p className="font-raleway text-[16px] leading-[150%] text-primary/70">
                  {step.description}
                </p>
              </div>

              <div
                className={`
                  relative mx-auto mt-6 w-[80%] lg:w-[296px]
                  ${index === 0 ? "xl:translate-y-5" : ""}
                  ${index === 2 ? "lg:-translate-y-[15px]" : ""}
                `}
              >
                <img
                  src={step.image}
                  alt={`${step.title} illustration`}
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;