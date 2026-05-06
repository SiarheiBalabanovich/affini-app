import iconFormLeft from '../assets/form_icon_left.svg';
import iconFormRight from '../assets/form_icon_right.svg';

function ContactSection() {
  return (
    <section
      id="contact-us"
      className="bg-lightBlue py-10 md:py-16 px-4 md:px-16 lg:px-24"
    >
      <div className="mx-auto flex flex-col lg:flex-row items-start gap-8 md:gap-14 mt-10 md:mt-20 mb-4 md:mb-20 max-w-[1280px]">

        {/* Text */}
        <div className="lg:w-1/2 max-w-[577px]">
          <h2 className="
            text-[24px] md:text-[36px] lg:text-[58px]
            font-playfair text-primary
            leading-[120%]
            mb-4 md:mb-6
          ">
            Get In Touch
          </h2>

          <p className="
            text-[14px] md:text-[16px] lg:text-[20px]
            font-raleway font-medium
            text-primary/80
            leading-[130%]
          ">
            Have questions about how Affini can help your family stay connected? Our team
            is here to help you understand how our service can provide peace of mind for
            you and companionship for your loved ones.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="
            relative w-full max-w-[626px]
            min-h-[500px] md:min-h-[600px]
            bg-whiteCustom
            p-4 pt-10 md:p-10
            rounded-[0_100px_0_100px]
            flex flex-col justify-between
            shadow-soft
          "
        >
          {/* Top Icon */}
          <img
            src={iconFormLeft}
            alt=""
            aria-hidden="true"
            className="
              absolute top-[10px] left-[10px]
              w-[24px]
              md:top-[15px] md:left-[15px] md:w-[40px]
            "
          />

          <h3 className="
            text-[16px] md:text-[20px] lg:text-[24px]
            font-raleway font-medium
            text-primary/80
            leading-[130%]
            mb-4 md:mb-6
            mt-8 md:mt-11
          ">
            Let&apos;s help you stay connected!
          </h3>

          <form
            action="https://formspree.io/f/mqaepbqw"
            method="POST"
            className="flex flex-col space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="
                  block mb-1
                  text-[16px] md:text-[18px]
                  font-raleway
                  text-primary
                ">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                  className="
                    w-full px-4 py-3
                    rounded
                    border border-lightBlue/60
                    text-[16px] text-primary/70
                    placeholder-primary/70
                    focus:ring-2 focus:ring-primary/30
                    outline-none
                  "
                />
              </div>

              <div>
                <label className="
                  block mb-1
                  text-[16px] md:text-[18px]
                  font-raleway
                  text-primary
                ">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="
                    w-full px-4 py-3
                    rounded
                    border border-lightBlue/60
                    text-[16px] text-primary/70
                    placeholder-primary/70
                    focus:ring-2 focus:ring-primary/30
                    outline-none
                  "
                />
              </div>
            </div>

            <div>
              <label className="
                block mb-1
                text-[16px] md:text-[18px]
                font-raleway
                text-primary
              ">
                Message
              </label>

              <textarea
                name="message"
                placeholder="Start typing here..."
                required
                className="
                  w-full h-[120px]
                  px-4 py-3
                  rounded
                  border border-lightBlue/60
                  text-[16px] text-primary/70
                  placeholder-primary/70
                  focus:ring-2 focus:ring-primary/30
                  outline-none resize-none
                "
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="
                  w-[190px] md:w-[200px]
                  h-[32px] md:h-[34px]
                  bg-primary text-whiteCustom
                  text-[12px] md:text-[14px]
                  font-semibold
                  rounded-md
                  shadow-soft
                  hover:bg-primary/90
                  focus-visible:ring-2
                  focus-visible:ring-primary/30
                  cursor-pointer
                  transition
                  ml-0 md:ml-[5px]
                  mb-[90px]
                "
              >
                SEND
              </button>
            </div>
          </form>

          {/* Bottom Icon */}
          <img
            src={iconFormRight}
            alt=""
            aria-hidden="true"
            className="
              absolute bottom-[5px] right-[5px]
              w-[24px]
              md:bottom-[10px] md:right-[10px] md:w-[40px]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
