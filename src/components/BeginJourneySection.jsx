import imageFamilies from '../assets/image-families.png';
import threadPatternFamily from '../assets/thread_pattern_family.svg';
import curvedBackground from '../assets/wave_background.png';
import logoAffini from '../assets/logo.png';

function BeginYourFamilyJourney() {
    return (
        <section className="relative flex justify-center items-center bg-cover bg-top w-full min-h-[676px] overflow-visible"
            style={{ backgroundImage: `url(${curvedBackground})` }}
        >
            <img
                src={threadPatternFamily}
                alt="Thread Pattern"
                className="thread-pattern thread-320 thread-390 thread-768 thread-1024"
            />

            <div className="relative flex flex-col md:flex-row items-center justify-between max-w-[1280px] w-full mx-auto pt-[100px] px-5 z-[2]">
                
                <div className="flex flex-col items-start text-left md:items-start md:text-left mb-8 md:mb-0 md:-mt-[120px] w-full">
                    <img 
                        src={logoAffini} 
                        alt="Affini Logo"
                        className="logo-default logo-320 logo-390 logo-768 logo-1024"
                    />
                    <h2 className="heading-default heading-320 heading-390 heading-768 heading-1024">
                        Begin Your Family’s <br /> Journey Today
                    </h2>
                    <p className="text-default text-320 text-390 text-768 text-1024">
                        Join the families who trust Affini to keep their loved ones engaged and connected. Try free for 7 days.
                    </p>
                    <button 
                        className="button-default button-320 button-390 button-768 button-1024"
                        onClick={() => document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        START FREE TRIAL
                    </button>
                </div>

                <div className="image-container image-320 image-390 image-768 image-1024">
                    <img 
                        src={imageFamilies}
                        alt="Family Journey"
                        className="family-image"
                    />
                </div>
            </div>

            <style>{`
                .thread-pattern {
                    position: absolute;
                    top: 35%;
                    left: 76%;
                    transform: translate(-50%, -50%) rotate(0deg);
                    width: 600px;
                    height: 600px;
                    z-index: 1;
                }
                .logo-default {
                    width: 211px;
                    height: 68px;
                    margin-bottom: 40px;
                }
                .heading-default {
                    font-family: 'Playfair Display', serif;
                    color: #1A2935;
                    font-size: 58px;
                    line-height: 120%;
                    margin-bottom: 16px;
                }
                .text-default {
                    font-family: 'Raleway', sans-serif;
                    color: #1A2935;
                    opacity: 0.8;
                    font-size: 18px;
                    line-height: 130%;
                    margin-bottom: 40px;
                }
                .button-default {
                    background-color: #1A2935;
                    color: #FCFEFF;
                    font-family: 'Raleway', sans-serif;
                    font-size: 16px;
                    border-radius: 4px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    width: 343px;
                    height: 48px;
                    margin-top: 8px;
                }

                .image-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                    overflow: hidden;
                    border-radius: 50%;
                }
                .family-image {
                    width: 100%;
                    height: auto;
                }

                @media (max-width: 320px) {
                    .image-320 {
                        max-width: 250px !important;
                        height: auto !important;
                    }
                    .logo-320 {
                        width: 152px !important;
                        height: 49px !important;
                        margin-bottom: 40px !important;
                    }
                    .heading-320 {
                        font-size: 24px !important;
                        text-align: left !important;
                        margin-bottom: 16px !important;
                    }
                    .text-320 {
                        font-size: 14px !important;
                        text-align: left !important;
                        margin-bottom: 40px !important;
                    }
                    .button-320 {
                        width: 280px !important;
                    }
                    .thread-320 {
                        top: 65% !important;
                        left: 55% !important;
                        width: 220px !important;
                        height: 220px !important;
                    }
                }

                @media (min-width: 321px) and (max-width: 390px) {
                    .image-390 {
                        max-width: 343px !important;
                        height: auto !important;
                    }
                    .logo-390 {
                        width: 152px !important;
                        height: 49px !important;
                        margin-bottom: 40px !important;
                    }
                    .heading-390 {
                        font-size: 24px !important;
                        margin-bottom: 16px !important;
                    }
                        .text-320 {
                        font-size: 14px !important;
                        text-align: left !important;
                        margin-bottom: 40px !important;
                    }
                    .thread-390 {
                        top: 60% !important;
                        left: 55% !important;
                        width: 285px !important;
                        height: 285px !important;
                    }
                }

                @media (min-width: 391px) and (max-width: 768px) {
                    .image-768 {
                        max-width: 343px !important;
                        height: 343px !important;
                    }
                    .logo-768 {
                        width: 180px !important;
                        height: 58px !important;
                    }
                    .heading-768 {
                        font-size: 36px !important;
                    }
                    .text-768 {
                        font-size: 16px !important;
                    }
                    .button-768 {
                        width: 320px !important;
                        height: 48px !important;
                    }
                    .thread-768 {
                        top: 35% !important;
                        left: 76% !important;
                        width: 350px !important;
                        height: 350px !important;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .image-1024 {
                        max-width: 650px !important;
                        height: 650px !important;
                        top: -50px !important;
                    }
                    .logo-1024 {
                        width: 190px !important;
                        height: 60px !important;
                        margin-bottom: 40px !important;
                    }
                    .heading-1024 {
                        font-size: 40px !important;
                        margin-bottom: 16px !important;
                    }
                    .text-1024 {
                        font-size: 17px !important;
                        margin-bottom: 40px !important;
                        max-width: 400px !important;
                    }
                    .button-1024 {
                        width: 330px !important;
                        height: 50px !important;
                    }
                    .thread-1024 {
                        top: 25% !important;
                        left: 81% !important;
                        width: 370px !important;
                        height: 370px !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default BeginYourFamilyJourney;