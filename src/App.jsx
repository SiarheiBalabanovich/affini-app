import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyChooseSection from './components/WhyChooseSection';
import BeginJourneySection from './components/BeginJourneySection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactFormSection from './components/ContactFormSection';
import FooterSection from './components/FooterSection';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <BeginJourneySection />
      <PricingSection />
      <TestimonialsSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
}

export default App;