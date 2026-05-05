import logo from "../assets/logo.png";

function FooterSection() {
  const links = [
    { label: "HOME", href: "#" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "BENEFITS", href: "#benefits" },
    { label: "PRICING", href: "#pricing" },
    { label: "REVIEWS", href: "#reviews" },
    { label: "CONTACT US", href: "#contact-us" },
    { label: "PRIVACY POLICY", href: "#privacy" },
    { label: "TERMS & CONDITIONS", href: "#terms" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-16 py-10">

        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Affini Logo"
              className="w-[145px] md:w-[180px] lg:w-[211px] h-auto"
            />
          </div>

          {/* Menu */}
          <nav className="w-full" aria-label="Footer navigation">
            <ul
            className="
            grid grid-cols-2 gap-y-3 gap-x-6
            md:grid-cols-3
            lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4
            text-[14px] font-raleway font-medium
            "
        >
              {links.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                <a
                href={link.href}
                className="hover:underline focus-visible:underline"
        >
                {link.label}
                </a>
                </li>
            ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/30 my-6" />

        {/* Bottom */}
        <div className="text-center text-[12px] md:text-[14px] text-white/70 font-raleway">
          © 2026 Affini. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
