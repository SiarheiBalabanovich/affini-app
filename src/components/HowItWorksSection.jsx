import step1Image from '../assets/step1_img.png';
import step2Image from '../assets/step2_img.png';
import step3Image from '../assets/step3_img.png';
import simpleSetupIcon from '../assets/button_simple_setup.svg';
import iconCardStep from '../assets/icon_card_step.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-white pt-[166px] pb-[60px] px-[90px] xs:px-4 xs:py-[80px]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-[16px] xs:mb-[48px]">
          <h2 className="font-playfair text-[#1A2935] font-normal xs:text-[24px] sm:text-[64px] xs:leading-[32px] sm:leading-[120%] tracking-[0.02em]">
            How It Works
          </h2>
          <button className="flex items-center gap-[8px] text-[#1A2935] xs:text-[14px] sm:text-[18px] leading-[130%] font-raleway icon-768">
            <img
              src={simpleSetupIcon}
              alt="Simple Setup Icon"
              className="w-[38px] h-[61px]"
            />
            Simple Setup
          </button>
        </div>

        <div className="font-raleway xs:text-[16px] sm:text-[20px] text-[#1A2935B3] sm:mt-[0px] sm:ml-[500px] xs:mt-0 desc-768">
          <p className="mb-[20px]">Simple steps to keep your family connected.</p>
          <p>We make it easy to stay close while supporting independence.</p>
        </div>

        {/* Slider for <=768px */}
        <div className="block lg:hidden mt-[40px]">
          <Swiper
            spaceBetween={16}
            slidesPerView="auto"
            grabCursor
            style={{ width: '100%', maxWidth: 'none' }}
            className="w-full"
          >
            {[step1Image, step2Image, step3Image].map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex-shrink-0 rounded-[32px] bg-[rgba(180,229,200,0.6)] shadow-lg p-[16px] flex flex-col h-auto min-h-[400px]"
                style={{ width: '240px', borderRadius: '0 200px 200px 200px' }}
              >
                <div className="flex flex-col flex-grow">
                  <img
                    src={iconCardStep}
                    alt="Card Step Icon"
                    className="w-[24px] h-[24px] mb-[16px]"
                  />
                  <h3 className="font-playfair text-[#1A2935] text-[18px] leading-[120%] mb-[8px]">
                    {index === 0
                      ? 'Quick Setup'
                      : index === 1
                      ? 'Daily Chats'
                      : 'Family Updates'}
                  </h3>
                  <p className="font-raleway text-[#1A2935B3] text-[14px] leading-[150%] mb-[16px] flex-grow">
                    {index === 0
                      ? 'Two minutes to get started. Your loved one gets a dedicated number - no apps or downloads needed.'
                      : index === 1
                      ? 'Our AI companion reaches out with friendly messages throughout the day, following your loved one’s preferred schedule.'
                      : 'Check your easy-to-use dashboard for chat highlights and daily activities. Get important updates while maintaining privacy.'}
                  </p>
                </div>
                <div
                  className={`flex justify-center mt-auto ${
                    index === 0 ? 'mt-[20px]' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt="Step Image"
                    className="w-[154px] h-auto mx-auto object-contain pb-[8px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:flex flex-wrap lg:flex-nowrap justify-center items-start gap-8 md:gap-10 mt-[60px] xs:mt-[40px]">
          {[step1Image, step2Image, step3Image].map((image, index) => (
            <div
              key={index}
              className={`
                howitworks-card relative rounded-[32px] p-6 md:p-8 shadow-lg
                bg-[rgba(180,229,200,0.6)] w-[90%] md:w-[30%] lg:w-[32%] max-w-[410px]
                flex flex-col justify-between h-full min-h-[500px]
                ${index === 0 ? 'first-card' : ''}
              `}
              style={{ borderRadius: '0 150px 150px 150px' }}
            >
              <div>
                <img
                  src={iconCardStep}
                  alt="Card Step Icon"
                  className="w-[24px] h-[24px] mb-6"
                />
                <h3 className="font-playfair text-[#1A2935] text-[20px] md:text-[24px] leading-[120%] mb-4">
                  {index === 0
                    ? 'Quick Setup'
                    : index === 1
                    ? 'Daily Chats'
                    : 'Family Updates'}
                </h3>
                <p className="font-raleway text-[#1A2935B3] text-[14px] md:text-[16px] leading-[150%] text-left mb-0">
                  {index === 0
                    ? 'Two minutes to get started. Your loved one gets a dedicated number - no apps or downloads needed.'
                    : index === 1
                    ? 'Our AI companion reaches out with friendly messages throughout the day, following your loved one’s preferred schedule.'
                    : 'Check your easy-to-use dashboard for chat highlights and daily activities. Get important updates while maintaining privacy.'}
                </p>
              </div>
              <div
                className={`
                  relative mx-auto w-[80%] lg:w-[296px] h-auto mt-6
                  howitworks-image-container
                  ${index === 0 ? 'xl:translate-y-[20px]' : ''}
                  ${index === 2 ? 'third-card-img' : ''}
                `}
              >
                <img
                  src={image}
                  alt="Step Image"
                  className="w-full h-auto object-contain howitworks-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1440px */}
      <style>{`
        @media (min-width: 1440px) and (max-width: 1440px) {
          .howitworks-card {
            width: 400px !important;
            max-width: 400px;
            margin-left: 20px !important;
            margin-right: 20px !important;
          }
          .howitworks-card.first-card {
            transform: none !important;
          }
        }
      `}</style>

      {/* 768px */}
      <style>{`
        @media (min-width: 768px) and (max-width: 768px) {
          .desc-768 {
            margin-left: 0 !important;
            width: 600px !important;
            text-align: left;
          }
          .icon-768 {
            margin-bottom: 20px !important;
          }
        }
      `}</style>

      {/* 1024px */}
      <style>{`
        @media (min-width: 1024px) and (max-width: 1024px) {
          .howitworks-image-container {
            width: auto !important;
          }
          .howitworks-img {
            margin: 0 auto !important;
            display: block !important;
          }
          .third-card-img {
            transform: translateY(-15px) !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HowItWorksSection;