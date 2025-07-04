import logoFooter from '../assets/logo_footer.svg';

function FooterSection() {
    return (
        <>
            <footer className="bg-[#1A2935] pb-6 w-full">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-0">
                    <div className="max-w-[1280px] mx-auto md:px-[80px] px-4 lg:px-0 flex flex-col items-start lg:flex-row lg:items-start lg:justify-between pt-6 lg:pt-0">
                        
                        {/* Logo*/}
                        <div className="mb-12 lg:mt-7 xs:w-full xs:flex xs:justify-start xs:pl-[5%] md:pl-[80px]">
                            <img 
                                src={logoFooter} 
                                alt="Affini Logo" 
                                className="w-[145px] h-[46.63px] footer-logo" 
                            />
                        </div>
    
                        {/* Menu */}
                        <nav className="w-full lg:w-auto xs:px-4">
                            <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row lg:space-x-[32px] gap-y-2 xs:gap-6 lg:py-[50px] text-white text-[14px] font-raleway font-medium leading-[142%]">
                                
                                <div className="hidden lg:flex lg:flex-row lg:space-x-[32px] footer-lg-menu">
                                    <li><a href="#" className="hover:underline text-left">HOME</a></li>
                                    <li><a href="#how-it-works" className="hover:underline text-left">HOW IT WORKS</a></li>
                                    <li><a href="#benefits" className="hover:underline text-left">BENEFITS</a></li>
                                    <li><a href="#pricing" className="hover:underline text-left">PRICING</a></li>
                                    <li><a href="#reviews" className="hover:underline text-left">REVIEWS</a></li>
                                    <li><a href="#contact-us" className="hover:underline text-left">CONTACT US</a></li>
                                    <li><a href="#" className="hover:underline text-left">PRIVACY POLICY</a></li>
                                    <li className="lg:pr-[80px]">
                                        <a href="#" className="hover:underline text-left">TERMS & CONDITIONS</a>
                                    </li>
                                </div>
    
                                <div className="hidden md:grid md:grid-cols-2 md:gap-4 lg:hidden">
                                    <div className="flex flex-col space-y-2">
                                        <li><a href="#" className="hover:underline text-left">HOME</a></li>
                                        <li><a href="#how-it-works" className="hover:underline text-left">HOW IT WORKS</a></li>
                                        <li><a href="#benefits" className="hover:underline text-left">BENEFITS</a></li>
                                        <li><a href="#pricing" className="hover:underline text-left">PRICING</a></li>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <li><a href="#reviews" className="hover:underline text-left">REVIEWS</a></li>
                                        <li><a href="#contact-us" className="hover:underline text-left">CONTACT US</a></li>
                                        <li><a href="#" className="hover:underline text-left">PRIVACY POLICY</a></li>
                                        <li><a href="#" className="hover:underline text-left">TERMS & CONDITIONS</a></li>
                                    </div>
                                </div>
    
                                <div className="flex flex-col space-y-2 xs:pr-4 md:hidden">
                                    <li><a href="#" className="hover:underline text-left">HOME</a></li>
                                    <li><a href="#how-it-works" className="hover:underline text-left">HOW IT WORKS</a></li>
                                    <li><a href="#benefits" className="hover:underline text-left">BENEFITS</a></li>
                                    <li><a href="#pricing" className="hover:underline text-left">PRICING</a></li>
                                </div>
                                <div className="flex flex-col space-y-2 xs:pl-4 md:hidden">
                                    <li><a href="#reviews" className="hover:underline text-left">REVIEWS</a></li>
                                    <li><a href="#contact-us" className="hover:underline text-left">CONTACT US</a></li>
                                    <li><a href="#" className="hover:underline text-left">PRIVACY POLICY</a></li>
                                    <li><a href="#" className="hover:underline text-left">TERMS & CONDITIONS</a></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
    
                    <div className="max-w-[1280px] mx-auto md:px-[80px] h-[1px] bg-white mt-2 xs:w-[91%] sm:w-[85%]"></div>
    
                    <div className="max-w-[1280px] mx-auto md:px-[80px] text-center text-[#FFFEFC]/70 text-[12px] lg:text-[16px] font-raleway font-medium px-4 leading-[142%] mt-4 mb-4">
                    © 2024 Affini. All rights reserved.
                    </div>
                </div>
            </footer>

                <style>{`
                @media (width: 1024px) and (height: 768px) {
    .footer-lg-menu {
        display: grid !important;
        grid-template-columns: repeat(3, auto);
        gap: 24px 60px;
        justify-content: start;
    }

    .footer-lg-menu li:nth-child(1) { 
        grid-column: 1; 
        grid-row: 1;
        margin-left: 32px;
    }

    .footer-lg-menu li:nth-child(2) { grid-column: 1; grid-row: 2; } /* HOW IT WORKS */
    .footer-lg-menu li:nth-child(3) { grid-column: 1; grid-row: 3; } /* BENEFITS */

    .footer-lg-menu li:nth-child(4) { grid-column: 2; grid-row: 1; } /* PRICING */
    .footer-lg-menu li:nth-child(5) { grid-column: 2; grid-row: 2; } /* REVIEWS */
    .footer-lg-menu li:nth-child(6) { grid-column: 2; grid-row: 3; } /* CONTACT US */

    .footer-lg-menu li:nth-child(7) { grid-column: 3; grid-row: 1; } /* PRIVACY POLICY */
    .footer-lg-menu li:nth-child(8) { grid-column: 3; grid-row: 2; } /* TERMS & CONDITIONS */

    .footer-logo {
        width: 145px !important;
        height: auto !important;
    }
}

                @media (width: 1024px) and (height: 1366px) {
                    .footer-lg-menu {
                        display: grid !important;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 32px;
                        justify-items: start;
                    }
                    .footer-lg-menu li:nth-child(1) {
                        grid-column: 1;
                        grid-row: 1;
                        margin-left: 30px;
                    }
                    .footer-lg-menu li:nth-child(2) {
                        grid-column: 1;
                        grid-row: 2;
                        margin-left: 80px;
                    }
                    .footer-lg-menu li:nth-child(6) {
                        grid-column: 1;
                        grid-row: 3;
                        margin-left: 80px;
                    }
                    .footer-lg-menu li:nth-child(3) {
                        grid-column: 2;
                        grid-row: 1;
                    }
                    .footer-lg-menu li:nth-child(4) {
                        grid-column: 2;
                        grid-row: 2;
                    }
                    .footer-lg-menu li:nth-child(5) {
                        grid-column: 2;
                        grid-row: 3;
                    }
                    .footer-lg-menu li:nth-child(7) {
                        grid-column: 2;
                        grid-row: 4;
                    }
                    .footer-lg-menu li:nth-child(8) {
                        grid-column: 2;
                        grid-row: 5;
                    }
                }

    @media (width: 1440px) {
    .footer-logo {
        width: 245px !important;
        height: 46px !important;
        padding-left: 0 !important;
        margin-left: -70px !important;
        display: block;
    }
}
            `}</style>
        </>
    );
}

export default FooterSection;