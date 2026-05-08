import { useState } from "react";

import photoOneTestimonial from "../assets/testimonial_daughter_sarah.png";
import photoTwoTestimonial from "../assets/testimonial_son_michael.png";
import photoThreeTestimonial from "../assets/testimonial_daughter_lisa.png";
import testimonialArrow from "../assets/testimonial_arrow.svg";
import arrowPrev from "../assets/arrow_prev.svg";
import arrowNext from "../assets/arrow_next.svg";
import decorativeLine from "../assets/lines_reviews.svg";

import Star from "./Star";

const testimonials = [
  {
    text: "Affini has been wonderful for my mom. She loves having someone to chat with throughout the day, and I feel more connected than ever through the family dashboard. It’s given us both peace of mind.",
    name: "Sarah M.",
    role: "Daughter",
    photo: photoOneTestimonial,
  },
  {
    text: "Setup was incredibly simple - just gave Mom the new number and she started texting right away. The AI remembers her stories and preferences, making every conversation feel personal.",
    name: "Michael R.",
    role: "Son",
    photo: photoTwoTestimonial,
  },
  {
    text: "As someone living far from my parents, Affini helps me stay connected without being intrusive. The daily check-ins and activity updates are invaluable.",
    name: "Lisa K.",
    role: "Daughter",
    photo: photoThreeTestimonial,
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { text, name, role, photo } = testimonials[currentIndex];

  return (
    <section
      id="reviews"
      className="relative bg-whiteCustom px-4 py-20 md:px-10 lg:px-16"
    >
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-start gap-12 lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-playfair text-[24px] leading-[120%] text-primary md:text-[40px] lg:text-[58px]">
              Stories From Our Families
            </h2>

            <p className="font-raleway text-[14px] font-medium leading-[130%] text-primary/80 md:text-[18px] lg:text-[20px]">
              See how Affini helps families stay close, no matter the distance.
            </p>
          </div>
        </div>

        <div className="relative lg:w-1/2">
          <div className="relative z-20 mt-2 min-h-[220px] max-w-[499px] rounded-[20px] bg-whiteCustom p-8 shadow-review md:min-h-[180px]">
            <p className="font-raleway text-[14px] font-normal leading-[130%] tracking-[-0.005em] text-primary/70 md:text-[18px]">
              {text}
            </p>

            <img
              src={testimonialArrow}
              alt=""
              aria-hidden="true"
              className="absolute bottom-[-100px] left-[80px] h-[152px] w-[158px]"
            />
          </div>

          <div className="mt-20 flex items-center">
            <img
              src={photo}
              alt={`${name}, ${role}`}
              className="z-20 h-[122px] w-[122px] rounded-full shadow-review md:h-[160px] md:w-[160px]"
            />

            <div className="ml-4">
              <h3 className="font-playfair text-[20px] leading-[120%] text-primary md:text-[40px]">
                {name}
              </h3>

              <p className="mb-6 font-raleway text-[14px] leading-[130%] text-primary/80 md:text-[20px]">
                {role}
              </p>

              <div className="mt-2 flex text-star" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 text-star md:h-7 md:w-7"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={decorativeLine}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute z-0 opacity-80
          w-[500px] h-[395px]
          left-[-95px] top-[280px] rotate-[50deg]
          md:w-[495px]
          md:left-[-120px] md:top-[548px] md:rotate-[10deg]
          lg:w-[400px]
          lg:left-[-78px] xl:top-[405px] xl:rotate-[10deg]
          xl:w-[495px] xl:h-[770px]
          xl:left-[-43px] xl:top-[84px] xl:rotate-[10deg]
        "
      />

      <div className="relative z-20 mt-12 flex items-center justify-center">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={handlePrev}
          className="flex cursor-pointer items-center gap-1 px-4 py-2 transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <img
            src={arrowPrev}
            alt=""
            aria-hidden="true"
            className="h-[55px] w-[55px]"
          />
        </button>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={handleNext}
          className="ml-8 flex cursor-pointer items-center gap-1 px-4 py-2 transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <img
            src={arrowNext}
            alt=""
            aria-hidden="true"
            className="h-[90px] w-[60px]"
          />

          <span className="font-raleway text-[18px] font-normal leading-[130%] tracking-[-0.005em] text-primary">
            Next
          </span>
        </button>
      </div>
    </section>
  );
}

export default TestimonialsSection;
