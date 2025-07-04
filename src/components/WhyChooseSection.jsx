import whyChooseimgleft from '../assets/icon_left_whychoose.svg';
import whyChooseimgright from '../assets/icon_right_whychoose.svg';
import imageWhyChoose from '../assets/whychoose_img.png';
import imageAlways from '../assets/alwaysconnected_img.png';
import arrowIcon from '../assets/icon_arrow_topright.svg';
import featuresIcon from '../assets/icon_features.svg';
import friendIcon from '../assets/icon_friend.svg';
import peaceIcon from '../assets/icon_peace.svg';
import simpleIcon from '../assets/icon_simple.svg';
import threadPattern from '../assets/thread_pattern.svg';

function WhyChooseSection() {
  return (
    <section
      id="benefits"
      className="bg-white w-full flex flex-col items-center py-[170px] xs:py-0 overflow-hidden"
      style={{ maxWidth: '1440px', margin: '0 auto', marginTop: '120px' }}
    >
      {/* Title for full screen */}
      <div
        className="text-center -mb-[290px] hidden lg:block"
        style={{ width: '100%' }}
      >
        <h2
          className="font-playfair text-[#1A2935] text-[64px] xs:text-[24px] leading-[120%] tracking--2 mb-[-80px] xs:mb-0 ml-[84px] xs:ml-0"
        >
          Why Choose Affini
        </h2>
      </div>

      {/* Main content */}
      <div
        className="relative flex flex-col sm:flex-row sm:justify-between w-full xs:pl-[12px] md:px-[80px] xxl:mt-[200px]"
        style={{ gap: '24px' }}
      >
        {/* Decorative pattern */}
        <img
          src={threadPattern}
          alt="Decorative Thread Pattern"
          className="block thread-pattern-mobile"
          style={{
            position: 'absolute',
            top: '210px',
            right: '-90px',
            width: '640px',
            height: '520px',
            transform: 'rotate(0deg)',
          }}
        />

        {/* First card */}
        <div
          className="relative flex flex-col items-center card-style h-[640px] xs:h-[550px] xs:w-[350px] md:w-[411px] xs:mx-auto xs:mr-[20px]"
          style={{
            width: window.innerWidth <= 768 ? '350px' : '411px',
            borderTopLeftRadius: '200px',
            borderTopRightRadius: '200px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            padding: '32px',
            backgroundColor: '#6F97B9',
          }}
        >
          <div
            className="relative card-image-container"
            style={{
              width: window.innerWidth <= 768 ? '300px' : '362.74px',
              height: window.innerWidth <= 768 ? '300px' : '382px',
              borderRadius: '200px 200px 0 0',
              backgroundColor: '#6F97B9',
              position: 'relative',
              marginTop: '-15px',
            }}
          >
            <img
              src={imageWhyChoose}
              alt="Woman with phone"
              className="w-full sm:h-full xs:h-auto object-cover"
            />
            <img
              src={arrowIcon}
              alt="Arrow Icon"
              className="absolute card-arrow xs:top-[20px] xs:left-[226px] md:top-[50px] md:right-[-7px] w-[90px] xs:w-[50px] h-[80px] xs:h-[50px] transform rotate-0"
            />
          </div>
          <div className="text-center mt-[24px]">
            <h3
              className="font-playfair font-medium text-white text-[24px] xs:text-[20px] leading-[120%]"
              style={{ marginBottom: '8px', marginTop: '18px' }}
            >
              Why Choose Affini
            </h3>
            <p
              className="font-raleway font-normal text-white text-[18px] xs:text-[14px] leading-[150%]"
              style={{
                maxWidth: '363px',
                margin: '0 auto',
                marginBottom: '52px',
              }}
            >
              We combine caring AI companionship with family connection, creating a
              service that’s both personal and reliable.
            </p>
          </div>
          <div
            className="absolute w-full flex justify-between"
            style={{
              bottom: '32px',
              padding: '0 16px',
            }}
          >
            <img
              src={whyChooseimgleft}
              alt="Icon Left"
              className="w-[24px] h-[24px]"
            />
            <img
              src={whyChooseimgright}
              alt="Icon Right"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>

        <div
          className="whychoose-row lg:hidden text-center mb-4 xs:-mb-3 flex items-center justify-center gap-2"
          style={{ marginTop: '24px' }}
        >
          <img
            src={arrowIcon}
            alt="Some Icon"
            className="whychoose-icon"
            style={{ width: '40px', height: '40px' }}
          />
          <h2
            className="font-playfair text-[#1A2935] text-[64px] xs:text-[24px] leading-[120%] tracking--2"
            style={{ margin: 0 }}
          >
            Why Choose Affini
          </h2>
        </div>

        {/* Text section */}
        <div className="title-1024 flex-1 flex flex-col justify-start mt-[200px] xs:mt-[20px]">
          <div
            className="flex items-center gap-[8px]"
            style={{ marginBottom: '24px' }}
          >
            <img
              src={featuresIcon}
              alt="Features Icon"
              style={{ width: '38px', height: '61px' }}
            />
            <span
              className="font-raleway font-normal text-[#1A2935] text-[18px] xs:text-[16px] leading-[130%] tracking--0.5"
            >
              Features
            </span>
          </div>
          <ul className="font-raleway text-[#1A2935B3] text-[16px] leading-[150%]">
            {[
              {
                icon: friendIcon,
                title: 'A Friend Who Remembers',
                text: 'Every chat builds on past conversations, creating meaningful connections. Perfect for daily check-ins and sharing moments.',
              },
              {
                icon: peaceIcon,
                title: 'Real Peace of Mind',
                text: 'Know how your loved ones are doing through easy-to-read insights about their daily life and mood. Get updates that matter while respecting their privacy.',
              },
              {
                icon: simpleIcon,
                title: 'Simple for Everyone',
                text: 'Your parents use regular text messaging - nothing new to learn. You get a simple dashboard to stay in the loop.',
              },
            ].map(({ icon, title, text }, index) => (
              <li
                key={index}
                className="flex items-start"
                style={{ marginBottom: '24px' }}
              >
                <img
                  src={icon}
                  alt={`${title} Icon`}
                  style={{
                    width: '45px',
                    height: '45px',
                    marginRight: '24px',
                  }}
                />
                <div style={{ width: '339px' }}>
                  <strong
                    className="font-playfair font-medium text-[#1A2935] text-[24px] xs:text-[20px] leading-[148%]"
                    style={{ display: 'block', marginBottom: '8px' }}
                  >
                    {title}
                  </strong>
                  <p className="font-raleway font-normal text-[#1A2935CC] text-[18px] xs:text-[12px] leading-[130%] tracking--0.5">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Second card */}
        <div
          className="relative flex flex-col items-center card-style card-second h-[640px] xs:h-[550px] xs:w-[350px] md:w-[411px] xs:mt-0 md:mt-[480px]"
          style={{
            borderTopLeftRadius: '200px',
            borderTopRightRadius: '200px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            padding: '32px',
            backgroundColor: '#6F97B9',
            transform: 'rotate(180deg)',
          }}
        >
          <div
            className="relative card-image-container xs:w-[300px] xs:h-[300px] md:w-[362px] md:h-[382px]"
            style={{
              borderRadius: '200px 200px 0 0',
              backgroundColor: '#6F97B9',
              position: 'relative',
              marginTop: '-10px',
            }}
          >
            <img
              src={imageAlways}
              alt="Woman with phone"
              style={{ objectFit: 'cover', transform: 'rotate(180deg)' }}
            />
            <img
              src={arrowIcon}
              alt="Arrow Icon"
              className="absolute card-arrow xs:top-[230px] xs:left-[8px] md:top-[270px] md:left-[-30px] w-[165px] xs:w-[50px] h-[85px] xs:h-[50px] transform rotate-180"
            />
          </div>
          <div
            className="text-center mt-[24px]"
            style={{ transform: 'rotate(180deg)' }}
          >
            <h3
              className="font-playfair font-medium text-white text-[24px] xs:text-[20px] leading-[120%]"
              style={{
                marginBottom: '8px',
                marginTop: '52px',
              }}
            >
              Always Connected
            </h3>
            <p
              className="font-raleway font-normal text-white text-[18px] xs:text-[14px] leading-[150%]"
              style={{
                maxWidth: '363px',
                margin: '0 auto',
                marginBottom: '5px',
              }}
            >
              Our AI companion provides engaging conversation while keeping you
              informed about your loved one’s wellbeing.
            </p>
          </div>
          <div
            className="absolute w-full flex justify-between"
            style={{
              bottom: '42px',
              padding: '0 16px',
            }}
          >
            <img
              src={whyChooseimgleft}
              alt="Icon Left"
              className="w-[24px] h-[24px]"
            />
            <img
              src={whyChooseimgright}
              alt="Icon Right"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>

      <style>{`
        /* For 320px */
        @media (max-width: 320px) {
          #benefits .whychoose-row {
            display: inline-flex !important;
            align-items: center !important;
            gap: 6px !important;
            white-space: nowrap !important;
          }
          #benefits .whychoose-icon {
            width: 24px !important;
            height: 24px !important;
          }
          #benefits .whychoose-row h2 {
            font-size: 18px !important;
            line-height: 22px !important;
          }
          #benefits .card-style {
            width: 295px !important;
            height: auto !important;
          }
          #benefits .card-image-container {
            width: 270px !important;
            height: 300px !important;
            margin-top: -15px !important;
          }
          #benefits .card-arrow {
            width: 35px !important;
            height: 45px !important;
          }
          #benefits h3 {
            font-size: 20px !important;
          }
          #benefits p {
            font-size: 14px !important;
          }
          #benefits ul li strong {
            font-size: 14px !important;
          }
          #benefits ul li p {
            font-size: 12px !important;
          }
          #benefits .flex-1.flex.flex-col.justify-start {
            margin-top: 20px !important;
          }
          #benefits h2[class*="lg:hidden"] {
            font-size: 24px !important;
          }
            #benefits .thread-pattern-mobile {
            top: 725px !important;
            left: 75px !important;
          }
        }

        /* 321px - 390px */
        @media (min-width: 321px) and (max-width: 390px) {
          #benefits .whychoose-row {
            display: inline-flex !important;
            align-items: center !important;
            gap: 6px !important;
            white-space: nowrap !important;
          }
          #benefits .whychoose-icon {
            width: 28px !important;
            height: 28px !important;
          }
          #benefits .whychoose-row h2 {
            font-size: 20px !important;
            line-height: 24px !important;
          }
          #benefits h2[class*="lg:hidden"] {
            font-size: 28px !important;
          }
          #benefits ul li p {
            margin-right: 20px !important;
          }
          #benefits .card-second {
            margin-left: auto !important;
            margin-right: 20px !important;
          }
          #benefits .thread-pattern-mobile {
            top: 775px !important;
            left: 75px !important;
          }
        }

        /* 391px - 768px */
        @media (min-width: 391px) and (max-width: 768px) {
          #benefits .card-style {
            width: 411px !important;
          }
          #benefits .card-image-container {
            width: 362.74px !important;
            height: 382px !important;
          }
          #benefits .card-second {
            margin-top: 20px !important;
          }
          #benefits .card-arrow {
            width: 90px !important;
            height: 80px !important;
          }
          #benefits h3 {
            font-size: 24px !important;
          }
          #benefits p {
            font-size: 18px !important;
          }
          #benefits h2[class*="lg:hidden"] {
            font-size: 32px !important;
            margin-top: 40px !important;
          }
          #benefits .flex-1.flex.flex-col.justify-start {
            margin-top: 20px !important;
          }
          #benefits > div.relative.flex {
            flex-direction: column !important;
            align-items: center !important;
          }
        }

        /* 1024px - 1280px */
        @media (min-width: 1024px) and (max-width: 1280px) {
          #benefits .card-style {
            width: 380px !important;
          }
          #benefits .card-image-container {
            width: 335px !important;
            height: 350px !important;
          }
          #benefits .card-arrow {
            width: 80px !important;
            height: 70px !important;
          }
            #benefits h2 {
            margin-left: 200px;
            }
          #benefits h3 {
            font-size: 22px !important;
          }
          #benefits p {
            font-size: 16px !important;
          }
          #benefits > div.relative.flex {
            flex-direction: row !important;
            align-items: center !important;
          }
        }

          @media (min-width: 1024px) and (max-width: 1024px) {
          #benefits h2 {
            margin-left: 100px;
            margin-top: -150px !important;
            }
          }

        /* 1281px - 1440px */
        @media (min-width: 1281px) and (max-width: 1440px) {
          #benefits .card-style {
            width: 400px !important;
          }
          #benefits .card-image-container {
            width: 350px !important;
            height: 370px !important;
          }
          #benefits .card-arrow {
            width: 85px !important;
            height: 75px !important;
          }
          #benefits h3 {
            font-size: 23px !important;
          }
            #benefits h2 {
            margin-left: 170px;
            margin-bottom: -55px;
          }
          #benefits p {
            font-size: 17px !important;
          }
          #benefits > div.relative.flex {
            flex-direction: row !important;
            align-items: center !important;
          }
        }

@media (min-width: 1440px) and (max-width: 1440px) {
#benefits h2 {
            margin-left: 60px;
          }
}

        /* 1024px */
        @media (min-width: 1024px) and (max-width: 1024px) {
          #benefits {
            overflow-x: hidden;
            padding-left: 20px !important;
            padding-right: 20px !important;
            margin: 0 auto;
            text-align: center;
          }
          #benefits > div.relative.flex {
            margin: 0 auto;
            padding-left: 20px !important;
            padding-right: 20px !important;
            text-align: center;
          }
          #benefits .card-style {
            width: 240px !important;
            height: 480px !important;
            margin: 0 auto !important;
          }
          #benefits .card-image-container {
            width: 210px !important;
            height: 320px !important;
          }
          #benefits .card-arrow {
            width: 45px !important;
            height: 40px !important;
            top: 70px !important;
          }
          #benefits h3 {
            font-size: 20px !important;
          }
          #benefits p {
            font-size: 14px !important;
          }
          #benefits .card-second {
            margin-top: 280px !important;
          }
          #benefits .flex-1.flex.flex-col.justify-start {
            text-align: left !important;
          }
        }

          @media screen and (width: 1024px) and (height: 1366px) and (orientation: portrait) {
    #benefits h2 {
    margin-top: -120px;
    margin-left: 80px;
  }
}

            @media screen and (width: 1024px) and (height: 768px) and (orientation: portrait) {
    #benefits h2 {
    margin-top: -200px !important;
    margin-left: 0px; !important;
  }
      }
      `}</style>
    </section>
  );
}

export default WhyChooseSection;