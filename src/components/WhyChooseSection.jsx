import PropTypes from "prop-types";
import whyChooseImgLeft from "../assets/icon_left_whychoose.svg";
import whyChooseImgRight from "../assets/icon_right_whychoose.svg";
import imageWhyChoose from "../assets/whychoose_img.png";
import imageAlways from "../assets/alwaysconnected_img.png";
import arrowIcon from "../assets/icon_arrow_topright.svg";
import featuresIcon from "../assets/icon_features.svg";
import friendIcon from "../assets/icon_friend.svg";
import peaceIcon from "../assets/icon_peace.svg";
import simpleIcon from "../assets/icon_simple.svg";
import threadPattern from "../assets/thread_pattern.svg";

const features = [
  {
    icon: friendIcon,
    title: "A Friend Who Remembers",
    text: "Every chat builds on past conversations, creating meaningful connections. Perfect for daily check-ins and sharing moments.",
  },
  {
    icon: peaceIcon,
    title: "Real Peace of Mind",
    text: "Know how your loved ones are doing through easy-to-read insights about their daily life and mood. Get updates that matter while respecting their privacy.",
  },
  {
    icon: simpleIcon,
    title: "Simple for Everyone",
    text: "Your parents use regular text messaging - nothing new to learn. You get a simple dashboard to stay in the loop.",
  },
];

const cards = [
  {
    title: "Why Choose Affini",
    text: "We combine caring AI companionship with family connection, creating a service that’s both personal and reliable.",
    image: imageWhyChoose,
    imageAlt: "Woman with phone",
    isReversed: false,
  },
  {
    title: "Always Connected",
    text: "Our AI companion provides engaging conversation while keeping you informed about your loved one’s wellbeing.",
    image: imageAlways,
    imageAlt: "Woman with phone",
    isReversed: true,
  },
];

function WhyChooseSection() {
  return (
    <section
      id="benefits"
      className="relative mx-auto mt-[120px] flex w-full max-w-[1440px] flex-col items-center overflow-hidden bg-whiteCustom px-4 py-20 md:px-10 lg:px-16 lg:py-[170px]"
    >
      <div className="hidden w-full text-center lg:block lg:-mb-[290px]">
        <h2 className="ml-[84px] font-playfair text-[64px] leading-[120%] tracking-[-0.02em] text-primary">
          Why Choose Affini
        </h2>
      </div>

      <div className="relative flex w-full max-w-[1280px] flex-col gap-6 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-0 xxl:mt-[200px]">
        <img
          src={threadPattern}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none absolute z-0
            right-[-90px] top-[210px] h-[520px] w-[640px]
            max-md:left-[75px] max-md:top-[775px]
            max-[320px]:top-[725px]
          "
        />

        <BenefitCard card={cards[0]} />

        <div className="flex items-center justify-center gap-2 text-center lg:hidden">
          <img
            src={arrowIcon}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 max-[320px]:h-6 max-[320px]:w-6"
          />

          <h2 className="whitespace-nowrap font-playfair text-[20px] leading-[120%] tracking-[-0.02em] text-primary min-[391px]:text-[32px] max-[320px]:text-[18px]">
            Why Choose Affini
          </h2>
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-start lg:mt-[200px]">
          <div className="mb-6 flex items-center gap-2">
            <img
              src={featuresIcon}
              alt=""
              aria-hidden="true"
              className="h-[61px] w-[38px]"
            />

            <span className="font-raleway text-[16px] leading-[130%] tracking-[-0.005em] text-primary md:text-[18px]">
              Features
            </span>
          </div>

          <ul className="font-raleway text-primary/70">
            {features.map((feature) => (
              <li key={feature.title} className="mb-6 flex items-start">
                <img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  className="mr-6 h-[45px] w-[45px] shrink-0"
                />

                <div className="max-w-[339px]">
                  <strong className="mb-2 block font-playfair text-[20px] font-medium leading-[148%] text-primary md:text-[24px]">
                    {feature.title}
                  </strong>

                  <p className="font-raleway text-[12px] leading-[130%] tracking-[-0.005em] text-primary/80 md:text-[18px]">
                    {feature.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <BenefitCard card={cards[1]} />
      </div>
    </section>
  );
}

function BenefitCard({ card }) {
  const { title, text, image, imageAlt, isReversed } = card;

  return (
    <article
      className={`
        relative z-10 mx-auto flex w-full max-w-[350px] flex-col items-center
        rounded-[200px_200px_16px_16px]
        bg-benefitBlue p-8
        md:max-w-[411px]
        ${isReversed ? "lg:mt-[480px] lg:rotate-180" : ""}
      `}
    >
      <div
        className={`
          relative mt-[-15px] h-[300px] w-full max-w-[300px]
          overflow-hidden rounded-[200px_200px_0_0] bg-benefitBlue
          md:h-[382px] md:max-w-[362px]
          ${isReversed ? "lg:mt-[-10px]" : ""}
        `}
      >
        <img
          src={image}
          alt={imageAlt}
          className={`
            h-auto w-full object-cover
            ${isReversed ? "lg:rotate-180" : ""}
          `}
        />

        <img
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className={`
            absolute h-[50px] w-[50px]
            ${
              isReversed
                ? "left-2 top-[230px] rotate-180 md:left-[-30px] md:top-[270px] md:h-[85px] md:w-[165px]"
                : "left-[226px] top-5 md:right-[-7px] md:left-auto md:top-[50px] md:h-20 md:w-[90px]"
            }
          `}
        />
      </div>

      <div className={`mt-6 text-center ${isReversed ? "lg:rotate-180" : ""}`}>
        <h3
          className={`
            mb-2 font-playfair text-[20px] font-medium leading-[120%] text-whiteCustom md:text-[24px]
            ${isReversed ? "lg:mt-[52px]" : "lg:mt-[18px]"}
          `}
        >
          {title}
        </h3>

        <p
          className={`
            mx-auto max-w-[363px] font-raleway text-[14px] leading-[150%] text-whiteCustom md:text-[18px]
            ${isReversed ? "mb-[52px] lg:mb-[5px]" : "mb-[52px]"}
          `}
        >
          {text}
        </p>
      </div>

      <div
        className={`
          absolute left-0 flex w-full justify-between px-4
          ${isReversed ? "bottom-[42px]" : "bottom-8"}
        `}
      >
        <img
          src={whyChooseImgLeft}
          alt=""
          aria-hidden="true"
          className="h-6 w-6"
        />
        <img
          src={whyChooseImgRight}
          alt=""
          aria-hidden="true"
          className="h-6 w-6"
        />
      </div>
    </article>
  );
}

BenefitCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    isReversed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default WhyChooseSection;