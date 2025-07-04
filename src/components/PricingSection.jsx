import simpleSetupIcon from '../assets/button_simple_setup.svg';
import pricingImgLeft from '../assets/black_icon_pricing_left.svg';
import pricingImgRight from '../assets/black_icon_pricing_right.svg';
import pricingWhiteLeft from '../assets/white_icon_pricing_left.svg';
import pricingWhiteRight from '../assets/white_icon_pricing_right.svg';
import iconTree from '../assets/icon_tree.svg';
import iconTreeActive from '../assets/icon_tree_active.svg';
import iconCheck from '../assets/icon_check.svg';
import iconCheckGreen from '../assets/icon_check_green.svg';

function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-white py-[140px] px-[80px] xs:py-[80px] xs:px-[16px]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[16px] xs:gap-0 xs:flex xs:w-full">
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between xs:w-full">
            <h2 className="font-playfair text-[64px] xs:text-[24px] leading-[120%] tracking-[0.02em] text-[#1A2935] md:mb-[24px] xs:w-[142px]">
  Simple Pricing For Peace Of Mind
</h2>
            <button
              className="flex items-center gap-[8px] text-[#1A2935] text-[18px] xs:text-[16px] leading-[130%] font-raleway bg-transparent xs:mr-[20px] "
            >
              <img
                src={simpleSetupIcon}
                alt="Simple Setup Icon"
                className="w-[38px] h-[61px]"
              />
              Choose your plan
            </button>
          </div>

          <div className="font-raleway text-[20px] xs:text-[14px] text-[#1A2935B3] mt-[250px] xs:mt-4 xs:w-full">
            <p className="mb-[8px]">
              Choose the perfect way to stay connected with your loved ones. Both plans start with a 7-day free trial.
            </p>
          </div>
        </div>
        {/* Cards of plans */}
        <div className="pricing-container flex flex-col md:flex-row justify-center gap-[66px] xs:gap-[24px] mt-[80px] xs:mt-[40px]">
        {/* Card Basic Plan */}
          <div
            className="shadow-md p-[32px] flex flex-col items-start relative xs:w-[340px] md:w-[411px] pricing-card"
            style={{
              height: "638px",
              backgroundColor: "rgba(53, 244, 131, 0.6)",
              borderRadius: "20px",
              opacity: "0.7",
            }}
          >
            {/* Top and bottom corners with icons */}
            <div
              className="absolute top-0 left-0 right-0 flex justify-between top-icons"
              style={{ top: "16px", padding: "0 30px" }}
            >
              <img src={pricingImgLeft} alt="Icon Left" className="w-[24px] h-[24px]" />
              <img src={pricingImgRight} alt="Icon Right" className="w-[24px] h-[24px]" />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 flex justify-between"
              style={{ bottom: "16px", padding: "0 30px" }}
            >
              <img
                src={pricingImgLeft}
                alt="Icon Left"
                className="w-[24px] h-[24px]"
                style={{ transform: "rotate(270deg)" }}
              />
              <img
                src={pricingImgRight}
                alt="Icon Right"
                className="w-[24px] h-[24px]"
                style={{ transform: "rotate(-270deg)" }}
              />
            </div>
            {/* Icon and text Basic */}
            <div className="flex items-center gap-[8px]" style={{ marginTop: "40px" }}>
              <img
                src={iconTree}
                alt="Basic Icon"
                className="w-[38px] h-[40px] mt-[10px]"
              />
              <h3 className="text-[24px] font-playfair font-medium text-[#1A2935]">
                Basic
              </h3>
            </div>
            <div className="mt-[32px]">
              <div className="text-[#1A2935] font-['Playfair_Display']">
                <span className="text-[100px] xs:text-[64px] leading-none">$19.99</span>
                <span className="text-[20px] ml-2 leading-none">/month</span>
              </div>
            </div>
            <p
              className="text-[20px] font-raleway font-medium leading-[130%] text-[#161616] mt-[16px] mb-[30px]"
              style={{ textAlign: "left" }}
            >
              Perfect for daily connection:
            </p>
            <ul className="text-[18px] font-raleway text-[#1A2935] leading-[130%]" style={{ marginBottom: "24px" }}>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheck} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                Friendly conversations
              </li>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheck} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                Emotional support
              </li>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheck} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                20 messages per day
              </li>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheck} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                Extra messages available
              </li>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheck} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                7-day free trial
              </li>
            </ul>
            <button
              className="bg-[#1A2935] text-white font-raleway text-[16px] leading-[130%] flex items-center justify-center rounded-[4px] shadow-md w-[350px] xs:w-[280px]"
              style={{
                height: "48px",
                borderRadius: "4px",
                backgroundColor: "#1A2935",
                color: "#FFFFFF",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => {
                const howItWorksSection = document.getElementById("contact-us");
                if (howItWorksSection) {
                  howItWorksSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              START FREE TRIAL
            </button>
          </div>
          {/* Card Family Plan */}
          <div
  className="shadow-md p-[32px] flex flex-col items-start relative xs:w-[340px] md:w-[411px] pricing-card family-plan"
  style={{
    height: "638px",
    backgroundColor: "#198244",
    borderRadius: "20px",
  }}
>
            {/* Top and bottom corners with icons */}
            <div
              className="absolute top-0 left-0 right-0 flex justify-between top-icons"
              style={{ top: "16px", padding: "0 30px" }}
            >
              <img src={pricingWhiteLeft} alt="Icon Left" className="w-[24px] h-[24px]" />
              <img src={pricingWhiteRight} alt="Icon Right" className="w-[24px] h-[24px]" />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 flex justify-between"
              style={{ bottom: "16px", padding: "0 30px" }}
            >
              <img
                src={pricingWhiteLeft}
                alt="Icon Left"
                className="w-[24px] h-[24px]"
                style={{ transform: "rotate(270deg)" }}
              />
              <img
                src={pricingWhiteRight}
                alt="Icon Right"
                className="w-[24px] h-[24px]"
                style={{ transform: "rotate(-270deg)" }}
              />
            </div>
            {/* Icon and text Family */}
            <div className="flex items-center gap-[8px]" style={{ marginTop: "40px" }}>
              <img
                src={iconTreeActive}
                alt="Family Icon"
                className="w-[38px] h-[38px] mt-[10px]"
              />
              <h3 className="text-[24px] font-playfair font-medium text-[#FFFFFF]">
                Family
              </h3>
            </div>
            <div className="mt-[32px]">
              <div className="text-[#FFFFFF] font-['Playfair_Display']">
                <span className="text-[100px] xs:text-[64px] leading-none">$29.99</span>
                <span className="text-[20px] ml-2 leading-none">/month</span>
              </div>
            </div>
            <p
              className="text-[20px] font-raleway font-medium leading-[130%] text-[#FFFFFF] mt-[16px] mb-[30px]"
              style={{ textAlign: "left" }}
            >
              Everything you need to stay close:
            </p>
            <ul className="text-[18px] font-raleway text-[#FFFFFF] leading-[130%]" style={{ marginBottom: "24px" }}>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheckGreen} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                + All Basic features
              </li>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheckGreen} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                Family dashboard
              </li>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheckGreen} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                Activity insights
              </li>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheckGreen} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                Helpful reminders
              </li>
              <li className="mb-[16px] flex items-center" style={{ textAlign: "left", height: "20px" }}>
                <img src={iconCheckGreen} alt="Check Icon" className="w-[30px] h-[30px] mr-[14px]" />
                Daily check-ins
              </li>
            </ul>
            <button
              className="bg-[#1A2935] text-white font-raleway text-[16px] leading-[130%] flex items-center justify-center rounded-[4px] shadow-md w-[350px] xs:w-[280px]"
              style={{
                height: "48px",
                borderRadius: "4px",
                backgroundColor: "#1A2935",
                color: "#FFFFFF",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => {
                const howItWorksSection = document.getElementById("contact-us");
                if (howItWorksSection) {
                  howItWorksSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              START FREE TRIAL
            </button>
          </div>
        </div>
      </div>
      <style>{`
      @media (min-width: 320px) and (max-width: 320px) {
    .pricing-card.family-plan {
    padding-bottom: 40px !important;
  }
}
        @media (max-width: 390px) and (max-height: 844px) {
          .pricing-card {
            width: calc(100% - 32px) !important;
            height: 580px !important;
            margin-left: 16px !important;
            margin-right: 16px !important;
            padding: 16px !important;
          }
          .pricing-card h3 {
            font-size: 20px !important;
          }
          .pricing-card div > div span:first-child {
            font-size: 64px !important;
          }
          .pricing-card div > div span:nth-child(2) {
            font-size: 14px !important;
          }
          .pricing-card p {
            font-size: 16px !important;
          }
          .pricing-card ul {
            font-size: 14px !important;
          }
          .pricing-card button {
            font-size: 14px !important;
            height: 36px !important;
            width: calc(100% - 30px) !important;
            margin-left: 10px !important;
            margin-right: 10px !important;
            margin-bottom: 20px !important;
            padding: 0 !important;
          }
          .top-icons {
            margin-bottom: 16px !important;
          }
        }
          @media screen and (max-width: 768px) and (min-height: 1024px) {
  .pricing-container {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
}
      `
      }</style>
    </section>
  );
}

export default PricingSection;