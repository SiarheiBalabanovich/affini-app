import iconFormLeft from "../assets/form_icon_left.svg";
import iconFormRight from "../assets/form_icon_right.svg";

function ContactSection() {
  return (
    <section
      id="contact-us"
      className="bg-lightBlue px-4 py-10 md:px-16 md:py-16 lg:px-24"
    >
      <div className="mx-auto mb-4 mt-10 flex max-w-[1280px] flex-col items-start gap-8 md:mb-20 md:mt-20 md:gap-14 lg:flex-row">
        <div className="max-w-[577px] lg:w-1/2">
          <h2 className="mb-4 font-playfair text-[24px] leading-[120%] text-primary md:mb-6 md:text-[36px] lg:text-[58px]">
            Get In Touch
          </h2>

          <p className="font-raleway text-[14px] font-medium leading-[130%] text-primary/80 md:text-[16px] lg:text-[20px]">
            Have questions about how Affini can help your family stay connected? Our team
            is here to help you understand how our service can provide peace of mind for
            you and companionship for your loved ones.
          </p>
        </div>

        <div className="relative flex min-h-[500px] w-full max-w-[626px] flex-col justify-between rounded-[0_100px_0_100px] bg-whiteCustom p-4 pt-10 shadow-soft md:min-h-[600px] md:p-10">
          <img
            src={iconFormLeft}
            alt=""
            aria-hidden="true"
            className="absolute left-[10px] top-[10px] w-6 md:left-[15px] md:top-[15px] md:w-10"
          />

          <h3 className="mb-4 mt-8 font-raleway text-[16px] font-medium leading-[130%] text-primary/80 md:mb-6 md:mt-11 md:text-[20px] lg:text-[24px]">
            Let&apos;s help you stay connected!
          </h3>

          <form
            action="https://formspree.io/f/mqaepbqw"
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block font-raleway text-[16px] text-primary md:text-[18px]"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                  className="w-full rounded border border-lightBlue/60 px-4 py-3 text-[16px] text-primary/70 placeholder-primary/70 outline-none transition focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block font-raleway text-[16px] text-primary md:text-[18px]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full rounded border border-lightBlue/60 px-4 py-3 text-[16px] text-primary/70 placeholder-primary/70 outline-none transition focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block font-raleway text-[16px] text-primary md:text-[18px]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Start typing here..."
                required
                className="h-[120px] w-full resize-none rounded border border-lightBlue/60 px-4 py-3 text-[16px] text-primary/70 placeholder-primary/70 outline-none transition focus-visible:ring-2 focus-visible:ring-primary/30"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="mb-[90px] ml-0 h-[32px] w-[190px] cursor-pointer rounded-md bg-primary text-[12px] font-semibold text-whiteCustom shadow-soft transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:ml-[5px] md:h-[34px] md:w-[200px] md:text-[14px]"
              >
                SEND
              </button>
            </div>
          </form>

          <img
            src={iconFormRight}
            alt=""
            aria-hidden="true"
            className="absolute bottom-[5px] right-[5px] w-6 md:bottom-[10px] md:right-[10px] md:w-10"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
