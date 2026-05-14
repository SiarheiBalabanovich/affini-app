import logo from "../assets/logo_footer.svg";

const footerLinks = [
  { label: "HOME", href: "#" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "BENEFITS", href: "#benefits" },
  { label: "PRICING", href: "#pricing" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CONTACT US", href: "#contact-us" },
  { label: "PRIVACY POLICY", href: "#privacy" },
  { label: "TERMS & CONDITIONS", href: "#terms" },
];

function FooterSection() {
  return (
    <footer className="bg-primary text-whiteCustom">
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-10 lg:px-16">
        <div className="flex flex-col gap-[5.5rem] lg:flex-row lg:items-start lg:justify-between">
          <div>
            <img
              src={logo}
              alt="Affini Logo"
              className="h-auto w-[145px] md:w-[180px] lg:w-[211px]"
            />
          </div>

          <nav className="w-full" aria-label="Footer navigation">
            <ul
              className="
                grid grid-cols-2 gap-x-6 gap-y-3
                font-raleway text-[14px] font-medium
                md:grid-cols-3
                lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4
              "
            >
              {footerLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    className="hover:underline focus-visible:underline focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="my-6 h-px bg-whiteCustom/30" />

        <div className="text-center font-raleway text-[12px] text-whiteCustom/70 md:text-[14px]">
          © 2026 Affini. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;