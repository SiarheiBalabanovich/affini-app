import { useState, useEffect } from "react";
import photoOneTestimonial from "../assets/testimonial_daughter_sarah.png";
import photoTwoTestimonial from "../assets/testimonial_son_michael.png";
import photoThreeTestimonial from "../assets/testimonial_daughter_lisa.png";
import testimonialArrow from "../assets/testimonial_arrow.svg";
import Star from "./Star";
import arrowPrev from "../assets/arrow_prev.svg";
import arrowNext from "../assets/arrow_next.svg";
import decorativeLine from "../assets/lines_reviews.svg";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [starSize, setStarSize] = useState(28);

  useEffect(() => {
    const updateSize = () => {
      setStarSize(window.innerWidth < 768 ? 16 : 28);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
      className="py-16 xs:pb-[80px] xs:py-0 bg-white px-4 md:px-16 lg:px-24 relative"
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-start gap-12">
        {/* Title and subtitle */}
        <div className="lg:w-1/2">
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-[58px] font-['Playfair_Display'] text-[#1A2935] xs:text-[24px] font-regular leading-[120%]">
              Stories From Our Families
            </h2>
            <p className="text-[20px] font-['Raleway'] font-medium text-[#1A2935]/[80%] xs:text-[14px] leading-[130%]">
              See how Affini helps families stay close, no matter the distance.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="lg:w-1/2 relative">
          <div
            className="bg-white shadow-md rounded-[20px] p-8 relative mt-[10px] z-20"
            style={{
              maxWidth: "499px",
              minHeight: "180px",
              boxShadow: "0px 8px 40px rgba(19, 55, 85, 0.1)",
            }}
          >
            <p className="text-[18px] xs:text-[14px] font-raleway font-normal text-[#1A2935]/[70%] leading-[130%] tracking-[-0.005em]">
              {text}
            </p>

            {/* Arrow for testimonials */}
            <img
              src={testimonialArrow}
              alt="Testimonial Arrow"
              className="absolute"
              style={{
                width: "158px",
                height: "152px",
                left: "80px",
                bottom: "-100px",
              }}
            />
          </div>
          {/* Photo, name, role and rating */}
          <div className="flex items-center mt-20">
            <img
              src={photo}
              alt={name}
              className="w-[160px] h-[160px] xs:w-[122px] xs:h-[122px] rounded-full z-20"
              style={{
                boxShadow: "rgba(19, 55, 85, 0.1)",
              }}
            />
            <div className="ml-4">
              <h3 className="text-[40px] xs:text-[20px] font-['Playfair_Display'] text-[#1A2935] leading-[120%] -mt-19">
                {name}
              </h3>
              <p className="text-[20px] xs:text-[14px] font-['Raleway'] text-[#1A2935]/[80%] leading-[130%] mb-6">
                {role}
              </p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={starSize} color="#FAD378" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Line */}
      <img
        src={decorativeLine}
        alt="Decorative Line"
        className="absolute opacity-80 xs:w-[500px] xs:h-[395px] xs:left-[-95px] xs:top-[280px] xs:rotate-[50deg] lg:w-[495px] lg:h-[770px] lg:left-[-43px] lg:top-[54px] lg:rotate-[10deg] decorative-768 decorative-1024"
      />

      {/* Toggle buttons */}
      <div className="flex justify-center items-center mt-12">
        <button
          onClick={handlePrev}
          className="flex items-center gap-[4px] px-4 py-2 hover:opacity-80 transition z-50"
        >
          <img
            src={arrowPrev}
            alt="Icon Previous"
            className="w-[55px] h-[55px]"
          />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-[4px] px-4 py-2 hover:opacity-80 transition ml-8 z-50"
        >
          <img
            src={arrowNext}
            alt="Icon Next"
            className="w-[60px] h-[90px]"
          />
          <span className="text-[#1A2935] font-['Raleway'] font-normal text-[18px] leading-[130%] tracking-[-0.005em]">
            Next
          </span>
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) and (max-width: 768px) {
          .decorative-768 {
            transform: rotate(10deg) !important;
            top: 406px !important;
            left: -36px!important;
            width: 395px!important;
          }
        }
          @media (min-width: 1024px) and (max-width: 1024px) {
            .decorative-1024 {
            transform: rotate(45deg) !important;
            top: 80px !important;
            left: -38px!important;
            width: 450px!important;
          }
          }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;