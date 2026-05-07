import simpleSetupIcon from "../assets/button_simple_setup.svg";
import pricingImgLeft from "../assets/black_icon_pricing_left.svg";
import pricingImgRight from "../assets/black_icon_pricing_right.svg";
import pricingWhiteLeft from "../assets/white_icon_pricing_left.svg";
import pricingWhiteRight from "../assets/white_icon_pricing_right.svg";
import iconTree from "../assets/icon_tree.svg";
import iconTreeActive from "../assets/icon_tree_active.svg";
import iconCheck from "../assets/icon_check.svg";
import iconCheckGreen from "../assets/icon_check_green.svg";

const plans = [
  {
    name: "Basic",
    price: "$19.99",
    description: "Perfect for daily connection:",
    cardClassName: "bg-planBasic/70 text-primary",
    titleClassName: "text-primary",
    priceClassName: "text-primary",
    descriptionClassName: "text-darkText",
    cornerLeft: pricingImgLeft,
    cornerRight: pricingImgRight,
    treeIcon: iconTree,
    checkIcon: iconCheck,
    features: [
      "Friendly conversations",
      "Emotional support",
      "20 messages per day",
      "Extra messages available",
      "7-day free trial",
    ],
  },
  {
    name: "Family",
    price: "$29.99",
    description: "Everything you need to stay close:",
    cardClassName: "bg-planFamily text-whiteCustom",
    titleClassName: "text-whiteCustom",
    priceClassName: "text-whiteCustom",
    descriptionClassName: "text-whiteCustom",
    cornerLeft: pricingWhiteLeft,
    cornerRight: pricingWhiteRight,
    treeIcon: iconTreeActive,
    checkIcon: iconCheckGreen,
    features: [
      "+ All Basic features",
      "Family dashboard",
      "Activity insights",
      "Helpful reminders",
      "Daily check-ins",
    ],
  },
];

function PricingSection() {
  const scrollToContact = () => {
    document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="bg-whiteCustom px-4 py-20 md:px-10 lg:px-16 lg:py-[140px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex w-full items-center justify-between gap-4 md:block">
            <h2 className="max-w-[620px] font-playfair text-[24px] leading-[120%] tracking-[0.02em] text-primary md:mb-6 md:text-[48px] lg:text-[64px]">
              Simple Pricing For Peace Of Mind
            </h2>

            <button
              type="button"
              className="flex shrink-0 cursor-pointer items-center gap-2 bg-transparent font-raleway text-[16px] leading-[130%] text-primary md:text-[18px]"
            >
              <img
                src={simpleSetupIcon}
                alt=""
                aria-hidden="true"
                className="h-[61px] w-[38px]"
              />
              Choose your plan
            </button>
          </div>

          <div className="max-w-[520px] font-raleway text-[14px] leading-[150%] text-primary/70 md:mt-[250px] md:text-[20px]">
            <p>
              Choose the perfect way to stay connected with your loved ones. Both plans start with a 7-day free trial.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 md:mt-20 lg:flex-row lg:items-stretch lg:gap-[66px]">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`
                relative flex min-h-[580px] w-full max-w-[411px] flex-col items-start
                rounded-[20px] p-4 shadow-soft
                md:min-h-[638px] md:p-8
                ${plan.cardClassName}
              `}
            >
              <div className="absolute left-0 right-0 top-4 flex justify-between px-[30px]">
                <img src={plan.cornerLeft} alt="" aria-hidden="true" className="h-6 w-6" />
                <img src={plan.cornerRight} alt="" aria-hidden="true" className="h-6 w-6" />
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-between px-[30px]">
                <img src={plan.cornerLeft} alt="" aria-hidden="true" className="h-6 w-6 -rotate-90" />
                <img src={plan.cornerRight} alt="" aria-hidden="true" className="h-6 w-6 rotate-90" />
              </div>

              <div className="mt-10 flex items-center gap-2">
                <img src={plan.treeIcon} alt="" aria-hidden="true" className="mt-2.5 h-10 w-[38px]" />
                <h3 className={`font-playfair text-[20px] font-medium md:text-[24px] ${plan.titleClassName}`}>
                  {plan.name}
                </h3>
              </div>

              <div className={`mt-8 font-playfair ${plan.priceClassName}`}>
                <span className="text-[64px] leading-none md:text-[100px]">
                  {plan.price}
                </span>
                <span className="ml-2 text-[14px] leading-none md:text-[20px]">
                  /month
                </span>
              </div>

              <p className={`mt-4 mb-[30px] text-left font-raleway text-[16px] font-medium leading-[130%] md:text-[20px] ${plan.descriptionClassName}`}>
                {plan.description}
              </p>

              <ul className="mb-6 flex flex-col gap-4 font-raleway text-[14px] leading-[130%] md:text-[18px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex min-h-5 items-center text-left">
                    <img
                      src={plan.checkIcon}
                      alt=""
                      aria-hidden="true"
                      className="mr-[14px] h-[30px] w-[30px]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-auto flex h-9 w-full cursor-pointer items-center justify-center rounded bg-primary font-raleway text-[14px] leading-[130%] text-whiteCustom shadow-soft transition hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/30 md:h-12 md:text-[16px]"
                onClick={scrollToContact}
              >
                START FREE TRIAL
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;