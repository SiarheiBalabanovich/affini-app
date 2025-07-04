import iconFormLeft from '../assets/form_icon_left.svg';
import iconFormRight from '../assets/form_icon_right.svg';

function ContactSection() {
    return (
        <section
            id="contact-us"
            className="bg-[#DCEFFF] py-16 xs:pt-[5px] xs:pb-10 px-4 md:px-16 lg:px-24"
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-start gap-[60px] xs:gap-[32px] mt-20 mb-20 xs:mt-10 xs:mb-1">
                {/* Title and subtitle */}
                <div className="lg:w-1/2 max-w-[577px]">
                    <h2 className="text-[58px] xs:text-[24px] font-['Playfair_Display'] text-[#1A2935] leading-[120%] mb-6 xs:mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-[20px] xs:text-[14px] font-['Raleway'] font-medium text-[#1A2935]/[80%] leading-[130%]">
                        Have questions about how Affini can help your family stay connected? Our team
                        is here to help you understand how our service can provide peace of mind for
                        you and companionship for your loved ones.
                    </p>
                </div>

                {/* Form */}
                <div
                    className="bg-[#FCFEFF] shadow-md p-10 xs:p-4 xs:pt-10 w-full max-w-[626px] min-h-[600px] xs:min-h-[500px] relative rounded-[40px] xs:rounded-[15px] flex flex-col justify-between"
                    style={{
                        boxShadow: "0px 8px 20px rgba(6, 28, 61, 0.08)",
                        borderRadius: "0 100px 0 100px",
                    }}
                >
                    {/* Top icon */}
                    <img
                        src={iconFormLeft}
                        alt="Form Left Icon"
                        className="absolute top-[15px] left-[15px] xs:top-[10px] xs:left-[10px] w-[40px] xs:w-[24px]"
                    />

                    <h3 className="text-[24px] xs:text-[16px] font-['Raleway'] font-medium text-[#1A2935]/[80%] leading-[130%] mb-6 xs:mb-4 mt-11">
                        Let&apos;s help you stay connected!
                    </h3>

                    <form action="https://formspree.io/f/mqaepbqw" method="POST" className="space-y-5 flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#1A2935] text-[18px] xs:text-[16px] font-['Raleway'] leading-[130%] mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full name"
                                    required
                                    className="w-full px-4 py-3 rounded-[5px] border border-[#DCEFFF]/[60%] text-[16px] text-[#1A2935]/[70%] placeholder-[#1A2935]/[70%] focus:ring-2 focus:ring-[#1A2935]/[30%] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[#1A2935] text-[18px] xs:text-[16px] font-['Raleway'] leading-[130%] mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    required
                                    className="w-full px-4 py-3 rounded-[5px] border border-[#DCEFFF]/[60%] text-[16px] text-[#1A2935]/[70%] placeholder-[#1A2935]/[70%] focus:ring-2 focus:ring-[#1A2935]/[30%] outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[#1A2935] text-[18px] xs:text-[16px] font-['Raleway'] leading-[130%] mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Start typing here..."
                                required
                                className="w-full h-[120px] px-4 py-3 rounded-[5px] border border-[#DCEFFF]/[60%] text-[16px] text-[#1A2935]/[70%] placeholder-[#1A2935]/[70%] focus:ring-2 focus:ring-[#1A2935]/[30%] outline-none resize-none"
                            ></textarea>
                        </div>
                        <div className="mt-4">
                        <button
    type="submit"
    className="w-[200px] xs:w-[190px] h-[34px] xs:h-[32px] bg-[#1A2935] text-[#FCFEFF] text-[14px] xs:text-[12px] font-semibold leading-[142%] rounded-md shadow hover:bg-[#2A3A45] transition xs:ml-0 ml-[5px] mb-[90px] xs:mb-[90px]"
    style={{
        boxShadow: "-2px 8px 8px rgba(0, 0, 0, 0.08)",
    }}
>
    SEND
</button>
                        </div>
                    </form>
                    {/* Bottom icon */}
                    <img
                        src={iconFormRight}
                        alt="Form Right Icon"
                        className="absolute bottom-[10px] right-[10px] xs:bottom-[5px] xs:right-[5px] w-[40px] xs:w-[24px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;